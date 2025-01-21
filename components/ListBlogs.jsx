import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const BlogList = ({ blogs }) => {
	return (
		<div className="min-h-screen py-8 pt-20">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
					Blog List
				</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mx-auto">
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
	function getReadTime(blogContent) {
		const wordsPerMinute = 200; // Average reading speed
		const wordCount = blogContent
			.split(/\s+/)
			.filter((word) => word).length; // Count words
		const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute); // Calculate read time
		return `${readTimeMinutes} min read`; // Format result
	}

	return (
		<BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
			<Image
				src={`/jordans.webp`}
				alt="jordans"
				height="400"
				width="400"
				className="object-contain"
			/>
			<p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
				Air Jordan 4 Retro Reimagined
			</p>

			<p className="text-sm text-neutral-600 dark:text-neutral-400">
				The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
				February 17, 2024. Your best opportunity to get these right now
				is by entering raffles and waiting for the official releases.
			</p>
			<button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
				<span>Buy now </span>
				<span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
					$100
				</span>
			</button>
		</BackgroundGradient>
	);
};

export default BlogList;
