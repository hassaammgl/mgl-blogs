import UpdateBlog from "@/components/UpdateBlog";
import { getBlogData } from "@/actions/blog.action";

export default async function Page({ params }) {
	const { _id } = await params;

	console.log(_id);

	const blog = await getBlogData(_id);

	console.log(blog);
	if (!blog) {
		return (
			<div className="container mx-auto mt-12 p-8">
				<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
					Blog not found
				</h1>
			</div>
		);
	}

	return <UpdateBlog blog={blog} />;
}
