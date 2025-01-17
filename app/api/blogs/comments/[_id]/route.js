import { connectDB, disconnectDB } from "@/lib/db/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import Comments from "@/models/Comments";
import { User } from "@/models/User";

export async function GET(_, { params }) {
    try {
        await connectDB();
        const _id = (await params)._id;
        console.log("_id:", _id);


        const comments = await Comments.find({ blog: _id }).populate('user');
        if (!comments) {
            return NextResponse.json(
                { error: 'Comments not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ comments }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB();
    }
}


export async function POST(req, { params }) {
    try {
        const data = await req.json();
        await connectDB();
        const _id = (await params)._id;
        console.log("_id:", _id);
        console.log("data:", data);


        const blog = await Blog.findById({ _id }).populate('author');
        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        const author = await User.findById(blog.author._id);
        if (!author) {
            return NextResponse.json(
                { error: 'Author not found' },
                { status: 404 }
            );
        }


        const comment = new Comments({
            blog: blog._id,
            comment: data.comment,
            userImg: author.imageUrl,
            userName: `${author.firstname} ${author.lastname}`,
        });

        console.log("comment:", comment);

        blog.comment.push(comment._id);
        await blog.save();
        await comment.save();


        return NextResponse.json({ comment }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB();
    }
}