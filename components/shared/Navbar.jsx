"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./Mode";
import { Poppins } from "next/font/google";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

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

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="shadow-lg backdrop-blur fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80">
			<Sheet>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between h-16">
						<div className="flex-shrink-0 flex items-center">
							<Link
								href="/"
								className="text-xl font-bold dark:text-white text-gray-800 hover:text-green-500 dark:hover:text-green-400 transition-colors"
							></Link>
						</div>

						<div className="hidden md:flex items-center space-x-4">
							<ModeToggle />
							{links.map((link) => (
								<Link
									key={link._id}
									href={link.href}
									className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 px-3 py-2 rounded-md transition-colors"
								>
									{link.label}
								</Link>
							))}
							<SignedOut>
								<SignInButton
									mode="modal"
									signInFallbackRedirectUrl="/register"
								/>
							</SignedOut>
							<SignedIn>
								<UserButton />
							</SignedIn>
						</div>

						<div className="md:hidden flex items-center">
							<SheetTrigger onClick={toggleMenu}>
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6 dark:text-white"
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
						<SheetTitle className="dark:text-white">
							<Logo fontFamily={poppins.style.fontFamily} />
						</SheetTitle>
						<SheetDescription>
							<div className="md:hidden">
								<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
									{links.map((link) => (
										<Link
											key={link._id}
											href={link.href}
											className="block text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-colors"
											onClick={toggleMenu}
										>
											{link.label}
										</Link>
									))}
									<SignedOut>
										<Button onClick={toggleMenu}>
											<SignInButton mode="modal" />
										</Button>
									</SignedOut>
									<SignedIn>
										<UserButton />
									</SignedIn>
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
