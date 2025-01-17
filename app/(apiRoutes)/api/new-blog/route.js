// app/api/blogs/route.js
import { connectDB, disconnectDB } from '@/lib/db/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@/models/User";


export async function POST(request) {
    try {
        await connectDB();
        const user = await currentUser()
        const body = await request.json();

        // Add publishedAt date if blog is being published
        if (body.isPublished) {
            body.publishedAt = new Date();
        }
        console.log(body);
        const userExists = await User.findOne({ email: user.emailAddresses[0].emailAddress })
        const { title, description, content, category, image, status, tags } = body;
        const blog = new Blog({
            title,
            description,
            content,
            category,
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