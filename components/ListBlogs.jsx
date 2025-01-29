import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const BlogList = ({ blogs }) => {
	return (
		<div className="min-h-screen py-8 pt-20 overflow-x-scroll w-full">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
					Blog List
				</h1>
				<div className=" w-full">
					{!blogs || blogs.length === 0 ? (
						<h1 className="text-3xl md:text-4xl font-extrabold text-gray-600 dark:text-gray-300 text-center w-full">
							No blogs found yet
						</h1>
					) : (
						blogs.map((blog) => (
							<GradientCard key={blog._id} blog={blog} />
						))
					)}
				</div>
			</div>
		</div>
	);
};

const GradientCard = ({ blog }) => {
	console.log(blog);

	function getReadTime(blogContent) {
		const wordsPerMinute = 200; // Average reading speed
		const wordCount = blogContent
			.split(/\s+/)
			.filter((word) => word).length; // Count words
		const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute); // Calculate read time
		return `${readTimeMinutes} min read`; // Format result
	}

	return (
		<div className="group bg-white dark:bg-gray-800 rounded-xl my-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-200 flex flex-row h-52 w-full ">
			{/* image section */}
			<div className="relative overflow-hidden rounded-l-xl flex justify-center items-center">
				<Image
					src={blog.image}
					width={300}
					height={300}
					alt={blog.title}
					className="object-fill transform group-hover:scale-110 transition-transform duration-200"
				/>
				{blog.createdAt &&
					moment().diff(moment(blog.createdAt), "days") <= 7 && (
						<div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
							New
						</div>
					)}
			</div>
			{/* data section */}
			<div className="flex flex-col justify-between p-4">
				<div>
					<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
						{blog.title}
					</h3>
					<p className="text-gray-600 dark:text-gray-400">
						{blog.description.length > 100
							? `${blog.description.substring(0, 100)}...`
							: blog.description}
					</p>
				</div>

				<div className="flex justify-between items-center mt-4">
					<div className="flex items-center">
						<div className="flex items-center mr-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-600 dark:text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p className="text-gray-600 dark:text-gray-400">
								{getReadTime(blog.content)}
							</p>
						</div>
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-600 dark:text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
							<p className="text-gray-600 dark:text-gray-400">
								{moment(blog.createdAt).format("MMM Do YYYY")}
							</p>
						</div>
					</div>
					<div className="flex items-center">
						<p className="text-gray-600 dark:text-gray-400">
							{blog.category}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogList;
