import Blog from "@/models/Blog";
import { connectDB, disconnectDB } from "@/lib/db/db";


export async function GET(_, { params }) {
    try {
        await connectDB();
        const _id = (await params)._id
        console.log("_id:", _id);
        const blog = await Blog.findById({ _id });

        if (!blog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        console.log(blog);



    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    } finally {
        await disconnectDB()
    }
}
