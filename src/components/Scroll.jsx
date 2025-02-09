"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

const Scroll = ({ children, ...props }) => {
	const { scrollYProgress } = useScroll();
	const [y, setY] = useState(0);

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			setY(window.scrollY);
		});
	}, [scrollYProgress]);

	return (
		<motion.body
			style={{
				y: -y * 0.3, // Adjust for a smoother effect
				transition: "transform 0.2s ease-out",
			}}
			{...props}
		>
			{children}
		</motion.body>
	);
};

export default Scroll;
