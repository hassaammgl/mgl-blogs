"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";

const SiteName = () => {
	const text = "M6787065".split("");

	useEffect(() => {
		// Entrance animation
		gsap.fromTo(
			".letter",
			{ y: -100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out",
				stagger: 0.1,
				delay: 0.2,
			}
		);
	}, []);

	return (
		<>
			{text.map((char, index) => (
				<motion.span key={index} className={`inline-block letter `}>
					{char}
				</motion.span>
			))}
		</>
	);
};

export default SiteName;
