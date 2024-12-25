"use client";
import React, { useState, useEffect } from "react";
import { fetchAllBlogs } from "@/lib/actions/blog.action";
import moment from "moment";
import { categoryBlog as categories } from "@/constants";

const page = () => {
	const [blogs, setBlogs] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const data = await fetchAllBlogs(15);
				setBlogs(data.blogs);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			}
		};

		fetchBlogs();
	}, []);

	const filteredBlogs =
		selectedCategory === "All"
			? blogs
			: blogs.filter((blog) => blog.category === selectedCategory);

	return (
		<div className="container mx-auto mt-12 p-8">
			{/* Heading */}
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
				Our Latest Blogs
			</h1>

			{/* Category Slider */}
			<div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
				{categories.map((category, i) => (
					<button
						key={i}
						className={`
        px-6 
        py-3 
        rounded-full 
        whitespace-nowrap
        font-medium
        transition-all
        duration-200
        hover:scale-105
        active:scale-95
        ${
			selectedCategory === category
				? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/30"
				: "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
		}
      `}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</button>
				))}
			</div>

			{/* Blog Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{filteredBlogs.map((blog) => (
					<div
						key={blog.id}
						className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-200"
					>
						<div className="relative overflow-hidden rounded-t-2xl">
							<img
								src={blog.image}
								alt={blog.title}
								className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-200"
							/>
						</div>
						<div className="p-6">
							<span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
								{blog.category}
							</span>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
								{blog.title}
							</h3>
							<p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3">
								{blog.description}
							</p>
							<div className="flex items-center mt-4">
								<img
									src={blog.author.avatar}
									alt={blog.author.name}
									className="w-8 h-8 rounded-full"
								/>
								<div className="ml-3">
									<p className="text-sm font-semibold text-gray-900 dark:text-white">
										{blog.author.name}
									</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										{moment(blog.author.date).fromNow()}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
