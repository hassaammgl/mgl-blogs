import moment from "moment";
import Link from "next/link";
import { deleteBlog } from "@/actions/blog.action";

const BlogCards = ({ blog }) => {
	function getReadTime(blogContent) {
		const wordsPerMinute = 200;
		const wordCount = blogContent
			.split(/\s+/)
			.filter((word) => word).length;
		return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
	}

	return (
		<div className="group bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 overflow-hidden">
			<div className="relative">
				<img
					src={blog.image}
					alt={blog.title}
					className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				{blog.createdAt &&
					moment().diff(moment(blog.createdAt), "days") <= 7 && (
						<div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
							New
						</div>
					)}
			</div>
			<div className="p-6">
				<div className="flex justify-between items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
					<span>{blog.category}</span>
					<span>{getReadTime(blog.content)}</span>
				</div>
				<h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 line-clamp-2">
					{blog.title}
				</h3>
				<p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3">
					{blog.description}
				</p>
				<div className="flex items-center mt-4">
					<img
						src={blog.author.imageUrl}
						alt={blog.author.firstName}
						className="w-10 h-10 rounded-full border-2 border-blue-500"
					/>
					<div className="ml-3">
						<p className="text-sm font-semibold text-gray-900 dark:text-white">
							{blog.author.firstname} {blog.author.lastname}
						</p>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							{moment(blog.createdAt).fromNow()}
						</p>
					</div>
				</div>
				<p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
					{blog.viewCount} {blog.viewCount === 1 ? "view" : "views"}
				</p>
				<Link href={`/blog/${blog._id}`}>
					<button className="w-full mt-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-md hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300">
						Read More
					</button>
				</Link>
			</div>
		</div>
	);
};

export const UserBlogCards = ({ blog, pageType }) => {
	function getReadTime(blogContent) {
		const wordsPerMinute = 200;
		const wordCount = blogContent
			.split(/\s+/)
			.filter((word) => word).length;
		return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
	}

	const handleDeleteBlog = async () => {
		const response = await deleteBlog(blog._id);
		console.log(response);
	};

	return (
		<div className="group bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 overflow-hidden">
			<div className="relative">
				<img
					src={blog.image}
					alt={blog.title}
					className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				{blog.createdAt &&
					moment().diff(moment(blog.createdAt), "days") <= 7 && (
						<div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
							New
						</div>
					)}

				{}
			</div>
			<div className="p-6">
				<div className="flex justify-between items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
					<span>{blog.category}</span>
					<span>{getReadTime(blog.content)}</span>
				</div>
				<h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 line-clamp-2">
					{blog.title}
				</h3>
				<p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3">
					{blog.description}
				</p>
				<div className="flex items-center mt-4">
					<img
						src={blog.author.imageUrl}
						alt={blog.author.firstName}
						className="w-10 h-10 rounded-full border-2 border-blue-500"
					/>
					<div className="ml-3">
						<p className="text-sm font-semibold text-gray-900 dark:text-white">
							{blog.author.firstname} {blog.author.lastname}
						</p>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							{moment(blog.createdAt).fromNow()}
						</p>
					</div>
				</div>
				<p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
					{blog.viewCount} {blog.viewCount === 1 ? "view" : "views"}
				</p>

				{pageType === "delete-blog" ? (
					<button
						onClick={handleDeleteBlog}
						className="w-full mt-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-md hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300"
					>
						Delete Blog
					</button>
				) : pageType === "update-blog" ? (
					<button
						onClick={() => updateBlog(blog._id)}
						className="w-full mt-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-md hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300"
					>
						Update Blog
					</button>
				) : (
					<Link href={`/blog/${blog._id}`}>
						<button className="w-full mt-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-md hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300">
							Read More ...
						</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default BlogCards;
