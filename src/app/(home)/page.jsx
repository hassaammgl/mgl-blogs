import BlogsCategory from "@/components/homepage/BlogsCategory";
import Hero from "@/components/homepage/Hero";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ">
			<Hero />
			<BlogsCategory />
		</main>
	);
}
