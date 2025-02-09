"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { fonts } from "@/app/fonts";

const PageTransition = ({ onComplete }) => {
	const [isExiting, setIsExiting] = useState(false);
	const text = "MGL_BLOGS".split("");

	useEffect(() => {
		// Entrance animation
		gsap.fromTo(
			".container",
			{ scale: 1.2, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" }
		);

		gsap.fromTo(
			".letter",
			{ y: 100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out",
				stagger: 0.1,
				delay: 0.2,
			}
		);

		// Automatically trigger exit animation after 2 seconds
		const timeout = setTimeout(() => setIsExiting(true), 1500);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		if (isExiting) {
			// Exit animation for letters
			gsap.to(".letter", {
				y: -50,
				opacity: 0,
				duration: 0.8,
				ease: "power3.in",
				stagger: 0.1,
			});

			// Exit animation for container
			gsap.to(".container", {
				scale: 1.1,
				opacity: 0,
				duration: 1,
				ease: "power4.in",
				onComplete: onComplete, // Remove from DOM after animation
			});
		}
	}, [isExiting, onComplete]);

	return (
		<motion.div className="fixed inset-0 flex items-center justify-center bg-black text-green-600 z-50  h-screen w-screen">
			<h1 className="text-5xl font-bold tracking-wide flex space-x-1">
				{text.map((char, index) => (
					<motion.span
						key={index}
						className={`inline-block letter ${fonts.Kumar_One.className}`}
					>
						{char}
					</motion.span>
				))}
			</h1>
		</motion.div>
	);
};

export default PageTransition;
