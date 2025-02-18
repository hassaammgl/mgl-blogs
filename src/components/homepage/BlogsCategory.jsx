import React from "react";
import Marque from "./Marque";

const BlogsCategory = () => {
	return (
		<section className="w-full h-screen bg-green-600">
			BlogsCategory
			<Marque
				items={[
					"React",
					"Next.js",
					"GSAP",
					"Framer Motion",
					"Tailwind CSS",
				]}
			/>
		</section>
	);
};

export default BlogsCategory;
