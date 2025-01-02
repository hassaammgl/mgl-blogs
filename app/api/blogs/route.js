import connectDB from '@/lib/db/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server'

export async function GET(req) {
    try {
        await connectDB();
        const url = new URL(req.url);
        const limit = url.searchParams.get('limit');
        console.log("limit", limit);


        // Get most viewed blogs with pagination
        const blogs = await Blog.find().limit(parseInt(limit)).sort({ views: -1 }).populate('author', 'username firstname lastname imageUrl').populate('comments', 'content createdAt').exec();
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