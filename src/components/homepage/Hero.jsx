"use client";
import { fonts } from "@/app/fonts";

import SiteName from "../shared/SIteName";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = () => {
	return (
		// <main className="w-full h-screen relative flex max-h-screen">
		// 	<div className="h-screen w-full float-left">
		// 		<Image
		// 			src="/stand.png"
		// 			alt="stand"
		// 			width={500}
		// 			height={500}
		// 			objectFit="contain"
		// 		/>
		// 	</div>
		// 	<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
		// 		<h1
		// 			className={`absolute  site-name text-transparent text-green-600 font-extrabold text-9xl -tracking-widest text-center -left-[45rem] top-[12rem] -rotate-90 ${fonts.Orbitron.className}`}
		// 		>
		// 			<SiteName />
		// 		</h1>
		// 		<div className="text-[8rem]">
		// 			<div className={`${fonts.Lobster.className}`}>
		// 				Welcome
		// 				<div className="">
		// 					to{" "}
		// 					<span
		// 						className={` text-green-600 font-extralight ${fonts.Dancing_Script.className}`}
		// 					>
		// 						MGLBLOGS
		// 					</span>
		// 				</div>
		// 			</div>
		// 			<TextGenerateEffect
		// 				words="Where Ideas Come to Life! At *MGLBLOGS, we dive deep into web
		// 			development, programming, and tech trends. Whether you're a
		// 			beginner exploring the world of code or an experienced developer
		// 			looking for fresh insights, you'll find guides, tutorials, and
		// 			thought-provoking articles here."
		// 				className="text-2xl font-light"
		// 				duration={0.2}
		// 			/>
		// 		</div>
		// 	</div>
		// </main>
		<main className="w-full h-screen relative flex max-h-screen overflow-hidden">
			<div className=" top-0 left-0 absolute -z-20">
				<Image
					src="/stand.png"
					alt="stand"
					width={500}
					height={500}
					objectFit="contain"
				/>
				<h1 className={`site-name ${fonts.Orbitron.className} `}>
					<SiteName />
				</h1>
			</div>
			<div className="flex items-center justify-center w-full h-full">
				<div className="relative ml-96 text-[8rem]">
					<div className={`${fonts.Lobster.className}`}>
						Welcome
						<div className="">
							to{" "}
							<span
								className={`text-green-600 font-extralight ${fonts.Dancing_Script.className}`}
							>
								MGLBLOGS
							</span>
						</div>
					</div>
					<TextGenerateEffect
						words="Where Ideas Come to Life! At *MGLBLOGS, we dive deep into web
					development, programming, and tech trends. Whether you're a
					beginner exploring the world of code or an experienced developer
					looking for fresh insights, you'll find guides, tutorials, and
					thought-provoking articles here."
						className="text-2xl font-light pr-2"
						duration={4}
					/>
				<div	className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-700"></div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
