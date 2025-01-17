import Blog from "@/components/Blog";
import Comments from "@/components/Comments";
import { getBlogData } from "@/actions/blog.action";

const Page = async ({ params }) => {
	const { slug } = await params;

	try {
		const blog = await getBlogData(slug);

		return (
			<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
				<div className="container mx-auto px-4 py-12">
					<article className="max-w-5xl mx-auto mt-12">
						<Blog data={blog} />
						<Comments blogId={blog._id} comments={blog.comment} />
					</article>
				</div>
			</div>
		);
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
