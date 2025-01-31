"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { categoryBlog } from "@/constants";
import { useRouter } from "next/navigation";

const UpdateBlog = ({ blog }) => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		image: null,
		imageBase64: blog.image,
		category: blog.category,
		title: blog.title,
		description: blog.description,
		content: blog.content,
		status: blog.status,
		tags: blog.tags,
		isPublished: blog.isPublished,
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
			fileReader.onload = () => resolve(fileReader.result);
			fileReader.onerror = (error) => reject(error);
		});
	};

	const handleChange = async (e) => {
		const { name, value, files } = e.target;
		if (name === "image") {
			const file = files[0];
			if (file) {
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
			}
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/blogs/update-blog", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					_id: blog._id,
					...formData,
					image: formData.imageBase64,
					publishedAt: formData.isPublished
						? new Date().toISOString()
						: null,
				}),
			});

			if (!response.ok) throw new Error("Failed to update blog post");

			const data = await response.json();
			console.log("Blog post updated:", data);
			router.push(`/blog/${data._id}`);
		} catch (error) {
			console.error("Error updating blog post:", error);
		}
	};

	return (
		<div className="container mx-auto mt-20 p-6 max-w-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg overflow-auto">
			<h2 className="text-center text-2xl font-semibold text-green-600 dark:text-green-400 mb-6">
				Update Blog Post
			</h2>

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Image Upload */}
				<div>
					<label className="block text-sm font-medium mb-1">
						Update Image
					</label>
					<Input
						type="file"
						name="image"
						accept="image/*"
						onChange={handleChange}
					/>
					{formData.imageBase64 && (
						<img
							src={formData.imageBase64}
							alt="Preview"
							className="mt-3 h-40 w-full object-cover rounded-md"
						/>
					)}
				</div>

				{/* Title */}
				<div>
					<label className="block text-sm font-medium mb-1">
						Title
					</label>
					<Input
						name="title"
						value={formData.title}
						onChange={handleChange}
						placeholder="Blog Title"
						className="bg-gray-100 dark:bg-gray-800"
					/>
				</div>

				{/* Description */}
				<div>
					<label className="block text-sm font-medium mb-1">
						Description
					</label>
					<Textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						placeholder="Short description..."
						className="bg-gray-100 dark:bg-gray-800"
					/>
				</div>

				{/* Content */}
				<div>
					<label className="block text-sm font-medium mb-1">
						Content
					</label>
					<Textarea
						name="content"
						value={formData.content}
						onChange={handleChange}
						placeholder="Write your blog content..."
						className="min-h-[150px] bg-gray-100 dark:bg-gray-800"
					/>
				</div>

				{/* Submit Button */}
				<Button
					type="submit"
					className="w-full bg-green-500 dark:bg-green-600 text-white"
				>
					Update Blog Post
				</Button>
			</form>
		</div>
	);
};

export default UpdateBlog;
