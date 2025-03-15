"use client";
import Image from 'next/image';
import React from 'react';

const Blog = ({ blog }) => {

console.log("🚀 ~ Blog.jsx:6 ~ Blog ~ blog:", blog);


    return (
        <article className="max-w-3xl mx-auto p-4">
            <header className="mb-8">
                
                {blog.imageID && (
                    <Image
                        src={blog.imageID.imagePath.replace("/public", "")}
                        alt={blog.title}
                        width={800}
                        height={600}
                        
                        className="w-full h-auto rounded-lg mb-4"
                    />
                )}  
                <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
                {/*  {blog.subtitle && (
                    <p className="text-lg text-gray-600 mb-4">{blog.subtitle}</p>
                )}
                <div className="flex items-center space-x-4">
                    {blog.authorImage && (
                        <img
                            src={blog.authorImage}
                            alt={blog.author}
                            className="w-10 h-10 rounded-full"
                        />
                    )}
                    <div className="text-sm text-gray-500">
                        <p>{blog.author}</p>
                        <p>{new Date(blog.date).toLocaleDateString()}</p>
                    </div>
                </div>
                */}
            </header>
            <section
                className="prose prose-lg"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            /> 
        </article>
    );
};

export default Blog;
