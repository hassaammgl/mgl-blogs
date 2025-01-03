"use client";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import { postComment } from "@/actions/blog.action";

const Comments = ({ blogId }) => {
	const { isLoaded, user } = useUser();

	const [comment, setComment] = React.useState("");

	const handleComment = async (e) => {
		e.preventDefault();
		console.log("Commented");
		const data = {
			_id: blogId,
			comment,
		};

		console.log(data);

		const res = await postComment(data);
		console.log(res);
	};
	if (!isLoaded) return null;

	return (
		<div className="mt-16 max-w-4xl mx-auto">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				Comments
			</h2>

			<form className="mb-12">
				<div className="flex items-start space-x-4">
					<Image
						src={user?.profileImageUrl}
						alt={user?.fullName}
						width={40}
						height={40}
						className="w-10 h-10 rounded-full"
					/>
					<div className="flex-1">
						<textarea
							className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
							rows="3"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							name="comment"
							placeholder="Add a comment..."
						/>
						<button
							onClick={handleComment}
							className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							Comment
						</button>
					</div>
				</div>
			</form>

			<div className="space-y-6">
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
							Great article! Thanks for sharing these insights.
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
	);
};

export default Comments;
