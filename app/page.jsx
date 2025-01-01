import { fetchAllBlogs } from "@/actions/blog.action";
import BlogCards from "@/components/BlogCards";
import Link from "next/link";

export default async function Home() {
	try {
		const blogs = await fetchAllBlogs(3);

		console.log(blogs);
		return (
			<main className="w-full overflow-x-hidden">
				<Hero />
				<Prices />
				<Blogs blogs={blogs.blogs} />
			</main>
		);
	} catch (error) {
		console.error(error);
		return (
			<main className="w-full overflow-x-hidden">
				<Hero />
				<Prices />
				<div>
					<h1 className="text-4xl font-bold text-center text-gray-800">
						An error occurred while fetching blogs
					</h1>
				</div>
			</main>
		);
	}
}

const Hero = () => {
	return (
		<section className="header relative pt-16 flex min-h-[500px] md:min-h-[600px] lg:min-h-[860px]">
			<div className="container mx-auto px-4 flex items-center">
				<div className="w-full lg:w-6/12">
					<div className="pt-8 md:pt-16 lg:pt-32">
						<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-blueGray-600">
							A beautiful extension for TailwindCSS.
						</h2>
						<p className="mt-4 text-base md:text-lg leading-relaxed text-blueGray-500">
							Tailwind Starter Kit is Free and Open Source. It
							does not change or add any CSS to the already one
							from{" "}
							<a
								href="https://tailwindcss.com/?ref=creativetim"
								className="text-blueGray-600"
								target="_blank"
								rel="noreferrer"
							>
								TailwindCSS
							</a>
							. It features multiple HTML elements and it comes
							with dynamic components for ReactJS, Vue and
							Angular.
						</p>
						<div className="mt-8 md:mt-12 flex flex-wrap gap-4">
							<a
								className="w-full sm:w-auto text-white font-bold px-4 md:px-6 py-3 md:py-4 rounded-lg outline-none focus:outline-none bg-gradient-to-r from-pink-500 to-rose-500 uppercase text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-center"
								href="/learning-lab/tailwind-starter-kit/documentation/download"
							>
								Get started
							</a>
							<a
								href="https://github.com/creativetimofficial/tailwind-starter-kit"
								className="w-full sm:w-auto text-white font-bold px-4 md:px-6 py-3 md:py-4 rounded-lg outline-none focus:outline-none bg-gradient-to-r from-gray-700 to-gray-900 uppercase text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-center"
								target="_blank"
								rel="noreferrer"
							>
								Github Star
							</a>
						</div>
					</div>
				</div>
			</div>
			<img
				className="absolute top-0 right-0 pt-16 w-10/12 sm:w-8/12 lg:w-6/12 max-w-2xl opacity-75 md:opacity-100 z-0"
				src="/side.png"
				alt="..."
			/>
		</section>
	);
};

const Prices = () => {
	return (
		<section className="pricing-section bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 md:py-16 px-4">
			<div className="mx-auto max-w-screen-xl">
				<div className="mx-auto max-w-screen-md text-center mb-8 md:mb-12">
					<h2 className="mb-4 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Pricing Plans
					</h2>
					<p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
						Choose the perfect plan for your needs
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					<div className="flex flex-col p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-200">
						<h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
							Basic
						</h3>
						<div className="mb-6">
							<span className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
								$29
							</span>
							<span className="text-gray-500 dark:text-gray-400 ml-2">
								/month
							</span>
						</div>
						<ul className="mb-8 space-y-4">
							<li className="flex items-center text-gray-600 dark:text-gray-300">
								<svg
									className="w-5 h-5 mr-3 text-green-500"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
								</svg>
								Basic Features
							</li>
						</ul>
						<button className="w-full px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold hover:opacity-90 transform hover:-translate-y-1 transition-all duration-200">
							Get Started
						</button>
					</div>

					<div className="relative flex flex-col p-6 md:p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-200">
						<div className="absolute top-4 right-4">
							<span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
								Popular
							</span>
						</div>
						<h3 className="text-xl md:text-2xl font-bold text-white mb-2">
							Pro
						</h3>
						<div className="mb-6">
							<span className="text-4xl md:text-5xl font-extrabold text-white">
								$79
							</span>
							<span className="text-gray-100 ml-2">/month</span>
						</div>
						<ul className="mb-8 space-y-4">
							<li className="flex items-center text-gray-100">
								<svg
									className="w-5 h-5 mr-3 text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
								</svg>
								All Basic Features
							</li>
							<li className="flex items-center text-gray-100">
								<svg
									className="w-5 h-5 mr-3 text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
								</svg>
								Pro Features
							</li>
						</ul>
						<button className="w-full px-4 md:px-6 py-3 md:py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-200">
							Get Started
						</button>
					</div>

					<div className="flex flex-col p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl border-0 :shadow-2xl transform hover:-translate-y-2 transition-all duration-200">
						<h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
							Enterprise
						</h3>
						<div className="mb-6">
							<span className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
								$199
							</span>
							<span className="text-gray-500 dark:text-gray-400 ml-2">
								/month
							</span>
						</div>
						<ul className="mb-8 space-y-4">
							<li className="flex items-center text-gray-600 dark:text-gray-300">
								<svg
									className="w-5 h-5 mr-3 text-green-500"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
								</svg>
								All Pro Features
							</li>
							<li className="flex items-center text-gray-600 dark:text-gray-300">
								<svg
									className="w-5 h-5 mr-3 text-green-500"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
								</svg>
								Enterprise Features
							</li>
						</ul>
						<button className="w-full px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold hover:opacity-90 transform hover:-translate-y-1 transition-all duration-200">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

const Blogs = ({ blogs }) => {
	return (
		<section className="blog-section bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 py-12 md:py-16 px-4">
			<div className="mx-auto max-w-screen-xl">
				<div className="mx-auto max-w-screen-md text-center mb-8 md:mb-12">
					<h2 className="mb-4 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Latest Blog Posts
					</h2>
					<p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
						Discover our latest insights and updates
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mx-auto">
					{!blogs || blogs.length === 0 ? (
						<h1 className="text-3xl md:text-4xl font-extrabold text-gray-600 dark:text-gray-300 text-center w-full">
							No blogs found yet
						</h1>
					) : (
						blogs.map((blog) => (
							<BlogCards key={blog._id} blog={blog} />
						))
					)}
				</div>

				<div className="flex justify-center mt-8">
					<Link href="/blog">
						<span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
							View all posts
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};
