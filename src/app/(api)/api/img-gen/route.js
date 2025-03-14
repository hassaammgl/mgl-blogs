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

    // Create directory if needed
    const dirPath = path.join(process.cwd(), 'public', 'tmp');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Generate safe filename
    const filePath = path.join(dirPath, `img-${Date.now()}.png`);
   await fs.writeFileSync(filePath, buffer);

    return { buffer, filePath };
}

export const POST = async (req) => {
    try {
        const { prompt, seed, model } = await req.json();

        if (!prompt || seed < 20) {
            return NextResponse.json(
                { error: 'Prompt is required and seed must be at least 20' },
                { status: 400 }
            );
        }

        await connectDB();

        const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=1200&height=630&seed=${seed || 7661}&model=${model || "flux"}&nologo=true`;

        // Get both buffer and file path
        const { buffer, filePath } = await downloadImage(imageUrl);

        // Convert to base64
        const base64String = buffer.toString('base64');
        const base64WithPrefix = `data:image/png;base64,${base64String}`;

        console.log('Image saved to:', filePath);        

        // Save to database
        const image = new Image({
            imagePath: filePath,
            base64: base64WithPrefix,
            url: imageUrl,
            prompt,
            seed,
            model,
            buffer
        });

        await image.save();

        return NextResponse.json({
            _id: image._id,
            imagePath: filePath,
            url: imageUrl,
            base64: base64WithPrefix,
            buffer
        }, { status: 200 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB();
    }
};