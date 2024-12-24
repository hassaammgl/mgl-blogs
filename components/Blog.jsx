"use client";
import Favourite from "@/components/svgs/Favourite";
import Like from "@/components/svgs/Like";
import View from "@/components/svgs/View";
import React from "react";
import { formatDate } from "@/lib/utils";
import moment from "moment";

const Blog = ({ data }) => {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4 py-12">
				<article className="max-w-5xl mx-auto mt-12">
					{/* Header Section */}
					<header className="text-center mb-8">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
							{data?.title}
						</h1>
						<span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
							{data.category}
						</span>
						<div className="flex items-center justify-between space-x-4">
							<div className="flex items-center space-x-4">
								<img
									src={"https://picsum.photos/34/34"}
									alt={"data.author.name"}
									className="w-14 h-14 rounded-full border-2 border-blue-500"
								/>
								<div className="text-left">
									<p className="text-lg font-semibold text-gray-900 dark:text-white">
										{"data.author.name"}
									</p>
									<p className="text-gray-600 dark:text-gray-400">
										{moment(data.publishedAt).fromNow()}
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<button className="flex items-center justify-center space-x-2 border rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-red-500 border-red-500 text-white">
									<Like />
									<span className="hidden md:inline-block">
										{data.likes.length} Likes
									</span>
								</button>
								<button className="flex items-center justify-center space-x-2 border border-blue-500 rounded-full px-4 py-1.5 text-sm font-medium text-blue-500 hover:text-white hover:bg-blue-600 transition-colors">
									<Favourite />
									<span className="hidden md:inline-block">
										{data.favorites.length} Favorites
									</span>
								</button>
							</div>
						</div>

						{/* Stats Section */}
						<div className="flex items-center justify-center space-x-8 mt-6">
							<div className="flex items-center space-x-2">
								<View />
								<span className="text-gray-600">
									{data.viewCount} views
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<Like />
								<span className="text-gray-600">
									{data.likes.length} Likes
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<Favourite />
								<span className="text-gray-600">
									{data.favorites.length} Favorites
								</span>
							</div>
						</div>
					</header>

					{/* Featured Image */}
					<div className="rounded-xl overflow-hidden shadow-2xl mb-12">
						<img
							src={data.image}
							alt={data.title}
							className="w-full h-[500px] md:h-[600px] object-cover"
						/>
					</div>

					{/* Content */}
					<div className="prose prose-lg md:prose-xl dark:prose-invert mx-auto">
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							{data.content}
						</p>
					</div>

					{/* Comments Section */}
					<div className="mt-16 max-w-4xl mx-auto">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
							Comments
						</h2>

						{/* Comment Form */}
						<form className="mb-12">
							<div className="flex items-start space-x-4">
								<img
									src="/default-avatar.png"
									alt="User"
									className="w-10 h-10 rounded-full"
								/>
								<div className="flex-1">
									<textarea
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
										rows="3"
										placeholder="Add a comment..."
									/>
									<button
										type="submit"
										className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
									>
										Comment
									</button>
								</div>
							</div>
						</form>

						{/* Comments List */}
						<div className="space-y-6">
							{/* Single Comment */}
							<div className="flex space-x-4">
								<img
									src="/user1-avatar.png"
									alt="Commenter"
									className="w-10 h-10 rounded-full"
								/>
								<div>
									<div className="flex items-center space-x-2">
										<h4 className="font-semibold text-gray-900 dark:text-white">
											John Doe
										</h4>
										<span className="text-sm text-gray-500">
											2 hours ago
										</span>
									</div>
									<p className="text-gray-700 dark:text-gray-300 mt-1">
										Great article! Thanks for sharing these
										insights.
									</p>
									<div className="flex items-center space-x-4 mt-2">
										<button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
											<svg
												className="w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
												/>
											</svg>
											<span>Like</span>
										</button>
										<button className="text-gray-500 hover:text-blue-600">
											Reply
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Blog;
