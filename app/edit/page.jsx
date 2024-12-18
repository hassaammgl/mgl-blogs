"use client";
import React, { useRef, useState, Suspense } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/shared/Editor"), {
	ssr: false,
});

const formSchema = z.object({
	image: z.any().optional(),
	category: z
		.string()
		.min(2, { message: "Category must be at least 2 characters." }),
	title: z
		.string()
		.min(5, { message: "Title must be at least 5 characters." }),
	description: z
		.string()
		.min(10, { message: "Description must be at least 10 characters." }),
	content: z
		.string()
		.min(10, { message: "Content must be at least 10 characters." }),
});

export default function BlogForm() {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			image: null,
			category: "",
			title: "",
			description: "",
			content: "",
		},
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{/* Image Upload */}
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									onChange={(e) =>
										field.onChange(e.target.files?.[0])
									}
								/>
							</FormControl>
							<FormDescription>
								Upload a featured image for the blog post.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Category */}
				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Category</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. Development"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Title */}
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. Getting Started with React"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Description */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Enter the blog description here..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Content */}
				<Suspense fallback={<div>Loading...</div>}>
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Content</FormLabel>
								<FormControl>
									<Editor {...field} />
								</FormControl>
								<FormDescription>
									Write the main content of your blog post
									here.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</Suspense>

				{/* Submit Button */}
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
