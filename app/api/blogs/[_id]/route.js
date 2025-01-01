import connectDB from '@/lib/db/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

// GET single blog
export async function GET(request, { params }) {
    try {
        await connectDB();
        const _id = (await params)._id
        console.log("_id:", _id);
        const blog = await Blog.findOne({ _id });



        // const blog = await Blog.findById({ _id }).populate('author').populate('comments');

        console.log(blog);


        // if (!blog) {
        // return NextResponse.json(
        // { error: 'Blog not found' },
        // { status: 404 }
        // );
        // }


        // Increment view count
        // await blog.updateViewCount();

        // return NextResponse.json(blog);

        return NextResponse.json({ message: "success" }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}