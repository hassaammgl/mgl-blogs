import { connectDB, disconnectDB } from '@/lib/db/db';
import Blog from '@/models/Blog';
import { User } from '@/models/User';
import { NextResponse } from 'next/server'
import { auth } from "@clerk/nextjs/server";
import Like from '@/models/Likes';

export async function POST(req) {
    const authResult = await auth()
    try {
        await connectDB();
        const { _id, user_id } = await req.json();
        const blog = await Blog.findById(_id);
        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }


        const userExists = await User.findOne({ user_id })
        console.log(userExists);

        if (!userExists) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const like = new Like({
            blog: blog._id,
            user: userExists._id
        });
        blog.likes.push(like._id);
        await like.save();
        console.log(blog.likes);
        await Blog.findByIdAndUpdate(_id, { likes: blog.likes }, { new: true });
        await blog.save();


        return NextResponse.json({
            like: true
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

