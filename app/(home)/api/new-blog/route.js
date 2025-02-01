// app/api/blogs/route.js
import { connectDB, disconnectDB } from '@/lib/db/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';
import { User } from "@/models/User";


export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();

        // Add publishedAt date if blog is being published
        if (body.isPublished) {
            body.publishedAt = new Date();
        }
        console.log(body);
        const { title, description, content, category, subcategory, subcategoryoption, image, status, tags, user_id } = body;

        const userExists = await User.findOne({ user_id })

        if (!userExists) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const updatedContent = await fetch('http://localhost:3000/api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        })

        const updatedContentJson = await updatedContent.json()
        console.log("updatedContentJson:", updatedContentJson);

        const blog = new Blog({
            title,
            description,
            content: updatedContentJson.result.html,
            realContent: content,
            category,
            subcategory,
            subcategoryoption,
            image,
            status,
            tags,
            author: userExists._id
        });
        await blog.save();

        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        );
    } finally {
        await disconnectDB()
    }
}