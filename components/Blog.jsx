"use client";
import Favourite from "@/components/svgs/Favourite";
import Like from "@/components/svgs/Like";
import View from "@/components/svgs/View";
import React, { Suspense } from "react";
import moment from "moment";
import { likeBlog } from "@/actions/blog.action";
import { useUser } from "@clerk/nextjs";

const Blog = ({ data }) => {
	const { isLoaded, user } = useUser();

	if (!isLoaded) return null;
	const handleLike = async () => {
		console.log("Like clicked");
		console.log(user);

		const response = await likeBlog(data._id, user.id);

		console.log(response);
	};

	const handleFavourite = () => {
		console.log("Favourite clicked");
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			{/* Header Section */}
			<header className="text-center mb-8">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
					{data?.title}
				</h1>
				<span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
					{data?.category}
				</span>
				<div className="flex items-center justify-between space-x-4">
					<div className="flex items-center space-x-4">
						<img
							src={data?.author?.imageUrl}
							alt={`${data?.author?.firstName} Avatar`}
							className="w-14 h-14 rounded-full border-2 border-blue-500"
						/>
						<div className="text-left">
							<p className="text-lg font-semibold text-gray-900 dark:text-white">
								{data?.author?.firstname +
									" " +
									data?.author?.lastname}
							</p>
							<p className="text-gray-600 dark:text-gray-400">
								{moment(data?.createdAt).fromNow()}
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-4">
						<button
							onClick={handleLike}
							className="flex items-center justify-center space-x-2 border border-red-500 rounded-full px-4 py-1.5 text-sm font-medium text-red-500 hover:text-white hover:bg-red-600 transition-colors"
						>
							<Like />
							<span className="hidden md:inline-block">
								{data?.likes?.length}
							</span>
						</button>
						<button
							onClick={handleFavourite}
							className="flex items-center justify-center space-x-2 border border-blue-500 rounded-full px-4 py-1.5 text-sm font-medium text-blue-500 hover:text-white hover:bg-blue-600 transition-colors"
						>
							<Favourite />
							<span className="hidden md:inline-block">
								{data?.favorites?.length}
							</span>
						</button>
					</div>
				</div>

				{/* Stats Section */}
				<div className="flex items-center justify-center space-x-8 mt-6">
					<div className="flex items-center space-x-2">
						<View />
						<span className="text-gray-600">
							{data?.viewCount} views
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<Like />
						<span className="text-gray-600">
							{data?.likes?.length} Likes
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<Favourite />
						<span className="text-gray-600">
							{data?.favorites?.length} Favorites
						</span>
					</div>
				</div>
			</header>

			{/* Featured Image */}
			<div className="rounded-xl overflow-hidden shadow-2xl mb-12">
				<img
					src={data?.image}
					alt={data?.title}
					className="w-full h-[500px] md:h-[600px] object-cover"
				/>
			</div>

			{/* Content */}
			<div className="prose prose-lg md:prose-xl dark:prose-invert mx-auto">
				<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
					{data?.content}
				</p>
			</div>
		</Suspense>
	);
};

export default Blog;
