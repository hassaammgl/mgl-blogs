import { connectDB, disconnectDB } from '@/lib/db/db';
import Blog from '@/models/Blog';
import { User } from '@/models/User';
import { NextResponse } from 'next/server'
import Like from '@/models/Likes';

export async function POST(req) {
    try {
        await connectDB();

        const { _id, user_id } = await req.json();

        // Fetch the blog by ID
        const blog = await Blog.findById(_id);
        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        // Fetch the user by user_id
        const userExists = await User.findOne({ user_id });
        if (!userExists) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Check if the user has already liked the blog
        const existingLike = await Like.findOne({
            blog: blog._id,
            user_id: userExists.user_id,
        });

        if (existingLike) {
            // Remove the like ID from the blog's likes array
            blog.likes = blog.likes.filter(
                (likeId) => likeId.toString() !== existingLike._id.toString()
            );

            // Update the blog and delete the like
            await Blog.findByIdAndUpdate(_id, { likes: blog.likes }, { new: true });
            await existingLike.deleteOne();

            return NextResponse.json({ like: false }, { status: 200 });
        }

        // Create a new like
        const like = new Like({
            blog: blog._id,
            user_id: userExists.user_id,
        });

        // Add the new like to the blog's likes array
        blog.likes.push(like._id);

        // Save the like and update the blog
        await like.save();
        await Blog.findByIdAndUpdate(_id, { likes: blog.likes }, { new: true });

        return NextResponse.json({ like: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB();
    }
}
