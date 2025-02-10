"use client";
import { fonts } from "@/app/fonts";

import SiteName from "../shared/SIteName";

const Hero = () => {
	return (
		<main className="p-4 w-full h-screen relative">
			<h1
				className={`font-extrabold text-9xl -tracking-widest text-center -left-[17rem] top-[25rem] -rotate-90 text-green-600 absolute ${fonts.Orbitron.className}`}
			>
				<SiteName />
			</h1>
			<div className="text-2xl font-bold">
				<p className="text-center">
					Welcome to{" "}
					<span className={`${fonts.Imperial_Script.className}`}>
						<SiteName />
					</span>
				</p>
			</div>
			<p>This is a place for sharing thoughts, ideas, and stories.</p>
		</main>
	);
};

export default Hero;
