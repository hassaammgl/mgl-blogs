"use client";
import { fonts } from "@/app/fonts";
import SiteName from "../shared/SIteName";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BackgroundLines } from "../ui/background-lines";
import { useUserStore } from "@/stores/store";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const Hero = () => {
	const { data } = useUserStore();
	const [scrollValue, setScrollValue] = useState(0);

	const { isSignedIn, user, isLoaded } = useUser();

	const lenis = useLenis(({ scroll }) => {
		// called every scroll
		setScrollValue(scroll);
		console.log("scroll:", scroll);
	});
	console.log(lenis);

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	if (!isSignedIn) {
		return <div>Sign in to view this page</div>;
	}

	const userStore = useUserStore();

	const saveInUserState = async () => {
		await userStore.setUserData();
	};
	useEffect(() => {
		saveInUserState();
	}, [user]);

	console.log(user);

	return (
		<BackgroundLines className={"-z-30 sticky top-0"}>
			<section className="scroll-snap-center w-full h-screen relative flex max-h-screen overflow-hidden">
				<div className=" top-0 left-0 absolute -z-20">
					<img
						src="/stand.png"
						alt="stand"
						className="w-full h-full object-contain"
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
									MGLBLOGS Mr {data?.username}
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
				<div
					className={`absolute top-0 right-0 bg-green-600 w-full h-[${
						scrollValue * 2
					}px]  transform transition-all duration-1000 ease-in-out`}
				/>
			</section>
		</BackgroundLines>
	);
};

export default Hero;
