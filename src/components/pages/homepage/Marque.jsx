"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Marquee = ({ items, baseSpeed = 2 }) => {
	const marqueeRef = useRef(null);
	const [speed, setSpeed] = useState(baseSpeed);

	useEffect(() => {
		const marquee = marqueeRef.current;
		const tl = gsap.timeline({ repeat: -1 });

		tl.to(marquee, {
			x: "-100%",
			duration: speed,
			ease: "linear",
		});

		const handleScroll = () => {
			const scrollSpeed = window.scrollY / 200 + baseSpeed; // Dynamic speed based on scroll
			setSpeed(scrollSpeed);
			tl.timeScale(scrollSpeed / baseSpeed); // Adjust GSAP speed
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [speed, baseSpeed]);

	return (
		<div className="overflow-hidden relative w-full bg-black py-4">
			<div ref={marqueeRef} className="flex space-x-8 w-max">
				{items.concat(items).map((item, index) => (
					<div
						key={index}
						className="text-lg font-bold px-4 whitespace-nowrap text-white"
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default Marquee;
