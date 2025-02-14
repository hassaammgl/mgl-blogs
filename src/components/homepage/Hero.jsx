"use client";
import { fonts } from "@/app/fonts";

import SiteName from "../shared/SIteName";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BackgroundLines } from "../ui/background-lines";

const Hero = () => {
	return (
		<BackgroundLines className={"-z-30 sticky top-0"}>
			<section className="w-full h-screen relative flex max-h-screen overflow-hidden">
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
					</div>
				</div>
			</section>
		</BackgroundLines>
	);
};

export default Hero;
