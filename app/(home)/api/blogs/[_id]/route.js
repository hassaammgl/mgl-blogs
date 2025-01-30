import { connectDB, disconnectDB } from '@/lib/db/db';
import Blog from '@/models/Blog';
import Likes from '@/models/Likes';
import User from '@/models/User';
import Comments from '@/models/Comments';
import { NextResponse } from 'next/server';

// GET single blog
export async function GET(_, { params }) {
    try {
        await connectDB();
        const _id = (await params)._id
        console.log("_id:", _id);
        const blog = await Blog.findById({ _id })
            .populate('author')
            .populate('comment')
            .populate('likes');

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
        console.log("error:", error);

        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB();
    }
}
export async function DELETE(_, { params }) {
    try {
        await connectDB();
        const _id = (await params)._id
        console.log("_id:", _id);
        const blog = await Blog.findByIdAndDelete({ _id })
        console.log(blog);
        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Blog deleted successfully' });

    } catch (error) {
        console.log("error:", error);

        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB();
    }
}

export async function PUT(req, { params }) {
    try {
        await connectDB();
        const _id = (await params)._id
        console.log("_id:", _id);
        const blog = await Blog.findByIdAndUpdate({ _id }, body, { new: true })
        console.log(blog);
        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(blog);

    } catch (error) {
        console.log("error:", error);

        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB();
    }
}