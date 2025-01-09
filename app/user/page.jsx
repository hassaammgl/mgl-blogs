"use client";
import React, { useState, useEffect } from "react";
import { getAllBlogs } from "@/actions/blog.action";
import Charts from "@/components/Charts";
import BlogForm from "@/components/Add_Blog";
import BlogList from "@/components/ListBlogs";

const Dashboard = () => {
	const [blogs, setBlogs] = useState([]);
	const [activeTab, setActiveTab] = useState("dashboard");

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await getAllBlogs();
				console.log("response:", response.blogs);

				setBlogs(response.blogs || []);
			} catch (error) {
				console.error("Failed to fetch blogs:", error);
			}
		};

		fetchBlogs();
	}, []);

	return (
		<div className="flex h-screen overflow-hidden overscroll-none">
			<Sidebar setActiveTab={setActiveTab} />
			{activeTab === "dashboard" && <Charts blogs={blogs} />}
			{activeTab === "blogs" && (
				<BlogList blogs={blogs} tab={activeTab} />
			)}
			{activeTab === "create-blog" && <BlogForm />}
			{activeTab === "update-blog" && (
				<BlogList blogs={blogs} tab={activeTab} />
			)}
			{activeTab === "delete-blog" && (
				<BlogList blogs={blogs} tab={activeTab} />
			)}
		</div>
	);
};

const arrBtns = [
	{
		label: "Dashboard",
		href: "dashboard",
		_id: crypto.randomUUID(),
	},
	{
		label: "Blogs",
		href: "blogs",
		_id: crypto.randomUUID(),
	},
	{
		label: "Create Blog",
		href: "create-blog",
		_id: crypto.randomUUID(),
	},
	{
		label: "Update Blog",
		href: "update-blog",
		_id: crypto.randomUUID(),
	},
	{
		label: "Delete Blog",
		href: "delete-blog",
		_id: crypto.randomUUID(),
	},
];

const Sidebar = ({ setActiveTab }) => {
	return (
		<div className="h-screen w-64 bg-gray-800 text-white flex flex-col pt-16">
			<div className="p-4 text-2xl font-bold border-b border-gray-700">
				Menu
			</div>
			<ul className="flex-1 p-4 space-y-3">
				{arrBtns.map((item) => (
					<li
						key={item._id}
						className="p-2 pl-6 hover:bg-gray-700 hover:font-bold rounded-full cursor-pointer"
					>
						<button onClick={() => setActiveTab(item.href)}>
							{item.label}
						</button>
					</li>
				))}
			</ul>
			<div className="p-4 border-t border-gray-700 text-sm text-gray-400">
				&copy; 2025 Your Company
			</div>
		</div>
	);
};

export default Dashboard;
