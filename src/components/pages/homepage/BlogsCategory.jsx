"use client"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import Image from "next/image"
import React from "react";
import { testimonials } from "@/constants";



const BlogsCategory = () => {
	return (
		<section className="overflow-hidden w-full h-screen flex-col bg-green-600 flex items-center justify-center">
			<ScrollVelocity velocity={4} className="rotate-12">
				{testimonials.map(({ name, src }) => (
					<div
						key={name}
						className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
					>
						<Image
							src={src}
							alt={name}
							fill
							className="h-full w-full object-cover object-center"
						/>
					</div>
				))}
			</ScrollVelocity>
			<div className="w-full"	>
				<ScrollVelocity velocity={-2}>
					{testimonials.map((v, index) => (
						<span className="text-white text-9xl " key={index}>{` ${v.name} . `}</span>
					))}
				</ScrollVelocity>
			</div>
			<ScrollVelocity velocity={-4} className="-rotate-12">
				{testimonials.map(({ name, src }) => (
					<div
						key={name}
						className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
					>
						<Image
							src={src}
							alt={name}
							fill
							className="h-full w-full object-cover object-center"
						/>
					</div>
				))}
			</ScrollVelocity>
			<div className="w-full"	>
				<ScrollVelocity velocity={2}>
					{testimonials.map((v, index) => (
						<span className="text-white text-9xl " key={index}>{` ${v.designation} . `}</span>
					))}
				</ScrollVelocity>
			</div>
		</section>
	);
};

export default BlogsCategory;