"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { getAllBlogs } from "@/actions/blog.action";
import BlogCards from "@/components/BlogCards";

const Page = () => {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [blogsLength, setBlogsLength] = useState(6);

	const fetchBlogs = useCallback(async () => {
		setIsLoading(true);
		try {
			const res = await getAllBlogs(blogsLength);
			console.log("res:", res);
			setBlogs(res.blogs);
		} catch (error) {
			setIsLoading(false);
			console.log("error:", error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<div className="container mx-auto mt-12 p-8">
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
				Our Latest Blogs
			</h1>
			{/* Category Section */}
			{/* <div className="flex mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
				<ul className="flex space-x-4 whitespace-nowrap">
					{category?.map((category) => (
						<li key={category} className="flex items-center">
							<button
								className={`px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none ${
									selectedCategory === category
										? "bg-blue-500 text-white"
										: "bg-gray-200 text-gray-600 hover:bg-gray-300"
								}`}
								onClick={() => {
									setSelectedCategory(category);
									setBlogs([]); // Reset blogs on category change
									setCurrentPage(1); // Reset page
									setHasMore(true); // Reset hasMore flag
								}}
							>
								{category}
							</button>
						</li>
					))}
				</ul>
			</div> */}

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mx-auto">
				{!blogs || blogs.length === 0 ? (
					<h1 className="text-3xl md:text-4xl font-extrabold text-gray-600 dark:text-gray-300 text-center w-full">
						No blogs found yet
					</h1>
				) : (
					blogs.map((blog) => (
						<BlogCards key={blog._id} blog={blog} />
					))
				)}
			</div>
			{isLoading && (
				<p className="text-center mt-8 text-gray-500">
					Loading more blogs...
				</p>
			)}
		</div>
	);
};

export default Page;
