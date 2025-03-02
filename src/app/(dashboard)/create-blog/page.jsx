"use client";
import Steps from "@/components/pages/createBlog/Steps";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useBlogFormStore } from "@/stores/store";

const page = () => {
	const { setStep, step, setTitle, setDescription, title, description } =
		useBlogFormStore();

	return (
		<div className="w-full min-h-screen flex justify-start items-center flex-col bg-black p-4">
			<Card className="w-full max-w-5xl bg-gray-800">
				<CardHeader>
					<CardTitle className="text-4xl text-center mt-10 mb-10 font-extrabold text-white ">
						Create Blog
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Steps />
				</CardContent>
				<CardFooter>
					<p className="text-white text-center">Step {step} of 5</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default page;
