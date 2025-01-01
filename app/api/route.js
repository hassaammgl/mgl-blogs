import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";
import { User } from "@/models/User";
import { apiRoutes } from "@/constants";


export async function GET(request) {
    const user = await currentUser()
    const authResult = await auth()

    if (!authResult.userId) {
        return NextResponse.redirect(apiRoutes.app)
    }

    const ifuserExists = await User.findOne({ email: user.emailAddresses[0].emailAddress })

    if (ifuserExists) {
        return NextResponse.redirect(apiRoutes.app)
    }

    const newUser = new User({
        username: user.username,
        firstname: user.firstName,
        lastname: user.lastName,
        user_id: authResult.userId,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl
    })

    console.log(user.id);
    console.log(authResult.userId);

    await newUser.save()
    console.log(newUser);

    return NextResponse.redirect(apiRoutes.app)
}
