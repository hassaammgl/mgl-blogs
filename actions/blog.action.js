"use server";

import { apiRoutes } from "@/constants";


export const getBlogData = async (id) => {

    console.log(apiRoutes.blogs.get_by_id.url(id));


    const response = await fetch(apiRoutes.blogs.get_by_id.url(id), {
        method: apiRoutes.blogs.get_by_id.method,
        headers: {
            "Content-Type": "application/json",
        },
    });
    // console.log("response:", response);

    const res = response.json();
    return res;
}

export const getAllBlogs = async (limit) => {

    const response = await fetch(apiRoutes.blogs.get_all.url(limit), {
        method: apiRoutes.blogs.get_all.method,
        headers: {
            "Content-Type": "application/json",
        },
    });
    // console.log("response:", response);
    const res = response.json();
    return res;
}