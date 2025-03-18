import BlogsCategory from "@/components/pages/homepage/BlogsCategory";
import BlogsScroll from "@/components/pages/homepage/BlogsScroll";
import Hero from "@/components/pages/homepage/Hero";
import Testimonials from "@/components/pages/homepage/Testimonials";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ">
			<Hero />
			<BlogsCategory />
			<Testimonials />
			<BlogsScroll />
		</main>
	);
}
