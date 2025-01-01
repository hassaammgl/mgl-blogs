"use client";
import React, { useState, useEffect, Suspense } from "react";
import { fetchAllBlogs } from "@/actions/blog.action";
import moment from "moment";
import Link from "next/link";
import Pagination from "react-paginating";
import BlogCards from "@/components/BlogCards";

const limit = 6;
const pageCount = 3;

const Page = () => {
	const [blogs, setBlogs] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const data = await fetchAllBlogs(1500);
				setBlogs(data.blogs);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			}
		};

		fetchBlogs();
	}, []);

	const filteredBlogs =
		selectedCategory === "All"
			? blogs
			: blogs.filter((blog) => blog.category === selectedCategory);

	const filteredCategory = [
		"All",
		...new Set(blogs.map((blog) => blog.category)),
	];

	const total = filteredBlogs.length;
	const startIndex = (currentPage - 1) * limit;
	const currentBlogs = filteredBlogs.slice(startIndex, startIndex + limit);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className="container mx-auto mt-12 p-8">
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
				Our Latest Blogs
			</h1>

			<div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
				{filteredCategory.map((category, i) => (
					<button
						key={i}
						className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
							selectedCategory === category
								? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/30"
								: "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
						}`}
						onClick={() => {
							setSelectedCategory(category);
							setCurrentPage(1);
						}}
					>
						{category}
					</button>
				))}
			</div>
			<Suspense fallback={<h1>Loading...</h1>}>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{currentBlogs.map((blog) => (
						<BlogCards key={blog._id} blog={blog} />
					))}
				</div>

				<Pagination
					total={total}
					limit={limit}
					pageCount={pageCount}
					currentPage={currentPage}
				>
					{({
						pages,
						hasPreviousPage,
						hasNextPage,
						previousPage,
						nextPage,
						getPageItemProps,
					}) => (
						<div className="flex justify-center items-center gap-2 mt-8">
							{hasPreviousPage && (
								<button
									className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
									{...getPageItemProps({
										pageValue: previousPage,
										onPageChange: handlePageChange,
									})}
								>
									&lt;
								</button>
							)}

							{pages.map((page) => (
								<button
									key={page}
									className={`px-4 py-2 rounded ${
										currentPage === page
											? "bg-blue-500 text-white"
											: "bg-gray-200 dark:bg-gray-700"
									}`}
									{...getPageItemProps({
										pageValue: page,
										onPageChange: handlePageChange,
									})}
								>
									{page}
								</button>
							))}

							{hasNextPage && (
								<button
									className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
									{...getPageItemProps({
										pageValue: nextPage,
										onPageChange: handlePageChange,
									})}
								>
									&gt;
								</button>
							)}
						</div>
					)}
				</Pagination>
			</Suspense>
		</div>
	);
};

export default Page;
