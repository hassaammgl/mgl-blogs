import connectDB from '@/lib/db/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';


export async function GET(request) {
    try {
        await connectDB();
        const { limit } = await request.json();
        console.log("limit", limit);

        // Get most viewed blogs with pagination
        const blogs = await Blog.find()
            .sort({ viewCount: -1 })
            .limit(limit)
            .populate('author', 'username firstname lastname imageUrl')
            .populate('comments', 'content createdAt')
            .exec();
        console.log("blogs", blogs.length);


        return NextResponse.json({
            blogs,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}