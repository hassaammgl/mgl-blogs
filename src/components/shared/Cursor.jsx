"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const moveCursor = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		document.addEventListener("mousemove", moveCursor);
		return () => document.removeEventListener("mousemove", moveCursor);
	}, []);

	return (
		// <div
		// 	className="custom-cursor"
		// 	style={{
		// 		left: `${position.x}px`,
		// 		top: `${position.y}px`,
		// 	}}
		// />
		<> </>
	);
};

export default CustomCursor;
