import BlogsCategory from "@/components/pages/homepage/BlogsCategory";
import Hero from "@/components/pages/homepage/Hero";
import Testimonials from "@/components/pages/homepage/Testimonials";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ">
			<Hero />
			<BlogsCategory />
			<Testimonials />
		</main>
	);
}
