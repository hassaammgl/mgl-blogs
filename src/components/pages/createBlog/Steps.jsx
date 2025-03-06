"use client";
import React, { useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import { useBlogFormStore } from "@/stores/store";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { genImgModel, blogCategory } from "@/constants"
import { Input } from "@/components/ui/input"



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
		case 5:
			return (
				<AnimatedWrapper>
					<Step5 />
				</AnimatedWrapper>
			);
		case 6:
			return (
				<AnimatedWrapper>
					<Step6 />
				</AnimatedWrapper>
			);
		default:
			return <div>Steps {step}</div>;
	}
};

// used for title and description
const Step1 = () => {
	const { setStep, step, setTitle, setDescription, title, description } =
		useBlogFormStore();

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
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
					onChange={(e) => {
						setTitle(e.target.value);
					}}
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
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className="w-full flex justify-end">
				<div className="mb-4 flex justify-between gap-4">
					{step !== 1 && (
						<Button
							onClick={() => {
								setStep(step - 1);
							}}
							disabled={step === 1}
							className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
						>
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
								<FaAngleLeft />
								Prev
							</span>
						</Button>
					)}

					<Button
						onClick={() => {
							setStep(step + 1);
						}}
						disabled={title === "" || description === ""}
						className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							Next
							<FaAngleRight />
						</span>
					</Button>

				</div>
			</div>
		</m.div>
	);
};

// used for upload image or ai based image
const Step2 = () => {
	const { setStep, step, setImage, image, imgByAi, setImgByAi, aiLoading, setAiLoading } =
		useBlogFormStore();

	const [prompt, setPrompt] = useState("");
	const [model, setModel] = useState("flux");
	const [seed, setSeed] = useState(768823111);


	const handleFileChange = (e) => {
		console.log(e[0]);
		const file = e[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64String = reader.result;
			console.log(base64String);
			setImage(base64String);
		};
		reader.readAsDataURL(file);
	};

	const handleGenrateImg = async () => {
		setAiLoading(true);
		const res = await fetch(`/api/img-gen`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt, model, seed }),
		});
		const data = await res.json();
		console.log(data);
		setImage(data);
		setAiLoading(false);
	}

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<m.div
				initial={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				animate={{ opacity: 1 }}
				className="mb-4 text-center font-bold text-2xl gap-5 flex justify-center"
			>
				<button
					onClick={(e) => {
						e.preventDefault();
						setImgByAi(false);
					}}
					className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					Upload Image
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						setImgByAi(true);
					}}
					className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					or creating by ai
				</button>
			</m.div>

			{imgByAi === null ? (
				<></>
			) : imgByAi === true ? <>
				<div className="mb-4 text-center font-bold text-2xl">
					Create Image By AI
				</div>
				<div className="mb-4">
					{image && <img src={image.base64} className="w-max h-fit" alt="Blog Img" />}
				</div>
				<div className="mb-4">
					<div className="mb-4 flex justify-center gap-3">
						<textarea
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
							id="prompt"
							placeholder="Write your Prompts here it will genrate realtime imgs....."
							name="prompt"
							onChange={(e) => setPrompt(e.target.value)}
						/>
						<Button onClick={handleGenrateImg} className="px-12 rounded-lg h-full m-auto py-4 bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
							{aiLoading ? "Genrating..." : "Genrate"}
						</Button>
					</div>
					<div className="mb-4 flex gap-5" >
						<Select onValueChange={(e) => setModel(e)} className="w-[180px] bg-black">
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Model" />
							</SelectTrigger>
							<SelectContent>
								{genImgModel.map((model, i) => (
									<SelectItem key={i} value={model.label}>{model.model}</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Input type="number" onChange={(e) => setSeed(e.target.value)} placeholder={"Enter Seed"} />
					</div>
				</div>
			</> : (
				<>
					<div className="mb-4 text-center font-bold text-2xl">
						Upload Image
					</div>
					<div className="mb-4">
						<FileUpload
							accept="image/*"
							onChange={handleFileChange}
						/>
					</div>
					{image === "" ? null : (
						<div className="mb-4 w-full justify-center items-center h-auto gap-4 border-2 border-dashed border-gray-500 rounded-lg p-4 flex">
							<img src={image} alt="Blog Img" />
						</div>
					)}
				</>
			)}

			<div className="w-full flex justify-end">
				<div className="mb-4 flex justify-between gap-4">
					<Button
						onClick={() => {
							setStep(step - 1);
						}}
						disabled={step === 1}
						className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<FaAngleLeft />
							Prev
						</span>
					</Button>
					{image === "" ? null : (
						<Button
							onClick={() => {
								setStep(step + 1);
							}}
							disabled={step === 4}
							className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
						>
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
								Use Image
								<FaAngleRight />
							</span>
						</Button>
					)}
				</div>
			</div>
		</m.div>
	);
};



// used for step 3 interests
const Step3 = () => {
	const { setStep, step, setCategory } = useBlogFormStore();

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div className="mb-4 text-center font-bold text-2xl">
				Select a Category
			</div>
			<div className="mb-4 flex justify-center">
				<Select onValueChange={(e) => setCategory(e)} className="w-[300px] bg-black">
					<SelectTrigger className="w-[300px]">
						<SelectValue placeholder="Category" />
					</SelectTrigger>
					<SelectContent>
						{blogCategory.map((category, i) => (
							<SelectItem key={i} value={category}>{category}</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="w-full flex justify-end">
				<div className="mb-4 flex justify-between gap-4">
					<Button
						onClick={() => {
							setStep(step - 1);
						}}
						disabled={step === 1}
						className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<FaAngleLeft />
							Prev
						</span>
					</Button>
					<Button
						onClick={() => {
							setStep(step + 1);
						}}
						disabled={step === 4}
						className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							Next
							<FaAngleRight />
						</span>
					</Button>
				</div>
			</div>
		</m.div>
	);
};

// used for content category ai based or custom
const Step4 = () => {
	const { setStep, step, setContentByAi, contentByAi } = useBlogFormStore();

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div className="mb-4 text-center font-bold text-2xl">
				Choose Content Type
			</div>
			<div className="mb-4 text-center font-bold text-2xl gap-5 flex justify-center">
				<button
					onClick={(e) => {
						e.preventDefault();
						setContentByAi(false);
					}}
					className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					Custom Content
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						setContentByAi(true);
					}}
					className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					Content by AI
				</button>
			</div>
			<div className="w-full flex justify-end">
				<NextPrev />
			</div>
		</m.div>
	);
};

// used for form for ai or custom content
const Step5 = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div className="mb-4 text-center font-bold text-2xl">{title}</div>
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
const Step6 = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div className="mb-4 text-center font-bold text-2xl">{title}</div>
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
		<AnimatePresence
			mode="popLayout"
			initial
			exitBeforeEnter
			exit={{ opacity: 0 }}
		>
			{children}
		</AnimatePresence>
	);
};

const NextPrev = () => {
	const { setStep, step } = useBlogFormStore();
	return (
		<div className="mb-4 flex justify-between gap-4">
			<Button
				onClick={() => {
					setStep(step - 1);
				}}
				disabled={step === 1}
				className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
					<FaAngleLeft />
					Prev
				</span>
			</Button>
			<Button
				onClick={() => {
					setStep(step + 1);
				}}
				disabled={step === 4}
				className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
					Next
					<FaAngleRight />
				</span>
			</Button>
		</div>
	);
};

export default Steps;

// import Editor from "@/components/shared/Editor";
// import { useState } from "react";
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
