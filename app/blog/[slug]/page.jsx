import fs, { readFileSync, readdirSync } from "fs";
import * as matter from "gray-matter";

const blogObj = {
	_id: crypto.randomUUID(),
	image: "https://picsum.photos/602/400",
	category: "Development",
	title: "Getting Started with React",
	description: `Learn the fundamentals of React and start building modern web applications. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit, deserunt iusto? Nihil explicabo velit dolorem nisi ex
        doloribus placeat quo, quam quibusdam velit at totam optio,
        pariatur labore itaque molestias!`,
	author: {
		name: "John Doe",
		avatar: "https://picsum.photos/34/34",
		date: "1 week ago",
	},
	stats: {
		views: 1234,
		likes: 56,
		favorites: 23,
	},
};

const dirContent = fs.readdirSync("content", "utf-8");

console.log(dirContent);

const blogs = dirContent.map((file) => {
	const content = readFileSync(`content/${file}`, "utf-8");
	return content;
});
console.log(blogs);

export default function page({ params }) {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4 py-12">
				<article className="max-w-5xl mx-auto mt-12">
					{/* Header Section */}
					<header className="text-center mb-8">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
							{blogObj.title}
						</h1>
						<span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
							{blogObj.category}
						</span>
						<div className="flex items-center justify-between space-x-4">
							<div className="flex items-center space-x-4">
								<img
									src={blogObj.author.avatar}
									alt={blogObj.author.name}
									className="w-14 h-14 rounded-full border-2 border-blue-500"
								/>
								<div className="text-left">
									<p className="text-lg font-semibold text-gray-900 dark:text-white">
										{blogObj.author.name}
									</p>
									<p className="text-gray-600 dark:text-gray-400">
										{blogObj.author.date}
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<button className="flex items-center justify-center space-x-2 border border-blue-500 rounded-full px-4 py-1.5 text-sm font-medium text-blue-500 hover:text-white hover:bg-blue-600 transition-colors">
									<svg
										className="w-5 h-5 text-yellow-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<span className="hidden md:inline-block">
										{blogObj.stats.favorites}
									</span>
								</button>
							</div>
						</div>

						{/* Stats Section */}
						<div className="flex items-center justify-center space-x-8 mt-6">
							<div className="flex items-center space-x-2">
								<svg
									className="w-5 h-5 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
								<span className="text-gray-600">
									{blogObj.stats.views} views
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<svg
									className="w-5 h-5 text-red-500"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
								</svg>
								<span className="text-gray-600">
									{blogObj.stats.likes} likes
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<svg
									className="w-5 h-5 text-yellow-500"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<span className="text-gray-600" aff="favorites">
									{blogObj.stats.favorites} favorites
								</span>
							</div>
						</div>
					</header>

					{/* Featured Image */}
					<div className="rounded-xl overflow-hidden shadow-2xl mb-12">
						<img
							src={blogObj.image}
							alt={blogObj.title}
							className="w-full h-[500px] md:h-[600px] object-cover"
						/>
					</div>

					{/* Content */}
					<div className="prose prose-lg md:prose-xl dark:prose-invert mx-auto">
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							{blogObj.description}
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
									<button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
													d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
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
}
