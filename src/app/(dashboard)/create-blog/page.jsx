"use client";
import Editor from "@/components/shared/Editor";
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Switch } from "@/components/ui/switch";

const page = () => {
	const [customText, setCustomText] = useState(false);

	const [data, setData] = useState({
		title: "",
		content: "",
		description: "",
		content: "",
		image: "",
		category: "",
		subcategory: "",
		subcategoryoption: "",
	});

	const handleFileChange = (e) => {
		console.log(e[0]);
		const file = e[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64String = reader.result
				.replace("data:", "")
				.replace(/^.+,/, "");
			console.log(base64String);
		};
		reader.readAsDataURL(file);
	};

	return (
		<div className="w-full min-h-screen flex justify-center items-center bg-gray-900 p-4">
			<form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
				<div className="mb-4">
					<FileUpload onChange={handleFileChange} />
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-300 text-sm font-bold mb-2"
						htmlFor="title"
					>
						Title
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						id="title"
						name="title"
					/>
				</div>
				<div className="mb-4">
					<input type="checkbox" name="" id="" />
					<p>Custom Text</p>
				</div>

				{customText === false ? (
					<div className="mb-4">
						<label
							className="block text-gray-300 text-sm font-bold mb-2"
							htmlFor="content"
						>
							Content
						</label>
						<Editor />
					</div>
				) : (
					<div className="mb-4">
						<label
							className="block text-gray-300 text-sm font-bold mb-2"
							htmlFor="content"
						>
							Content
						</label>
						<textarea
							name="content"
							id=""
							cols="30"
							rows="10"
						></textarea>
					</div>
				)}

				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default page;
