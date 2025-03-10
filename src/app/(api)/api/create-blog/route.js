import { NextResponse } from 'next/server';
import { connectDB, disconnectDB } from '@/lib/db';
import { Image } from '@/models/Image';
import fs from 'fs';
import path from 'path';
import Blog from "@/models/Blog"


function base64ToImage(base64String, filePath) {
    // Remove the data URL prefix if present
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');

    // Convert base64 to buffer
    const buffer = Buffer.from(base64Data, 'base64');

    // Write the file
    fs.writeFileSync(path.join(process.cwd(), filePath), buffer);

    console.log('Image saved to:', filePath);

    return filePath;
}

export const POST = async (req) => {
    let { imgByAi,  title, description, category, image, content, imageID } = await req.json();

    await connectDB();

    try {

        if (imgByAi) {
            const imageobj = await Image.findOne({ _id: imageID });
            if (!imageobj) {
                return NextResponse.json({ error: 'Image not found' }, { status: 404 });
            }
        } else {
            const imgPath = base64ToImage(image, `public/tmp/img-${Date.now().toLocaleString()}.png`);
            const newImage = new Image({
                imagePath: imgPath,
                base64: image,
                url: null
            });
            await newImage.save();
            imageID = newImage._id;
        }

        const newBlog = new Blog({
            title,
            description,
            category,
            imageID,
            content,
        });
        await newBlog.save();



        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
    finally {
        await disconnectDB();
    }
}