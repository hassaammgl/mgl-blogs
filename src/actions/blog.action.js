"use server";
import { currentUser } from '@clerk/nextjs/server'

const domain = process.env.APP_URL;

const tryCatch = async (callback) => {
    try {
        return await callback();
    } catch (error) {
        return error;
    }
}

export const getUserData = async () => {
    const user = await currentUser()
    const res = await fetch(`${domain}/api/user/${user.emailAddresses[0].emailAddress}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json();
    return data
}