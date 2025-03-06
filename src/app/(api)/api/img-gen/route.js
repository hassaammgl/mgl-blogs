import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { NextResponse } from 'next/server';
import { connectDB, disconnectDB } from '@/lib/db';
import { Image } from '@/models/Image';


async function downloadImage(imageUrl) {
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filePath = path.join(process.cwd(), 'public', 'tmp', `flux-${Date.now().toLocaleString()}.png`);
    fs.writeFileSync(filePath, buffer);
    console.log('Download Completed');
    return filePath;
}

export const POST = async (req) => {
    const { prompt, seed, model } = await req.json();

    await connectDB();

    if (!prompt || seed < 20) {
        return NextResponse.json({ error: 'All fields is required' }, { status: 400 });
    }

    try {
        const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${1200}&height=${630}&seed=${seed || 7661}&model=${model || "flux"}&nologo=${true}`;
        console.log(prompt, seed, model);
        const path = await downloadImage(imageUrl);
        const base64String = Buffer.from(fs.readFileSync(path)).toString('base64');
        console.log(base64String);
        const fileType = 'image/jpeg'; // Change this according to your file type
        const base64WithPrefix = `data:${fileType};base64,${base64String}`;

        console.log(base64WithPrefix);

        const image = new Image({
            imagePath: path,
            base64: base64WithPrefix,
            url: imageUrl
        });
        await image.save();
        return NextResponse.json(image, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
    finally {
        await disconnectDB();
    }
}