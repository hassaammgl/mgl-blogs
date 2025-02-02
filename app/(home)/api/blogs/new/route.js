import { connectDB, disconnectDB } from '@/lib/db/db';
import Blog from '@/models/Blog';
import { User } from '@/models/User';
import { NextResponse } from 'next/server'

export async function GET(req) {
    try {
        await connectDB();
        const blogs = await Blog.find().populate("author").sort({ createdAt: -1 }).limit(8)
        console.log(blogs);
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
