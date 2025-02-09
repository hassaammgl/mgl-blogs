"use client";
import { useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";

export default function Template({ children }) {
	const [showTransition, setShowTransition] = useState(true);

	useEffect(() => {
		setTimeout(() => setShowTransition(false), 3000); // Wait for animation
	}, []);

	return (
		<>
			{showTransition && <PageTransition onComplete={() => setShowTransition(false)} />}
			{!showTransition && children}
		</>
	);
}
