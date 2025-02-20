"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "@/styles/Menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
			<div className="menu-bar">
				<div className="menu-logo">
					<Link className="menu-logo-link" href="/">
						MGLBLOGS
					</Link>
				</div>
				<div className="menu-open" onClick={toggleMenu}>
					<p>MENU</p>
				</div>
			</div>
			<div className="menu-overlay">
				<div className="menu-overlay-bar">
					<div className="menu-logo">
						<Link href="/">MGLBLOGS</Link>
					</div>
					<div className="menu-close" onClick={toggleMenu}>
						<p>CLOSE</p>
					</div>
				</div>
				<div className="menu-copy">
					<div className="menu-links">
						{menuLinks.map((link) => (
							<div key={link._id} className="menu-link-item">
								<div className="menu-link-item-holder">
									<Link
										href={link.href}
										className="menu-link"
									>
										{link.label}
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className="menu-info">
						<div className="menu-info-col">
							<a href="#">X &#8599;</a>
							<a href="#">Instagram &#8599;</a>
							<a href="#">LinkedIn &#8599;</a>
							<a href="#">Behance &#8599;</a>
							<a href="#">Dribble &#8599;</a>
						</div>
						<div className="menu-info-col">
							<p>&copy; 2025 MGLBLOGS. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
