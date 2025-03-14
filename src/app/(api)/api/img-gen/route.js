import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { NextResponse } from 'next/server';
import { connectDB, disconnectDB } from '@/lib/db';
import { Image } from '@/models/Image';

async function downloadImage(imageUrl) {
    const response = await fetch(imageUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileName = `img-${Date.now()}.png`; // Use Date.now() directly
    const dirPath = path.join(process.cwd(), 'public', 'tmp');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    const filePath = path.join(dirPath, fileName);
    fs.writeFileSync(filePath, buffer);
    console.log('Download Completed');
    return filePath;
}

export const POST = async (req) => {
    const { prompt, seed, model } = await req.json();

    await connectDB();

    if (!prompt || seed < 20) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    try {
        const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${1200}&height=${630}&seed=${seed || 7661}&model=${model || "flux"}&nologo=${true}`;
        console.log(prompt, seed, model);
        const filePath = await downloadImage(imageUrl);
        const buffer = fs.readFileSync(filePath);
        const fileType = 'image/jpeg';

        console.log(buffer);
        

        const image = new Image({
            imagePath: filePath,
            url: imageUrl,
            data: buffer,
            contentType: fileType
        });
        await image.save();
        return NextResponse.json(image, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    } finally {
        await disconnectDB();
    }
};