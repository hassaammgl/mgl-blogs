import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const Charts = ({ blogs }) => {
	return (
		<div className="mt-20 w-full overflow-auto">
			<h2 className="text-2xl pl-10 mb-5 font-bold">Dashboard</h2>
			<hr />
			<div className="p-5">
				<h3 className="text-lg font-semibold mb-4">Blog Views</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={blogs}>
						<XAxis dataKey="slug" />
						<YAxis />
						<Tooltip dataKey="slug" />
						<Legend />
						<Bar dataKey="viewCount" fill="#8d8" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="p-5">
				<h3 className="text-lg font-semibold mb-4">Blog Likes</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={blogs}>
						<XAxis dataKey="likes" />
						<YAxis />
						<Tooltip dataKey="likes" />
						<Legend />
						<Bar dataKey="likes" fill="pink" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="p-5">
				<h3 className="text-lg font-semibold mb-4">Blog Comments</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={blogs}>
						<XAxis dataKey="comment" />
						<YAxis />
						<Tooltip dataKey="comment" />
						<Legend />
						<Bar dataKey="comment" fill="skyblue" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="p-5">
				<h3 className="text-lg font-semibold mb-4">Blog Favourites</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={blogs}>
						<XAxis dataKey="favorites" />
						<YAxis />
						<Tooltip dataKey="favorites" />
						<Legend />
						<Bar dataKey="favorites" fill="yellow" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default Charts;
