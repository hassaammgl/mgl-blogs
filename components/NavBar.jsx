// app/components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white shadow-lg">
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
						<Link
							href="/"
							className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
						>
							About
						</Link>
						<Link
							href="/contact"
							className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
						>
							Contact
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
						>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
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
							) : (
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							href="/"
							className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
							onClick={toggleMenu}
						>
							Home
						</Link>
						<Link
							href="/about"
							className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
							onClick={toggleMenu}
						>
							About
						</Link>
						<Link
							href="/contact"
							className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
							onClick={toggleMenu}
						>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
