"use client";

import React, { useState } from "react";

const page = () => {
	const blogs = [
		{
			id: crypto.randomUUID(),
			image: "https://picsum.photos/601/400",
			category: "Design",
			title: "Modern UI Design Principles",
			description:
				"Explore the essential principles of modern UI design and how to implement them effectively.",
			author: {
				name: "Jane Smith",
				avatar: "https://picsum.photos/33/33",
				date: "5 days ago",
			},
		},
		{
			id: crypto.randomUUID(),
			image: "https://picsum.photos/602/400",
			category: "Development",
			title: "Getting Started with React",
			description:
				"Learn the fundamentals of React and start building modern web applications.",
			author: {
				name: "John Doe",
				avatar: "https://picsum.photos/34/34",
				date: "1 week ago",
			},
		},
	];

	const categories = ["All", "Design", "Development"];
	const [selectedCategory, setSelectedCategory] = useState("All");

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
			<div className="flex gap-4 overflow-x-auto pb-4 mb-8">
				{categories.map((category) => (
					<button
						key={category}
						className={`px-6 py-2 rounded-full whitespace-nowrap ${
							selectedCategory === category
								? "bg-purple-600 text-white"
								: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
						}`}
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
										{blog.author.date}
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
