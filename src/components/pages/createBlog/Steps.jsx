"use client";
import React, { useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import { useBlogFormStore,useUserStore } from "@/stores/store";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { genImgModel, blogCategory } from "@/constants";
import { Input } from "@/components/ui/input";
import Editor from "@/components/shared/Editor";

// Define a component for rendering navigation buttons (Next/Prev)
const NavigationButtons = ({ onNext, onPrev, isNextDisabled, isPrevDisabled }) => (
	<div className="mb-4 flex justify-between gap-4">
		<Button
			onClick={onPrev}
			disabled={isPrevDisabled}
			className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
		>
			<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
			<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
				<FaAngleLeft />
				Prev
			</span>
		</Button>
		<Button
			onClick={onNext}
			disabled={isNextDisabled}
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

// Define individual step components (Step1, Step2, etc.)
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
			{/* Input fields for title and description */}
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
			{/* Navigation buttons */}
			<NavigationButtons
				onNext={() => setStep(step + 1)}
				onPrev={() => setStep(step - 1)}
				isNextDisabled={title === "" || description === ""}
				isPrevDisabled={step === 1}
			/>
		</m.div>
	);
};

const Step2 = () => {
	const {
		setStep,
		step,
		setImage,
		image,
		imgByAi,
		setImgByAi,
		aiLoading,
		setAiLoading,
		setImageID,
	} = useBlogFormStore();

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
		console.log(data.base64);
		setImage(data.base64);
		console.log(data.url);
		setImageID(data._id);
		console.log(data._id);
		setAiLoading(false);
	};

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

			{imgByAi === null && <></>}
			{imgByAi === true && (
				<>
					<div className="mb-4 text-center font-bold text-2xl">
						Create Image By AI
					</div>
					<div className="mb-4">
						{image && (
							<img
								src={image}
								className="w-max h-fit"
								alt="Blog Img"
							/>
						)}
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
							<Button
								onClick={handleGenrateImg}
								className="px-12 rounded-lg h-full m-auto py-4 bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
							>
								{aiLoading ? "Genrating..." : "Genrate"}
							</Button>
						</div>
						<div className="mb-4 flex gap-5">
							<Select
								onValueChange={(e) => setModel(e)}
								className="w-[180px] bg-black"
							>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Model" />
								</SelectTrigger>
								<SelectContent>
									{genImgModel.map((model, i) => (
										<SelectItem key={i} value={model.label}>
											{model.model}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Input
								type="number"
								onChange={(e) => setSeed(e.target.value)}
								placeholder={"Enter Seed"}
							/>
						</div>
					</div>
				</>
			)}
			{imgByAi === false && (
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
				<NavigationButtons
					onNext={() => setStep(step + 1)}
					onPrev={() => setStep(step - 1)}
					isNextDisabled={image === ""}
					isPrevDisabled={step === 1}
				/>
			</div>
		</m.div>
	);
};

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
				<Select
					onValueChange={(e) => setCategory(e)}
					className="w-[300px] bg-black"
				>
					<SelectTrigger className="w-[300px]">
						<SelectValue placeholder="Category" />
					</SelectTrigger>
					<SelectContent>
						{blogCategory.map((category, i) => (
							<SelectItem key={i} value={category}>
								{category}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			{/* Navigation buttons */}
			<div className="w-full flex justify-end">
				<NavigationButtons
					onNext={() => setStep(step + 1)}
					onPrev={() => setStep(step - 1)}
					isNextDisabled={step === 4} // Replace with actual condition
					isPrevDisabled={step === 1}
				/>
			</div>
		</m.div>
	)
};

const Step4 = () => {
	const { setStep, step, setContentByAi, contentByAi, content, setContent } =
		useBlogFormStore();

	const [prompt, setPrompt] = useState("")
	const [res, setRes] = useState("")

	const genrateContent = async (e) => {
		e.preventDefault();
		setRes("")
		const res = await fetch(`/api/content-gen`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt }),
		});
		const data = await res.json();
		console.log(data);
		setRes(data.blog);
		setContent(res)
	}

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			{contentByAi === null && (
				<div className="mb-4 text-center font-bold text-2xl">
					Choose Content Type
				</div>
			)}
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
			{contentByAi === true && (<>
				<div className="mb-4">
					<label
						className="block text-gray-300 text-sm font-bold mb-2"
						htmlFor="content"
					>
						Content by AI
					</label>
					<div className="w-full flex justify-center gap-4">
						<Input type="text" onChange={(e) => setPrompt(e.target.value)} placeholder="Enter AI Content" />
						<Button onClick={genrateContent}>Generate</Button>
					</div>
					{res !== "" && (
						<Editor onChange={setRes} blogContent={res} />
					)}

				</div>
			</>)}
			{contentByAi === false && (
				<>
					<div className="mb-4">
						<label
							className="block text-gray-300 text-sm font-bold mb-2"
							htmlFor="content"
						>
							Content
						</label>
						<Editor onChange={setContent} />
					</div>
				</>
			)}
			{/* Navigation buttons */}
			<div className="w-full flex justify-end">
				<NavigationButtons
					onNext={() => {
						console.log(res)
						setContent(res)
						setStep(step + 1)
					}}
					onPrev={() => setStep(step - 1)}
					isNextDisabled={content === ""} // Replace with actual condition
					isPrevDisabled={step === 1}
				/>
			</div>
		</m.div>
	);
};

const Step5 = () => {
	const { imgByAi, contentByAi, title, description, category, image, content, imageID } =
		useBlogFormStore();
	const {data: user} = useUserStore();
	
	console.log(user);
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user);
		const res = await fetch(`/api/create-blog`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ imgByAi, contentByAi, title, description, category, image, content, imageID, userEmail: user.emailAddresses[0].emailAddress }),
		});
		const data = await res.json();
		console.log(data);
	};

	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			animate={{ opacity: 1 }}
		>
			<div>{title}</div>
			<div>{description}</div>
			<div>{category}</div>
			<img src={image} alt={title} />
			<div dangerouslySetInnerHTML={{ __html: content }} />
			<div className="w-full flex justify-end">
				<Button onClick={handleSubmit} >Submit</Button>
			</div>
		</m.div>
	)
};

// Steps component to manage rendering of different steps
const Steps = () => {
	const { step } = useBlogFormStore();

	// Define a mapping of step numbers to step components
	const steps = {
		1: <Step1 />,
		2: <Step2 />,
		3: <Step3 />,
		4: <Step4 />,
		5: <Step5 />,
	};

	// Render the appropriate step component based on the current step
	return (
		<AnimatedWrapper>
			{steps[step] || <div>Steps {step}</div>}
		</AnimatedWrapper>
	);
};

// AnimatedWrapper component to apply animation to step transitions
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

// Export the Steps component as the default export
export default Steps;

