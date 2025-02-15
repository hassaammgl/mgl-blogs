import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { User } from "@/models/User";
import { connectDB, disconnectDB } from "@/lib/db";

export async function GET(_, { params }) {
    const authResult = await auth()
    const email = (await params).email

    if (!authResult.userId) {
        return authResult.redirectToSignIn()
    }
    try {
        console.log(email);
        await connectDB()
        // const ifuserExists = await User.findOne({ email: email })

        // if (ifuserExists) {
        //     return NextResponse.json({
        //         success: true,
        //         data: ifuserExists,

        //     }, { status: 200 })
        // }
        // else {
        //     return authResult.redirectToSignIn()
        // }
    } catch (error) {
        return NextResponse.error(new Error(error));
    } finally {
        await disconnectDB()
    }


}