"use client";
import React, { useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import { useBlogFormStore } from "@/stores/store";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Steps = () => {
	const { step } = useBlogFormStore();

	switch (step) {
		case 1:
			return (
				<AnimatedWrapper>
					<Step1 />
				</AnimatedWrapper>
			);
		case 2:
			return (
				<AnimatedWrapper>
					<Step2 />
				</AnimatedWrapper>
			);
		case 3:
			return (
				<AnimatedWrapper>
					<Step3 />
				</AnimatedWrapper>
			);
		case 4:
			return (
				<AnimatedWrapper>
					<Step4 />
				</AnimatedWrapper>
			);

		default:
			return <div>Steps {step}</div>;
	}
};

// used for title and description
const Step1 = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div className="mb-4 text-center font-bold">
				{title.replace(/\s+/g, "-")}
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-300 text-sm font-bold mb-2"
					htmlFor="title"
				>
					Title
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-300 text-sm font-bold mb-2"
					htmlFor="description"
				>
					Description
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
					id="description"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className="w-full flex justify-end">
				<NextPrev />
			</div>
		</m.div>
	);
};

// used for content and image
const Step2 = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div className="mb-4 text-center font-bold">
				{title.replace(/ /, "-")}
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-300 text-sm font-bold mb-2"
					htmlFor="title"
				>
					Title
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-300 text-sm font-bold mb-2"
					htmlFor="description"
				>
					Description
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
					id="description"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className="w-full flex justify-end">
				<NextPrev />
			</div>
		</m.div>
	);
};

// used for category and subcategory
const Step3 = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div className="mb-4 text-center font-bold">
				{title.replace(/ /, "-")}
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-300 text-sm font-bold mb-2"
					htmlFor="title"
				>
					Title
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-300 text-sm font-bold mb-2"
					htmlFor="description"
				>
					Description
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
					id="description"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className="w-full flex justify-end">
				<NextPrev />
			</div>
		</m.div>
	);
};

// used for tags and publish
const Step4 = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div className="mb-4 text-center font-bold">
				{title.replace(/ /, "-")}
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-300 text-sm font-bold mb-2"
					htmlFor="title"
				>
					Title
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-300 text-sm font-bold mb-2"
					htmlFor="description"
				>
					Description
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
					id="description"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className="w-full flex justify-end">
				<NextPrev />
			</div>
		</m.div>
	);
};

const AnimatedWrapper = ({ children }) => {
	return (
		<AnimatePresence mode="popLayout" initial exitBeforeEnter>
			{children}
		</AnimatePresence>
	);
};

const NextPrev = () => {
	const { setStep, step } = useBlogFormStore();
	return (
		<div className="mb-4">
			<Button
				onClick={() => {
					setStep(step - 1);
				}}
				disabled={step === 1}
			>
				<FaAngleLeft />
			</Button>
			<Button
				onClick={() => {
					setStep(step + 1);
				}}
				disabled={step === 4}
			>
				<FaAngleRight />
			</Button>
		</div>
	);
};

export default Steps;

// import Editor from "@/components/shared/Editor";
// import { useState } from "react";
// import { FileUpload } from "@/components/ui/file-upload";
// import { Switch } from "@/components/ui/switch";

// const Steps = () => {
// 	const [customText, setCustomText] = useState(false);

// 	const [data, setData] = useState({
// 		title: "",
// 		content: "",
// 		description: "",
// 		content: "",
// 		image: "",
// 		category: "",
// 		subcategory: "",
// 		subcategoryoption: "",
// 	});

// 	const handleFileChange = (e) => {
// 		console.log(e[0]);
// 		const file = e[0];
// 		const reader = new FileReader();
// 		reader.onloadend = () => {
// 			const base64String = reader.result
// 				.replace("data:", "")
// 				.replace(/^.+,/, "");
// 			console.log(base64String);
// 		};
// 		reader.readAsDataURL(file);
// 	};

// 	return (
// 		<div className="w-full min-h-screen flex justify-center items-center bg-gray-900 p-4">
// 			<form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
// 				<div className="mb-4">
// 					<FileUpload onChange={handleFileChange} />
// 				</div>
// 				<div className="mb-4">
// 					<label
// 						className="block text-gray-300 text-sm font-bold mb-2"
// 						htmlFor="title"
// 					>
// 						Title
// 					</label>
// 					<input
// 						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// 						type="text"
// 						id="title"
// 						name="title"
// 					/>
// 				</div>
// 				<div className="mb-4">
// 					<input type="checkbox" name="" id="" />
// 					<p>Custom Text</p>
// 				</div>

// 				{customText === false ? (
// 					<div className="mb-4">
// 						<label
// 							className="block text-gray-300 text-sm font-bold mb-2"
// 							htmlFor="content"
// 						>
// 							Content
// 						</label>
// 						<Editor />
// 					</div>
// 				) : (
// 					<div className="mb-4">
// 						<label
// 							className="block text-gray-300 text-sm font-bold mb-2"
// 							htmlFor="content"
// 						>
// 							Content
// 						</label>
// 						<textarea
// 							name="content"
// 							id=""
// 							cols="30"
// 							rows="10"
// 						></textarea>
// 					</div>
// 				)}

// 				<div className="flex items-center justify-between">
// 					<button
// 						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// 						type="submit"
// 					>
// 						Submit
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

// export default Steps;
