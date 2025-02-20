import { NextResponse } from "next/server";
import { User } from "@/models/User";
import { connectDB, disconnectDB } from "@/lib/db";

export async function GET(_, { params }) {
    try {
        const email = (await params).email

        console.log("🚀 ~ route.js:10 ~ GET ~ email:", email);
        await connectDB()
        const ifuserExists = await User.findOne({ email: email })

        console.log("🚀 ~ route.js:21 ~ GET ~ ifuserExists:", ifuserExists);

        if (ifuserExists) {
            return NextResponse.json({
                success: true,
                data: ifuserExists,

            }, { status: 200 })
        }
        else {
            return NextResponse.json({
                success: false,
                error: "User not found"
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