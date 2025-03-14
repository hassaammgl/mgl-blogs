"use server";
import { currentUser } from '@clerk/nextjs/server'

const domain = process.env.APP_URL;


export const getUserData = async () => {
    const user = await currentUser()

    console.log("🚀 ~ blog.action.js:10 ~ getUserData ~ user:", user);

    const res = await fetch(`${domain}/api/user/${user.emailAddresses[0].emailAddress}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json();

    console.log("🚀 ~ blog.action.js:20 ~ getUserData ~ data:", data);



    return data
}
