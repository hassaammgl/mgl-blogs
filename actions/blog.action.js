"use server";

export const fetchBlogData = async (slug) => {
    try {
        const response = await fetch("http://localhost:3000/api/blogs/id", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id: slug }),
        });

        if (!response.ok) {
            throw new Error(`Error fetching blog data: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


export const fetchAllBlogs = async (limit) => {
    try {
        const response = await fetch("http://localhost:3000/api/blogs/get-blogs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ limit }), // Sending the limit in the request body
        });

        if (!response.ok) {
            throw new Error(`Error fetching all blogs: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


export const updateLikes = async (blogId) => {
    try {
        const response = await fetch("http://localhost:3000/api/blogs", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ blogId }), // Assuming you want to send the blogId in the request body
        });

        if (!response.ok) {
            throw new Error(`Error updating likes: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
