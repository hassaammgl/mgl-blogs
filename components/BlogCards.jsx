import React from "react";
import moment from "moment";
import Link from "next/link";

const BlogCards = ({ blog }) => {
	return (
		<div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-200">
			<div className="relative overflow-hidden rounded-t-2xl">
				<img
					src={blog.image}
					alt={blog.title}
					className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-200"
				/>
				{blog.publishedAt &&
					moment().diff(moment(blog.publishedAt), "days") <= 7 && (
						<div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
							New
						</div>
					)}
			</div>
			<div className="p-6">
				<span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
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
						src={blog.author.imageUrl}
						alt={`${blog.author.firstName} Avatar`}
						className="w-8 h-8 rounded-full"
					/>
					<div className="ml-3">
						<p className="text-sm font-semibold text-gray-900 dark:text-white">
							{blog.author.firstname + " " + blog.author.lastname}
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							{moment(blog.publishedAt).fromNow()}
						</p>
					</div>
				</div>
				{/* Display view count */}
				<p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
					{blog.viewCount} {blog.viewCount === 1 ? "view" : "views"}
				</p>
				<Link href={`/blog/${blog._id}`}>
					<button className="w-full px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold hover:opacity-90 transform hover:-translate-y-1 transition-all duration-200 mt-4">
						Read More
					</button>
				</Link>
			</div>
		</div>
	);
};

export default BlogCards;
