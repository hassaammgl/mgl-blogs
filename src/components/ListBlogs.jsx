import React from "react";
import { UserBlogCards } from "./BlogCards";

const BlogList = ({ blogs, tab }) => {
	return (
		<div className="min-h-screen py-8 pt-20 overflow-x-scroll w-full">
			<div className="max-w-4xl mx-auto p-6">
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
							<UserBlogCards
								key={blog._id}
								blog={blog}
								pageType={tab}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default BlogList;
