import { connectDB, disconnectDB } from '@/lib/db/db';
import Blog from '@/models/Blog';
import User from '@/models/User';
import { NextResponse } from 'next/server';

// GET single blog
export async function GET(_, { params }) {
    try {
        await connectDB();
        const _id = (await params)._id
        console.log("_id:", _id);
        const blog = await Blog.findById({ _id }).populate('author');

        console.log(blog);


        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }


        // Increment view count
        await blog.updateViewCount();

        return NextResponse.json(blog);

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB();
    }
}