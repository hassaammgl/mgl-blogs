import React from "react";

// app/about/page.jsx
import Image from "next/image";

export default function About() {
	return (
		<main className="min-h-screen py-12 px-6 md:px-12 lg:px-24">
			<div className="max-w-4xl mx-auto">
				{/* Hero Section */}
				<section className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						About Us
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						We're passionate about creating amazing experiences
					</p>
				</section>

				{/* Company Description */}
				<section className="mb-16">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h2 className="text-3xl font-semibold mb-4">
								Our Story
							</h2>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div className="relative h-[300px]"></div>
					</div>
				</section>

				{/* Values or Features */}
				<section className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Our Mission",
							description:
								"To deliver exceptional value through innovation",
						},
						{
							title: "Our Vision",
							description:
								"Building a better future through technology",
						},
						{
							title: "Our Values",
							description: "Integrity, Excellence, Innovation",
						},
					].map((item, index) => (
						<div
							key={index}
							className="p-6 bg-white rounded-lg shadow-md"
						>
							<h3 className="text-xl font-semibold mb-3">
								{item.title}
							</h3>
							<p className="text-gray-600">{item.description}</p>
						</div>
					))}
				</section>
			</div>
		</main>
	);
}
