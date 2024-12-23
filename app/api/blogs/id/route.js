// app/api/blogs/[id]/route.js
import connectDB from '@/lib/db/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

// GET single blog
export async function POST(request) {
    try {
        await connectDB();
        const { _id } = await request.json()

        const blog = await Blog.findById({ _id });

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
    }
}

// UPDATE blog
export async function PUT(request, { params }) {
    try {
        await connectDB();
        const body = await request.json();

        // If publishing for the first time, set publishedAt
        if (body.isPublished && !body.publishedAt) {
            body.publishedAt = new Date();
        }

        const blog = await Blog.findByIdAndUpdate(
            params.id,
            { $set: body },
            { new: true, runValidators: true }
        );

        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        );
    }
}

// DELETE blog
export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const blog = await Blog.findByIdAndDelete(params.id);

        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: 'Blog deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
