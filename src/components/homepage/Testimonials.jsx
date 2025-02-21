import React from "react";
import { testimonials } from "@/constants";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Testimonials = () => {
	return (
		<div className="min-h-screen w-screen flex flex-col items-center justify-center px-4 bg-black">
			<h1 className="text-4xl text-center mt-10">Testimonials</h1>
			<AnimatedTestimonials testimonials={testimonials} autoplay={true} />
		</div>
	);
};

export default Testimonials;
