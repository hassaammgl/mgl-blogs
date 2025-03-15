"use client";
import { ReactLenis, useLenis } from "lenis/react";

const Scroll = ({ children, ...props }) => {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
		// console.log("scroll:", scroll);
	});
	console.log(lenis);

	return <ReactLenis root>{children}</ReactLenis>;
};

export default Scroll;
