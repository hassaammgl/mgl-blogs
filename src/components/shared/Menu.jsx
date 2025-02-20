// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import Logo from "./Logo";
// import {
// 	Sheet,
// 	SheetContent,
// 	SheetDescription,
// 	SheetHeader,
// 	SheetTitle,
// 	SheetTrigger,
// } from "@/components/ui/sheet";
// import { ModeToggle } from "./Mode";
// import { Poppins } from "next/font/google";
// import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
// import { Button } from "../ui/button";
// import { TiThMenuOutline } from "react-icons/ti";

// const links = [
// 	{
// 		label: "Home",
// 		href: "/",
// 		_id: 1,
// 	},
// 	{
// 		label: "About",
// 		href: "/about",
// 		_id: 2,
// 	},
// 	{
// 		label: "Contact",
// 		href: "/contact",
// 		_id: 4,
// 	},
// 	{
// 		label: "Blogs",
// 		href: "/blogs",
// 		_id: 5,
// 	},
// 	{
// 		label: "Dashboard",
// 		href: "/dashboard",
// 		_id: 3,
// 	},
// ];

// const poppins = Poppins({
// 	weight: "400",
// 	subsets: ["latin"],
// });

// const Navbar = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		// <nav className="special-border border-b-2 shadow-lg backdrop-blur absolute top-0 left-0  right-0 z-50 bg-white/80 dark:bg-green-600">
// 		// 	<Sheet>
// 		// 		<div className="max-w-7xl mx-auto px-4">
// 		// 			<div className="flex justify-between h-16">
// 		// 				<div className="flex-shrink-0 flex items-center">
// 		// 					<Link
// 		// 						href="/"
// 		// 						className="text-xl font-bold dark:text-white text-gray-800 hover:text-green-500 dark:hover:text-green-400 transition-colors"
// 		// 					>
// 		// 						MGL_BLOGS
// 		// 					</Link>
// 		// 				</div>

// 		// 				<div className="hidden md:flex items-center space-x-4">
// 		// 					<ModeToggle />
// 		// 					{links.map((link) => (
// 		// 						<Link
// 		// 							key={link._id}
// 		// 							href={link.href}
// 		// 							className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 px-3 py-2 rounded-md transition-colors"
// 		// 						>
// 		// 							{link.label}
// 		// 						</Link>
// 		// 					))}
// 		// 					<SignedOut>
// 		// 						<SignInButton
// 		// 							mode="modal"
// 		// 							signInFallbackRedirectUrl="/api"
// 		// 						/>
// 		// 					</SignedOut>
// 		// 					<SignedIn>
// 		// 						<UserButton />
// 		// 					</SignedIn>
// 		// 				</div>

// 		// 				<div className="md:hidden flex items-center">
// 		// 					<SheetTrigger onClick={toggleMenu}>
// 		// 						<span className="sr-only"></span>
// 		// 						<svg
// 		// 							className="block h-6 w-6 dark:text-white"
// 		// 							xmlns="http://www.w3.org/2000/svg"
// 		// 							fill="none"
// 		// 							viewBox="0 0 24 24"
// 		// 							stroke="currentColor"
// 		// 						>
// 		// 							<path
// 		// 								strokeLinecap="round"
// 		// 								strokeLinejoin="round"
// 		// 								strokeWidth={2}
// 		// 								d="M4 6h16M4 12h16M4 18h16"
// 		// 							/>
// 		// 						</svg>
// 		// 					</SheetTrigger>
// 		// 				</div>
// 		// 			</div>
// 		// 		</div>

// 		// 		<SheetContent>
// 		// 			<SheetHeader>
// 		// 				<SheetTitle className="dark:text-white">
// 		// 					<Logo fontFamily={poppins.style.fontFamily} />
// 		// 				</SheetTitle>
// 		// 				<SheetDescription>
// 		// 					<div className="md:hidden">
// 		// 						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// 		// 							{links.map((link) => (
// 		// 								<Link
// 		// 									key={link._id}
// 		// 									href={link.href}
// 		// 									className="block text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-colors"
// 		// 									onClick={toggleMenu}
// 		// 								>
// 		// 									{link.label}
// 		// 								</Link>
// 		// 							))}
// 		// 							<SignedOut>
// 		// 								<Button onClick={toggleMenu}>
// 		// 									<SignInButton mode="modal" />
// 		// 								</Button>
// 		// 							</SignedOut>
// 		// 							<SignedIn>
// 		// 								<UserButton />
// 		// 							</SignedIn>
// 		// 						</div>
// 		// 					</div>
// 		// 				</SheetDescription>
// 		// 			</SheetHeader>
// 		// 		</SheetContent>
// 		//  	</Sheet>
// 		// </nav>
// 		<></>
// 	);
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

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

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-green-600">
			<div className="bg-green-600 fixed top-0 left-0 w-screen p-8 flex justify-between items-center z-10">
				<div className="menu-logo">
					<Link
						className="text-black uppercase font-medium leading-[100%]"
						href="/"
					>
						MGLBLOGS
					</Link>
				</div>
				<div className="menu-open" onClick={toggleMenu}>
					<p className="text-black uppercase font-medium leading-[100%]">
						MENU
					</p>
				</div>
			</div>
			<div className="fixed top-0 left-0 w-screen p-8 flex justify-between items-center z-10">
				<div className="menu-overlay-bar">
					<div className="menu-logo">
						<Link
							className="text-black uppercase font-medium leading-[100%]"
							href="/"
						>
							MGLBLOGS
						</Link>
					</div>
					<div className="menu-close" onClick={toggleMenu}>
						<p className="text-black uppercase font-medium leading-[100%]">
							CLOSE
						</p>
					</div>
				</div>
				<div className="menu-close-icon">
					<p className="text-black uppercase font-medium leading-[100%]">
						&#x2715;
					</p>
				</div>
				<div className="menu-copy">
					<div className="menu-links">
						{menuLinks.map((link) => (
							<div key={link._id} className="menu-link-item">
								<div className="menu-link-item-holder">
									<Link
										href={link.href}
										className="text-black uppercase font-medium leading-[100%]"
									>
										{link.label}
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className="menu-info">
						<div className="menu-info-col">
							<a
								href="#"
								className="text-black uppercase font-medium leading-[100%]"
							>
								X &#8599;
							</a>
							<a
								href="#"
								className="text-black uppercase font-medium leading-[100%]"
							>
								Instagram &#8599;
							</a>
							<a
								href="#"
								className="text-black uppercase font-medium leading-[100%]"
							>
								LinkdIn &#8599;
							</a>
							<a
								href="#"
								className="text-black uppercase font-medium leading-[100%]"
							>
								Behance &#8599;
							</a>
							<a
								href="#"
								className="text-black uppercase font-medium leading-[100%]"
							>
								Dribble &#8599;
							</a>
						</div>
						<div className="menu-info-col">
							<p className="text-black uppercase font-medium leading-[100%]">
								&copy; 2025 MGLBLOGS. All rights reserved.
							</p>
						</div>
					</div>
					<div className="menu-preview">
						<p className="text-black uppercase font-medium leading-[100%]">
							View Showreel
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
