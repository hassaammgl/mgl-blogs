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

export const getAllBlogs = async (limit = 1300) => {

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


export const postComment = async (data) => {
    const response = await fetch(apiRoutes.comments.create.url(data._id), {
        method: apiRoutes.comments.create.method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    // console.log("response:", response);
    const res = response.json();
    return res;
}

export const getComments = async (id) => {
    const response = await fetch(apiRoutes.comments.get_all.url(id), {
        method: apiRoutes.comments.get_all.method,
        headers: {
            "Content-Type": "application/json",
        },
    });
    // console.log("response:", response);
    const res = response.json();
    return res;
}

export const likeBlog = async (_id, user_id) => {
    console.log(_id);
    const response = await fetch(apiRoutes.likes.url(), {
        method: apiRoutes.likes.method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id, user_id }),
    });
    // console.log("response:", response);
    const res = response.json();
    return res;
}

export const deleteBlog = async (id) => {
    const response = await fetch(apiRoutes.blogs.delete.url(id), {
        method: apiRoutes.blogs.delete.method,
        headers: {
            "Content-Type": "application/json",
        },
    });
    // console.log("response:", response);
    const res = response.json();
    return res;
}