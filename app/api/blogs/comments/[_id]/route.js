import { connectDB, disconnectDB } from "@/lib/db/db";

export async function POST(_, { params }) {
    try {
        await connectDB();
        const _id = (await params)._id;
        console.log("_id:", _id);



    } catch (error) {

    } finally {
        await disconnectDB();
    }
}