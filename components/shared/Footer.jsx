import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-4 mt-8 transition-colors duration-200">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
				<div className="footer-section">
					<h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
						About Blog
					</h4>
					<p className="text-gray-600 dark:text-gray-400">
						A place for sharing thoughts, ideas, and stories.
					</p>
				</div>

				<div className="footer-section">
					<h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
						Quick Links
					</h4>
					<ul className="space-y-2">
						<li>
							<a
								href="/"
								className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/blog"
								className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
							>
								Blog
							</a>
						</li>
						<li>
							<a
								href="/about"
								className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
						Connect
					</h4>
					<div className="flex gap-4 md:gap-4">
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
						>
							Twitter
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
						>
							Facebook
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
						>
							Instagram
						</a>
					</div>
				</div>
			</div>

			<div className="text-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
				<p className="text-gray-600 dark:text-gray-400">
					&copy; {currentYear} Your Blog Name. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
