import { connectDB, disconnectDB } from '@/lib/db/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server'

export async function GET(req) {
    try {
        await connectDB();
        const url = new URL(req.url);
        const limit = url.searchParams.get('limit');
        console.log("limit", limit);

        const blogs = await Blog.find().limit(limit).populate('author').populate('comments');

        return NextResponse.json({
            blogs,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB()
    }

}

