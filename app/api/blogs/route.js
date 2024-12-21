// app/api/blogs/route.js
import connectDB from '@/lib/mongoose';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

// GET all blogs
export async function GET(request) {
    try {
        await connectDB();

        // Get query parameters
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const category = searchParams.get('category');
        const status = searchParams.get('status');

        // Build query
        let query = {};
        if (category) query.category = category;
        if (status) query.status = status;

        // Calculate skip for pagination
        const skip = (page - 1) * limit;

        // Get total count for pagination
        const total = await Blog.countDocuments(query);

        // Get blogs with pagination
        const blogs = await Blog.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        return NextResponse.json({
            blogs,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

// CREATE new blog
export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();

        // Add publishedAt date if blog is being published
        if (body.isPublished) {
            body.publishedAt = new Date();
        }

        const blog = await Blog.create(body);
        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        );
    }
}
