import Blog from "@/components/Blog";
import { fetchBlogData } from "@/actions/blog.action";

const Page = async ({ params }) => {
	const { slug } = await params;

	console.log(slug);
	try {
		const blog = await fetchBlogData(slug);
		console.log(blog);

		return <Blog data={blog} />;
	} catch (error) {
		return (
			<div className="container mx-10 my-auto">
				<h1 className="text-4xl font-bold text-center text-gray-800">
					Blog not found
				</h1>
			</div>
		);
	}
};

export default Page;
