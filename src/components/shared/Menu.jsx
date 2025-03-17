"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "@/styles/Menu.css"; // Remove this line after conversion
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs'


const menuLinks = [
	{
		label: "Home",
		href: "/",
		_id: crypto.randomUUID(),
	},
	{
		label: "About",
		href: "/about",
		_id: crypto.randomUUID(),
	},
	{
		label: "Contact",
		href: "/contact",
		_id: crypto.randomUUID(),
	},
	{
		label: "Blogs",
		href: "/blogs",
		_id: crypto.randomUUID(),
	},
	{
		label: "Dashboard",
		href: "/dashboard",
		_id: crypto.randomUUID(),
	},
];


const Menu = () => {

	const container = useRef();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const tl = useRef();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
		() => {
			gsap.set(".menu-link-item-holder", { y: 75 });

			tl.current = gsap
				.timeline({
					paused: true,
				})
				.to(".menu-overlay", {
					duration: 1.25,
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
					ease: "power4.inOut",
				})
				.to(".menu-link-item-holder", {
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: "power4.inOut",
					delay: -0.75,
				});
		},
		{ scope: container }
	);

	useEffect(() => {
		if (isMenuOpen) {
			tl.current.play();
		} else {
			tl.current.reverse();
		}
	}, [isMenuOpen]);

	return (
		<nav className="menu-container" ref={container}>
			{/* Menu Bar */}
			<div className="menu-bar fixed top-0 left-0 w-screen p-8 flex justify-between items-center">
				<div className="menu-logo">
					<Link className="text-white" href="/">MGLBLOGS</Link>
				</div>
				<div
					className="menu-open text-white cursor-pointer"
					onClick={toggleMenu}
				>
					<p>MENU</p>
				</div>
			</div>

			{/* Menu Overlay */}
			<div className="menu-overlay fixed top-0 left-0 w-screen h-screen p-8 flex flex-col bg-green-600 z-50">
				<div className="menu-overlay-bar flex justify-between items-center w-full">
					<div className="menu-logo text-black">
						<Link href="/">MGLBLOGS</Link>
					</div>
					<div className="flex gap-4">
						<div
							className="menu-close text-black cursor-pointer"
							onClick={toggleMenu}
						>
							<p>CLOSE</p>
						</div>
						<div className="menu-close text-black">
							<SignedOut>
								<SignInButton />
								<SignUpButton />
							</SignedOut>
							<SignedIn>
								<UserButton />
							</SignedIn>
						</div>
					</div>
				</div>

				{/* Menu Content */}
				<div className="menu-copy flex flex-col justify-center pt-8 flex-[4]">
					<div className="menu-links">
						{menuLinks.map((link) => (
							<div key={link._id} className="menu-link-item w-max overflow-hidden">
								<div className="menu-link-item-holder relative">
									<Link
										href={link.href}
										className="menu-link text-black text-[80px] font-normal leading-[85%] tracking-[-0.02em]"
									>
										{link.label}
									</Link>
								</div>
							</div>
						))}
					</div>

					{/* Footer Info */}
					<div className="menu-info flex justify-between items-end w-screen mt-auto">
						<div className="menu-info-col flex flex-col justify-end p-4">
							<a href="#" className="text-black">X ↗</a>
							<a href="#" className="text-black">Instagram ↗</a>
							<a href="#" className="text-black">LinkedIn ↗</a>
							<a href="#" className="text-black">Behance ↗</a>
							<a href="#" className="text-black">Dribble ↗</a>
						</div>
						<div className="menu-info-col p-4 w-fit flex-1">
							<p className="text-black">&copy; 2025 MGLBLOGS. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Menu;