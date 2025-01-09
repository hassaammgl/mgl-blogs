"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { categoryBlog } from "@/constants";
import { useRouter } from "next/navigation";

export default function BlogForm() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		image: null,
		imageBase64: "",
		category: "",
		title: "",
		description: "",
		content: "",
		status: "draft",
		tags: [],
		isPublished: false,
	});

	const [tagInput, setTagInput] = useState("");

	const handleAddTag = (e) => {
		e.preventDefault();
		if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
			setFormData({
				...formData,
				tags: [...formData.tags, tagInput.trim()],
			});
			setTagInput("");
		}
	};

	const handleRemoveTag = (tagToRemove) => {
		setFormData({
			...formData,
			tags: formData.tags.filter((tag) => tag !== tagToRemove),
		});
	};

	const convertToBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleChange = async (e) => {
		const { name, value, files } = e.target;
		if (name === "image") {
			const file = files[0];
			try {
				const base64 = await convertToBase64(file);
				setFormData({
					...formData,
					image: file,
					imageBase64: base64,
				});
			} catch (error) {
				console.error("Error converting image to base64:", error);
			}
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/new-blog", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title: formData.title,
					description: formData.description,
					content: formData.content,
					category: formData.category,
					image: formData.imageBase64,
					status: formData.status,
					tags: formData.tags,
					isPublished: formData.isPublished,
					publishedAt: formData.isPublished
						? new Date().toISOString()
						: null,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to create blog post");
			}

			const data = await response.json();
			router.push(`/blog/${data._id}`);

			setFormData({
				image: null,
				imageBase64: "",
				category: "",
				title: "",
				description: "",
				content: "",
				status: "draft",
				tags: [],
				isPublished: false,
			});
			setTagInput("");
		} catch (error) {
			console.error("Error creating blog post:", error);
		}
	};

	return (
		<div className="container mt-20 mx-auto w-2/4 py-8 px-4 overflow-auto overscroll-hidden scrollbar-hide">
			<form onSubmit={handleSubmit} className="space-y-8">
				<div>
					<h2 className="text-green-500 text-2xl font-semibold mb-4 text-center">
						Add Blog Post
					</h2>

					<label className="block text-sm font-medium mb-2">
						Featured Image
					</label>
					<Input
						type="file"
						name="image"
						accept="image/*"
						onChange={handleChange}
						className="w-full"
					/>
					<p className="text-sm text-gray-500 mt-1">
						Upload a featured image for the blog post.
					</p>
					{formData.imageBase64 && (
						<img
							src={formData.imageBase64}
							alt="Preview"
							className="mt-2 max-h-40 object-contain rounded-md"
						/>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Category
					</label>

					<select
						name="category"
						value={formData.category}
						onChange={handleChange}
						className="w-full rounded-md border border-gray-300 p-2"
					>
						{categoryBlog.map((category, i) => (
							<option value={category} key={i}>
								{category}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Title
					</label>
					<Input
						name="title"
						placeholder="e.g. Getting Started with React"
						value={formData.title}
						onChange={handleChange}
						className="w-full"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Description
					</label>
					<Textarea
						name="description"
						placeholder="Enter the blog description here..."
						value={formData.description}
						onChange={handleChange}
						className="w-full min-h-[100px]"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Content
					</label>
					<Textarea
						name="content"
						placeholder="Write your blog content here..."
						value={formData.content}
						onChange={handleChange}
						className="w-full min-h-[200px]"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-2">
						Add Tags
					</label>
					<Input
						type="text"
						value={tagInput}
						onChange={(e) => setTagInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								handleAddTag(e);
							}
						}}
						placeholder="Enter a tag"
						className="flex-1"
					/>
				</div>
				{formData.tags.length > 0 && (
					<div className="flex flex-wrap gap-2 mt-2">
						{formData.tags.map((tag, index) => (
							<span
								key={index}
								className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
							>
								{tag}
								<button
									type="button"
									onClick={() => handleRemoveTag(tag)}
									className="ml-2 text-blue-600 hover:text-blue-800"
								>
									×
								</button>
							</span>
						))}
					</div>
				)}
				<div>
					<label className="block text-sm font-medium mb-2">
						Status
					</label>
					<select
						name="status"
						value={formData.status}
						onChange={handleChange}
						className="w-full rounded-md border border-gray-300 p-2"
					>
						<option value="draft">Draft</option>
						<option value="published">Published</option>
					</select>
				</div>

				<div className="flex items-center space-x-2">
					<input
						type="checkbox"
						name="isPublished"
						checked={formData.isPublished}
						onChange={(e) =>
							setFormData({
								...formData,
								isPublished: e.target.checked,
							})
						}
						className="rounded"
					/>
					<label className="text-sm font-medium">
						Publish immediately
					</label>
				</div>

				<Button type="submit" className="w-full">
					Create Blog Post
				</Button>
			</form>
		</div>
	);
}
