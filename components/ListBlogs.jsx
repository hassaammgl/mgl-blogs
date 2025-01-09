import React from "react";
import ListItem from "./ListItem";

const BlogList = ({ blogs }) => {
	return (
		<div className="min-h-screen py-8 pt-20">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
					Blog List
				</h1>
				<div className="grid gap-6">
					{/* {blogs.map((blog, index) => (
						<ListItem key={index} blog={blog} />
					))} */}
				</div>
			</div>
		</div>
	);
};

export default BlogList;
