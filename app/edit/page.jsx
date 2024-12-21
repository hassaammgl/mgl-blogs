// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// export default function BlogForm() {
// 	const [formData, setFormData] = useState({
// 		image: null,
// 		imageBase64: "",
// 		category: "",
// 		title: "",
// 		description: "",
// 		content: "",
// 	});

// 	const convertToBase64 = (file) => {
// 		return new Promise((resolve, reject) => {
// 			const fileReader = new FileReader();
// 			fileReader.readAsDataURL(file);
// 			fileReader.onload = () => {
// 				resolve(fileReader.result);
// 			};
// 			fileReader.onerror = (error) => {
// 				reject(error);
// 			};
// 		});
// 	};

// 	const handleChange = async (e) => {
// 		const { name, value, files } = e.target;
// 		if (name === "image") {
// 			const file = files[0];
// 			try {
// 				const base64 = await convertToBase64(file);
// 				setFormData({
// 					...formData,
// 					image: file,
// 					imageBase64: base64,
// 				});
// 			} catch (error) {
// 				console.error("Error converting image to base64:", error);
// 			}
// 		} else {
// 			setFormData({ ...formData, [name]: value });
// 		}
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		// Now formData.imageBase64 contains the base64 string of the image
// 		console.log(formData);
// 	};

// 	return (
// 		<div className="container mt-20 mx-auto w-2/4 py-8 px-4">
// 			<form onSubmit={handleSubmit} className="space-y-8">
// 				<div>
// 					<label>Image</label>
// 					<Input
// 						type="file"
// 						name="image"
// 						accept="image/*"
// 						onChange={handleChange}
// 					/>
// 					<p className="text-sm text-gray-500">
// 						Upload a featured image for the blog post.
// 					</p>
// 					{formData.imageBase64 && (
// 						<img
// 							src={formData.imageBase64}
// 							alt="Preview"
// 							className="mt-2 max-h-40 object-contain"
// 						/>
// 					)}
// 				</div>

// 				<div>
// 					<label>Category</label>
// 					<Input
// 						name="category"
// 						placeholder="e.g. Development"
// 						value={formData.category}
// 						onChange={handleChange}
// 					/>
// 				</div>

// 				<div>
// 					<label>Title</label>
// 					<Input
// 						name="title"
// 						placeholder="e.g. Getting Started with React"
// 						value={formData.title}
// 						onChange={handleChange}
// 					/>
// 				</div>

// 				<div>
// 					<label>Description</label>
// 					<Textarea
// 						name="description"
// 						placeholder="Enter the blog description here..."
// 						value={formData.description}
// 						onChange={handleChange}
// 					/>
// 				</div>

// 				<div>
// 					<label>Content</label>
// 					<Textarea
// 						name="content"
// 						placeholder="Write your blog content here..."
// 						value={formData.content}
// 						onChange={handleChange}
// 					/>
// 					<p className="text-sm text-gray-500">
// 						Write the main content of your blog post here.
// 					</p>
// 				</div>

// 				<Button type="submit">Submit</Button>
// 			</form>
// 		</div>
// 	);
// }


"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BlogForm() {
	const [formData, setFormData] = useState({
		image: null,
		imageBase64: "",
		category: "",
		title: "",
		description: "",
		content: "",
		status: "draft",
		isPublished: false,
	});

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
			const response = await fetch("/api/blogs", {
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
			console.log("Blog post created:", data);

			// Reset form
			setFormData({
				image: null,
				imageBase64: "",
				category: "",
				title: "",
				description: "",
				content: "",
				status: "draft",
				isPublished: false,
			});
		} catch (error) {
			console.error("Error creating blog post:", error);
		}
	};

	return (
		<div className="container mt-20 mx-auto w-2/4 py-8 px-4">
			<form onSubmit={handleSubmit} className="space-y-8">
				<div>
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
					<Input
						name="category"
						placeholder="e.g. Development"
						value={formData.category}
						onChange={handleChange}
						className="w-full"
					/>
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
