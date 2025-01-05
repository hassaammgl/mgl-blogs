"use client";
import React, { useState, useEffect } from "react";
import { getAllBlogs } from "@/actions/blog.action";
import BlogCards from "@/components/BlogCards";
import Pagination from "@/components/shared/Pagination";

const limit = 6;

const Page = () => {
	const [blogs, setBlogs] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [currentPage, setCurrentPage] = useState(1);

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

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className="container mx-auto mt-12 p-8">
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
				Our Latest Blogs
			</h1>
			{/* category section like yt */}
			<div className="flex  mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
				<ul className="flex  space-x-4  whitespace-nowrap">
					{filteredCategory.map((category) => (
						<li key={category} className="flex items-center ">
							<button
								className={`px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none ${
									selectedCategory === category
										? "bg-blue-500 text-white"
										: "bg-gray-200 text-gray-600 hover:bg-gray-300"
								}`}
								onClick={() => setSelectedCategory(category)}
							>
								{category}
							</button>
						</li>
					))}
				</ul>
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
			<Pagination
				totalItems={total}
				itemsPerPage={limit}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default Page;
