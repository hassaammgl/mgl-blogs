"use client";
import { fonts } from "@/app/fonts";

import SiteName from "../shared/SIteName";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = () => {
	return (
		// <main className="w-full h-screen relative flex max-h-screen">
		// 	<h1
		// 		className={`site-name font-extrabold text-9xl -tracking-widest text-center -left-[17rem] top-[25rem] -rotate-90 text-green-600 absolute ${fonts.Orbitron.className}`}
		// 	>
		// 		<SiteName />
		// 	</h1>
		// 	<div className="fixed  top-[5rem] text-[10rem] left-[15rem]">
		// 		<div className={`font-bold ${fonts.Lobster.className}`}>
		// 			Welcome
		// 			<div className="mix-blend-difference text-white">
		// 				to{" "}
		// 				<span
		// 					className={`text-green-600 font-extralight ${fonts.Dancing_Script.className}`}
		// 				>
		// 					MGLBLOGS
		// 				</span>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<p className="text-2xl font-light fixed  bottom-[7rem]  left-[15rem]">
		// 		Where Ideas Come to Life! At *MGLBLOGS, we dive deep into web
		// 		development, programming, and tech trends. Whether you're a
		// 		beginner exploring the world of code or an experienced developer
		// 		looking for fresh insights, you'll find guides, tutorials, and
		// 		thought-provoking articles here.
		// 	</p>
		// 	<Image
		// 		src="/stand.webp"
		// 		alt="stand"
		// 		width={500}
		// 		height={500}
		// 	/>
		// </main>
		<main className="w-full h-screen relative flex max-h-screen">
			<div className="h-screen w-fit">
				<Image src="/stand.png" alt="stand" layout="fill" objectFit="contain" />
			</div>
			<div className="">
				<h1
					className={`fixed site-name text-transparent text-green-600 font-extrabold text-9xl -tracking-widest  -left-[7rem] top-[25rem] -rotate-90 ${fonts.Orbitron.className}`}
				>
					<SiteName />
				</h1>
				<div className="">
					<div className={`${fonts.Lobster.className}`}>
						Welcome
						<div className="">
							to{" "}
							<span
								className={` ${fonts.Dancing_Script.className}`}
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
						className="text-2xl font-light"
						duration={0.2}
					/>
				</div>
			</div>
		</main>
	);
};

export default Hero;
