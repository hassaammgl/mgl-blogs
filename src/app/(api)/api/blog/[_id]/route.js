import { NextResponse } from "next/server";
import { currentUser, auth, } from "@clerk/nextjs/server";
import { User } from "@/models/User";
import { connectDB, disconnectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { Image } from "@/models/Image";
import Comment from "@/models/Comments";
import Like from "@/models/Likes";

export async function GET(_, { params }) {
    const { _id } = (await params);
    console.log(_id);

    await connectDB()
    try {
        const blog = await Blog.findOne({ _id })
            .populate('author')
            .populate('imageID')
            .populate('comment')
            .populate('likes')
        
        if (blog) {
            return NextResponse.json({
                success: true,
                data: blog
            }, { status: 200 })
        }
        else {
            return NextResponse.json({
                success: false,
                error: "Blog not found"
            }, { status: 404 })
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    } finally {
        await disconnectDB()
    }
}