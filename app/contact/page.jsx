import React from "react";

const Page = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-all duration-300 pt-28">
			<div className="max-w-md mx-auto">
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
					<div className="px-8 py-10">
						<h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8 transition-all duration-300 hover:text-indigo-600 dark:hover:text-indigo-400">
							Contact Us
						</h2>
						<form className="space-y-6">
							<div className="transform transition-all duration-300 hover:scale-[1.01]">
								<label
									htmlFor="name"
									className="block text-sm font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300"
								>
									Full Name
								</label>
								<input
									type="text"
									id="name"
									className="mt-2 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 
                           shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                           dark:bg-gray-700 dark:text-white
                           transition-all duration-300 hover:border-indigo-400"
									placeholder="John Doe"
								/>
							</div>
							<div className="transform transition-all duration-300 hover:scale-[1.01]">
								<label
									htmlFor="email"
									className="block text-sm font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="mt-2 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 
                           shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                           dark:bg-gray-700 dark:text-white
                           transition-all duration-300 hover:border-indigo-400"
									placeholder="john@example.com"
								/>
							</div>
							<div className="transform transition-all duration-300 hover:scale-[1.01]">
								<label
									htmlFor="message"
									className="block text-sm font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300"
								>
									Message
								</label>
								<textarea
									id="message"
									rows={4}
									className="mt-2 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 
                           shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                           dark:bg-gray-700 dark:text-white
                           transition-all duration-300 hover:border-indigo-400"
									placeholder="Your message here..."
								/>
							</div>
							<div>
								<button
									type="submit"
									className="w-full flex justify-center py-3 px-6 border-2 border-transparent 
                           rounded-xl shadow-lg text-sm font-bold text-white
                           bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 
                           dark:from-indigo-500 dark:to-indigo-600 dark:hover:from-indigo-600 dark:hover:to-indigo-700
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                           transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
