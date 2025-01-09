import React from "react";

const ListItem = ({ blog }) => {
	return (
		<div className="bg-slate-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
			<h2 className="text-xl font-semibold text-gray-700 mb-2">
				{/* {blog.title}  */}
			</h2>
			{/* <p className="text-gray-600 text-sm mb-4">{blog.author}</p>
			<p className="text-gray-600">{blog.excerpt}</p> */}
			<a
				href={blog?.url}
				className="text-blue-500 hover:underline mt-4 inline-block"
			>
				Read More →
			</a>
		</div>
	);
};

export default ListItem;
