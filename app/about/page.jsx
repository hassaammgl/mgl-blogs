import React from "react";
import Image from "next/image";

export default function About() {
	return (
		<main className="min-h-screen py-12 px-6 md:px-12 lg:px-24 dark:bg-gray-900">
			<div className="max-w-4xl mx-auto mt-12">
				{/* Hero Section */}
				<section className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
						Welcome to Our Blog
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
						Discover insightful articles on technology, design, and
						development
					</p>
				</section>

				{/* Company Description */}
				<section className="mb-16">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h2 className="text-3xl font-semibold mb-4 dark:text-white">
								Our Blog Journey
							</h2>
							<p className="text-gray-600 dark:text-gray-300">
								Started in 2023, we've been sharing knowledge
								and experiences in the tech world. Our blog
								covers everything from coding tutorials to
								industry insights, helping developers and tech
								enthusiasts stay updated with the latest trends.
							</p>
						</div>
						<div className="relative h-[300px]">
							<Image
								src="/blog-image.jpg"
								alt="Blog Team"
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
					</div>
				</section>

				{/* Blog Categories */}
				<section className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Tech Tutorials",
							description:
								"Step-by-step guides on programming languages and frameworks",
							icon: "💻",
						},
						{
							title: "Industry News",
							description:
								"Latest updates and trends in the technology sector",
							icon: "📰",
						},
						{
							title: "Developer Tips",
							description:
								"Best practices and productivity hacks for developers",
							icon: "💡",
						},
					].map((item, index) => (
						<div
							key={index}
							className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105"
						>
							<div className="text-3xl mb-3">{item.icon}</div>
							<h3 className="text-xl font-semibold mb-3 dark:text-white">
								{item.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								{item.description}
							</p>
						</div>
					))}
				</section>
			</div>
		</main>
	);
}
