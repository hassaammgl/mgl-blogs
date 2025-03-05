import fs from 'fs';
import fetch from 'node-fetch';
import { NextResponse } from 'next/server';


async function downloadImage(imageUrl) {
    const response = await fetch(imageUrl);
    const buffer = await response.buffer();
    fs.writeFileSync('', buffer);
    console.log('Download Completed');
}

// // Image details
// const prompt = 'A beautiful landscape';
// const width = 1024;
// const height = 1024; 
// const seed = 42; // Each seed generates a new image variation
// const model = 'flux'; // Using 'flux' as default if model is not provided

// const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

// downloadImage(imageUrl);

export const POST = async (req) => {
    const { prompt, width, height, seed, model } = await req.body;
    


    const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;
    console.log(prompt, width, height, seed, model);

    downloadImage(imageUrl);
    return NextResponse.json({ imageUrl });
}