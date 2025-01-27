"use client";
import React, { useState, useEffect, use } from "react";
import { useUser } from "@clerk/clerk-react";
import { postComment, getComments } from "@/actions/blog.action";
import moment from "moment";

const Comments = ({ comments, blogId }) => {
	const { isLoaded, user } = useUser();

	const [comment, setComment] = useState("");
	const [allComment, setAllComment] = useState(comments || []);
	const [loading, setLoading] = useState(false);

	const handleComment = async (e) => {
		setLoading(true);
		e.preventDefault();
		console.log("Commented");
		const data = {
			_id: blogId,
			comment,
			user_id: user.id,
		};

		console.log(data);

		const res = await postComment(data);
		console.log(res.comment);
		if (res.comment) {
			setAllComment([...allComment, res.comment]);
			setComment("");
			setLoading(false);
		}
		setLoading(false);
	};
	if (!isLoaded) return null;

	return (
		<div className="mt-16 max-w-4xl mx-auto">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				Comments
			</h2>

			<form className="mb-12">
				<div className="flex items-start space-x-4">
					<div className="flex-1">
						<textarea
							className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
							rows="2"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							name="comment"
							placeholder="Add a comment..."
						/>
						<button
							onClick={handleComment}
							className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							{loading ? "Loading..." : "Comment"}
						</button>
					</div>
				</div>
			</form>

			<div className="space-y-6">
				{allComment.length === 0 ? (
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
						No comments yet
					</h1>
				) : (
					allComment.map((comment) => (
						<div key={comment._id} className="flex space-x-4">
							<img
								src={comment.userImg}
								alt="Commenter"
								className="w-10 h-10 rounded-full"
							/>
							<div>
								<div className="flex items-center space-x-2">
									<h4 className="font-semibold text-gray-900 dark:text-white">
										{comment.userName}
									</h4>
									<span className="text-sm text-gray-500">
										{moment(comment.createdAt).fromNow()}
									</span>
								</div>
								<p className="text-gray-700 dark:text-gray-300 mt-1">
									{comment.comment}
								</p>
								<div className="flex items-center space-x-4 mt-2">
									<button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
										Like
									</button>
									<button className="text-gray-500 hover:text-blue-600">
										Reply
									</button>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Comments;
