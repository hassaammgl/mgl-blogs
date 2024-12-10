// app/components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./Mode";

const links = [
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
		label: "Blog",
		href: "/blog",
		_id: crypto.randomUUID(),
	},
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className=" shadow-lg backdrop-blur sticky top-0 left-0 w-full ">
			<Sheet>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between h-16">
						{/* Logo */}
						<div className="flex-shrink-0 flex items-center">
							<Link
								href="/"
								className="text-xl font-bold text-gray-800"
							>
								mgl-blogs
							</Link>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-4">
							<ModeToggle />
							{links.map((link) => (
								<Link
									key={link._id}
									href={link.href}
									className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden flex items-center">
							<SheetTrigger onClick={toggleMenu}>
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</SheetTrigger>
						</div>
					</div>
				</div>

				<SheetContent>
					<SheetHeader>
						<SheetTitle>MGL-BLOGS</SheetTitle>
						<SheetDescription>
							<div className="md:hidden">
								<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
									{links.map((link) => (
										<Link
											key={link._id}
											href={link.href}
											className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
											onClick={toggleMenu}
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default Navbar;
