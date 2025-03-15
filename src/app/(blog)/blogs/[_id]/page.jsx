import React from 'react'
import { getBlogData } from '@/actions/blog.action';
import Blog from '@/components/pages/blogPage/Blog';

const page = async ({ params }) => {

    const { _id } = (await params);

    const data = await getBlogData(_id);

    console.log("🚀 ~ page ~ data:", data);
    
    return (
        <div>
            <Blog blog={data.data} />
        </div>
    )
}

export default page
