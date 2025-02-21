import BlogsCategory from "@/components/homepage/BlogsCategory";
import Hero from "@/components/homepage/Hero";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ">
			<Hero />
			<Testimonials />
			<BlogsCategory />
		</main>
	);
}
