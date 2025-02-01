"use client";
import React, { Suspense, useState } from "react";
import moment from "moment";
import { likeBlog } from "@/actions/blog.action";
import { useUser } from "@clerk/nextjs";
import DOMPurify from "dompurify";
import MetaData from "./MetaData";
import { BiLike as Like } from "react-icons/bi";
// import { BiSolidLike } from "react-icons/bi";
import { FaRegStar as Favourite } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye as View } from "react-icons/md";

const Blog = ({ data }) => {
	const { isLoaded, user } = useUser();

	const [likes, setLikes] = useState(data?.likes?.length);
	const [favorites, setFavorites] = useState(data?.favorites?.length);

	if (!isLoaded) return null;
	const handleLike = async () => {
		console.log("Like clicked");
		console.log(user);

		const response = await likeBlog(data._id, user.id);

		console.log(response.like);

		if (response.like) {
			setLikes(likes + 1);
		} else {
			setLikes(likes - 1);
		}
	};

	const handleFavourite = () => {
		console.log("Favourite clicked");
	};

	const removeEscapeCharacters = (text) => {
		return DOMPurify.sanitize(text?.replace(/\\n/g, "\n"));
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			{/* Header Section */}
			<header className="text-center mb-8">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
					{data?.title}
				</h1>
				<MetaData title={data?.title} description={data?.description} />
				<span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
					{`${data?.category}/${data?.subcategory}/${data?.subcategoryoption}`}
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
								{likes}
							</span>
						</button>
						<button
							onClick={handleFavourite}
							className="flex items-center justify-center space-x-2 border border-blue-500 rounded-full px-4 py-1.5 text-sm font-medium text-blue-500 hover:text-white hover:bg-blue-600 transition-colors"
						>
							<Favourite />
							<span className="hidden md:inline-block">
								{favorites}
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
					<span
						dangerouslySetInnerHTML={{
							__html: removeEscapeCharacters(data?.content),
						}}
					/>
				</p>
			</div>
		</Suspense>
	);
};

export default Blog;
