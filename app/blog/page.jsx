"use client";
import React, { useState, useEffect } from "react";
import { getAllBlogs } from "@/actions/blog.action";
import BlogCards from "@/components/BlogCards";

const limit = 6;

const Page = () => {
	const [blogs, setBlogs] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await getAllBlogs();
				console.log("response:", response.blogs);

				setBlogs(response.blogs || []);
			} catch (error) {
				console.error("Failed to fetch blogs:", error);
			}
		};

		fetchBlogs();
	}, []);
	console.log(blogs);
	const filteredBlogs =
		selectedCategory === "All"
			? blogs
			: blogs.filter((blog) => blog.category === selectedCategory);

	const filteredCategory = [
		"All",
		...new Set(blogs?.map((blog) => blog.category)),
	];

	const total = filteredBlogs.length;

	console.log(total);

	return (
		<div className="container mx-auto mt-12 p-8">
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
				Our Latest Blogs
			</h1>
			<div className="flex justify-center mb-8">
				{filteredCategory.map((category) => (
					<button
						key={category}
						className={`mr-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:opacity-90 transform hover:-translate-y-1 transition-all duration-200 mt-4 ${
							selectedCategory === category
								? "bg-blue-600 text-white"
								: "bg-gray-200 text-gray-600"
						}`}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</button>
				))}
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mx-auto">
				{!blogs || blogs.length === 0 ? (
					<h1 className="text-3xl md:text-4xl font-extrabold text-gray-600 dark:text-gray-300 text-center w-full">
						No blogs found yet
					</h1>
				) : (
					filteredBlogs.map((blog) => (
						<BlogCards key={blog._id} blog={blog} />
					))
				)}
			</div>
		</div>
	);
};

export default Page;
