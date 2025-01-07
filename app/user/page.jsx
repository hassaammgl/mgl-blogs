"use client";
import React, { useState, useEffect } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { getAllBlogs } from "@/actions/blog.action";

const Dashboard = () => {
	const [blogs, setBlogs] = useState([]);
	const [activeTab, setActiveTab] = useState("Dashboard");

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
			{activeTab === "blogs" && <Charts blogs={blogs} />}
			{activeTab === "create-blog" && <Charts blogs={blogs} />}
			{activeTab === "update-blog" && <Charts blogs={blogs} />}
			{activeTab === "delete-blog" && <Charts blogs={blogs} />}
		</div>
	);
};

const Charts = ({ blogs }) => {
	return (
		<div className="mt-20 w-full overflow-auto">
			<h2 className="text-2xl pl-10 mb-5 font-bold">Dashboard</h2>
			<hr />
			<div className="p-5">
				<h3 className="text-lg font-semibold mb-4">Blog Views</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={blogs}>
						<XAxis dataKey="slug" />
						<YAxis />
						<Tooltip dataKey="slug" />
						<Legend />
						<Bar dataKey="viewCount" fill="#8d8" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="p-5">
				<h3 className="text-lg font-semibold mb-4">Blog Likes</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={blogs}>
						<XAxis dataKey="slug" />
						<YAxis />
						<Tooltip dataKey="slug" />
						<Legend />
						<Bar dataKey="viewCount" fill="pink" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="p-5">
				<h3 className="text-lg font-semibold mb-4">Blog Comments</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={blogs}>
						<XAxis dataKey="slug" />
						<YAxis />
						<Tooltip dataKey="slug" />
						<Legend />
						<Bar dataKey="viewCount" fill="skyblue" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="p-5">
				<h3 className="text-lg font-semibold mb-4">Blog Favourites</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={blogs}>
						<XAxis dataKey="slug" />
						<YAxis />
						<Tooltip dataKey="slug" />
						<Legend />
						<Bar dataKey="viewCount" fill="yellow" />
					</BarChart>
				</ResponsiveContainer>
			</div>
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
