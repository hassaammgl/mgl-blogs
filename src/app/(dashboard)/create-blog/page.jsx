import Steps from "@/components/pages/createBlog/Steps";
const page = () => {
	return (
		<div className="w-full min-h-screen flex justify-start items-center flex-col bg-black p-4">
			<h1 className="text-4xl text-center mt-10 mb-10 font-extrabold text-white">
				Write your own Blog
			</h1>
			<form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-3xl">
				<Steps />
			</form>
		</div>
	);
};

export default page;
