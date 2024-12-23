import Blog from "@/components/shared/Blog";
import { fetchBlogData } from "@/lib/actions/blog.action";

const blogObj = {
	_id: crypto.randomUUID(),
	image: "https://picsum.photos/602/400",
	category: "Development",
	title: "Getting Started with React",
	description: `Learn the fundamentals of React and start building modern web applications. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit, deserunt iusto? Nihil explicabo velit dolorem nisi ex
        doloribus placeat quo, quam quibusdam velit at totam optio,
        pariatur labore itaque molestias!`,
	author: {
		name: "John Doe",
		avatar: "https://picsum.photos/34/34",
		date: "1 week ago",
	},
	stats: {
		views: 1234,
		likes: 56,
		favorites: 23,
	},
};
const Page = async ({ params }) => {
	const { slug } = await params;

	console.log(slug);

	const blog = await fetchBlogData(slug);

	console.log(blog);

	return <Blog data={blog} />;
};

export default Page;
