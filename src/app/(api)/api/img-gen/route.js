import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { NextResponse } from 'next/server';


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
    const { prompt, width, height, seed, model } = await req.json();

    if (!prompt || width < 200 || height < 200 || seed < 20) {
        return NextResponse.json({ error: 'All fields is required' }, { status: 400 });
    }

    try {
        const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width || 1024}&height=${height || 1024}&seed=${seed || 761}&model=${model || "flux"}`;
        console.log(prompt, width, height, seed, model);
        const path = downloadImage(imageUrl);
        return NextResponse.json({ imageUrl, path }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}