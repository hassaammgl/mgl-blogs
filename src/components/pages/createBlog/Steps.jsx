"use client";
import React, { useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import { useBlogFormStore } from "@/stores/store";
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
import { handleFileUpload } from "@/lib/utils";
import { handleGenrateImg, genrateContent } from "@/actions/ai.action";
import { useUser } from "@clerk/nextjs";


// Define a component for rendering a single step
const Step = ({ children, stepNumber, totalSteps, onNext, onPrev, isNextDisabled, isPrevDisabled }) => {
	return (
		<m.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 20 }}
			transition={{ duration: 0.3 }}
			className="w-full"
		>
			<div className="bg-gray-800 rounded-lg p-6 shadow-md">
				<div className="mb-4">
					{/* Step progress indicator */}
					<div className="flex items-center mb-4">
						<div className="relative w-full h-2 bg-gray-600 rounded-full overflow-hidden">
							<div
								className="h-full bg-green-500"
								style={{ width: `${(stepNumber / totalSteps) * 100}%` }}
							></div>
						</div>
						<span className="text-gray-400 text-sm ml-2">
							Step {stepNumber} of {totalSteps}
						</span>
					</div>

					{/* Step content */}
					{children}
				</div>

				{/* Navigation buttons */}
				<div className="flex justify-between">
					<Button variant="outline" onClick={onPrev} disabled={isPrevDisabled}>
						<FaAngleLeft className="mr-2" />
						Back
					</Button>
					<Button onClick={onNext} disabled={isNextDisabled}>
						Next
						<FaAngleRight className="ml-2" />
					</Button>
				</div>
			</div>
		</m.div>
	);
};


// Steps component to manage rendering of different steps
const Steps = () => {
	const { step, setStep, setContentByAi, contentByAi, setContent, content, setImage, image,
		setTitle, title, setDescription, description,
		setCategory, category, imgByAi, setImgByAi,
		aiLoading, setAiLoading, setImageId, imageId } = useBlogFormStore();

	const [prompt, setPrompt] = useState("");
	const [model, setModel] = useState("flux");
	const [seed, setSeed] = useState(Math.floor(Math.random() * 100000000));
	const [base64Img, setBase64Img] = useState("");
	const [res, setRes] = useState("");
	const { user } = useUser();

	const handleBlogSubmit = async () => {
		console.log(await user);
		console.log(imageId);
		const res = await fetch(`/api/create-blog`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				description,
				category,
				content,
				image,
				user: await user.emailAddresses[0].emailAddress,
				imageId

			}),
		});
		const data = await res.json();
		console.log(data);

	};

	const handleNext = () => {
		// Add validation logic here if needed
		setStep(step + 1);
	};

	const handlePrev = () => {
		setStep(step - 1);
	};


	return (
		<div className="bg-gray-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<AnimatePresence
				mode="popLayout"
				initial
				exitBeforeEnter
				exit={{ opacity: 0 }}
			>
				{step === 1 && (
					<Step
						key={step}
						stepNumber={1}
						totalSteps={5}
						onNext={handleNext}
						onPrev={handlePrev}
						isNextDisabled={title === "" || description === ""}
						isPrevDisabled={true}
					>
						{/* Step 1 content */}
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
					</Step>
				)}

				{step === 2 && (
					<Step
						key={step}
						stepNumber={2}
						totalSteps={5}
						onNext={handleNext}
						onPrev={handlePrev}
						isNextDisabled={image === ""}
						isPrevDisabled={false}
					>
						{/* Step 2 content */}
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
											src={base64Img}
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
											onClick={() => handleGenrateImg({ prompt, model, seed, setBase64Img, setImage, setAiLoading, setImageId }).then((data) => {
												console.log("Image Generated", data)
												setImageId(data);
											})}

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
										onChange={(e) => handleFileUpload(e, setImage, setBase64Img)}
									/>
								</div>
								{image === "" ? null : (
									<div className="mb-4 w-full justify-center items-center h-auto gap-4 border-2 border-dashed border-gray-500 rounded-lg p-4 flex">
										<img src={base64Img} alt="Blog Img" />
									</div>
								)}
							</>
						)}
					</Step>
				)}

				{step === 3 && (
					<Step
						key={step}
						stepNumber={3}
						totalSteps={5}
						onNext={handleNext}
						onPrev={handlePrev}
						isNextDisabled={false}
						isPrevDisabled={false}
					>
						{/* Step 3 content */}
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
					</Step>
				)}

				{step === 4 && (
					<Step
						key={step}
						stepNumber={4}
						totalSteps={5}
						onNext={handleNext}
						onPrev={handlePrev}
						isNextDisabled={content === ""} // Replace with actual condition
						isPrevDisabled={false}
					>
						{/* Step 4 content */}
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
									<Button onClick={(e) => genrateContent(e, prompt, setContent, setRes)}>Generate</Button>
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
					</Step>
				)}

				{step === 5 && (
					<Step
						key={step}
						stepNumber={5}
						totalSteps={5}
						onNext={handleNext}
						onPrev={handlePrev}
						isNextDisabled={true} // Adjust this based on your logic
						isPrevDisabled={false}
					>
						{/* Step 5 content */}
						<div>{title}</div>
						<div>{description}</div>
						<div>{category}</div>
						<img src={base64Img} alt={title} aria-hidden="false" />
						<div dangerouslySetInnerHTML={{ __html: content }} />
						<div className="w-full flex justify-end">
							<Button onClick={handleBlogSubmit} aria-label="Submit Step 5">Submit</Button>
						</div>
					</Step>
				)}
			</AnimatePresence>
		</div>
	);
};


export default Steps;
