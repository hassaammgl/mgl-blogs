"use server";

import { apiRoutes } from "@/constants";


export const getBlogData = async (id) => {

    console.log(apiRoutes.blogs.get_by_id.url(id));


    const response = await fetch(apiRoutes.blogs.get_by_id.url(id));
    console.log("response:", response);

    return await response.json();
}
