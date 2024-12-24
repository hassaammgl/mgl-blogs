"use server";
import axios from "axios";


export const fetchBlogData = async (slug) => {
    try {
        const response = await axios.post("http://localhost:3000/api/blogs/id", {
            _id: slug
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchAllBlogs = async (limit) => {
    try {
        const response = await axios.get("http://localhost:3000/api/blogs", {
            params: {
                limit: limit
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}