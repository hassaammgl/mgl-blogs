import Blog from "@/models/Blog";
import { connectDB, disconnectDB } from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function PUT(request) {
    try {
        await connectDB();
        const body = await request.json();


        const newBlog = await Blog.findByIdAndUpdate({ _id: body._id }, body, {
            new: true,
        });
        if (!newBlog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ blog: newBlog }, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        );
    } finally {
        await disconnectDB();
    }
}
