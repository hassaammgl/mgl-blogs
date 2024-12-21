// app/api/blogs/category/[category]/route.js
import connectDB from '@/lib/db/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;

        const query = {
            category: params.category,
            status: 'published',
            isPublished: true
        };

        const total = await Blog.countDocuments(query);
        const blogs = await Blog.find(query)
            .sort({ publishedAt: -1 })
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
