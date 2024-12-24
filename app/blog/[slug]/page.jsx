import Blog from "@/components/Blog";
import { fetchBlogData } from "@/lib/actions/blog.action";

const Page = async ({ params }) => {
	const { slug } = await params;

	console.log(slug);

	const blog = await fetchBlogData(slug);

	console.log(blog);

	return <Blog data={blog} />;
};

export default Page;
