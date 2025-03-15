import { NextResponse } from 'next/server';
import { connectDB, disconnectDB } from '@/lib/db';
import { Image } from '@/models/Image';
import fs from 'fs';
import path from 'path';
import Blog from "@/models/Blog";
import { User } from '@/models/User';

async function base64ToImage(buffer, filePath) {
    fs.writeFileSync(path.join(process.cwd(), filePath), buffer);
    console.log('Image saved to:', filePath);
    return { buffer, filePath };
}

export const POST = async (req) => {
    let { title, description, category, image, content, imageId, user } = await req.json();
    console.log(imageId);

    await connectDB();

    try {
        let myUser;
        let newBlog;

        if (imageId) {
            // If imageId exists, retrieve the image from the database
            const isImageExists = await Image.findOne({ _id: imageId });

            if (!isImageExists) {
                return NextResponse.json({ error: 'Image not found' }, { status: 404 });
            }


            // Create the blog with the existing image
            myUser = await User.findOne({ email: user });
            newBlog = new Blog({
                title,
                description,
                category,
                content,
                image: isImageExists._id, // Use the existing image ID
                author: myUser._id,
            });

            await newBlog.save();
        } else {
            // If imageId does not exist, save the new image
            const { buffer, filePath } = await base64ToImage(image, "/public/tmp/" + Date.now() + ".png");

            const newImage = new Image({
                imagePath: filePath,
                buffer,
                base64: image,
            });

            
            myUser = await User.findOne({ email: user });
            newBlog = new Blog({
                title,
                description,
                category,
                content,
                image: newImage._id,
                author: myUser._id,
            });
            
            await newImage.save();
            await newBlog.save();
        }

        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    } finally {
        await disconnectDB();
    }
}