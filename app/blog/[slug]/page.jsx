const blogObj = {
	id: crypto.randomUUID(),
	image: "https://picsum.photos/602/400",
	category: "Development",
	title: "Getting Started with React",
	description:
		"Learn the fundamentals of React and start building modern web applications.",
	author: {
		name: "John Doe",
		avatar: "https://picsum.photos/34/34",
		date: "1 week ago",
	},
};

export default function page({ params }) {
	return <div>blog</div>;
}

// Modify this code to adhere to the following statement: use the blog object and make the blog page and also make it responsive for all screens and themes
// ```jsx
// const blogObj = {
// 	id: crypto.randomUUID(),
// 	image: "https://picsum.photos/602/400",
// 	category: "Development",
// 	title: "Getting Started with React",
// 	description:
// 		"Learn the fundamentals of React and start building modern web applications.",
// 	author: {
// 		name: "John Doe",
// 		avatar: "https://picsum.photos/34/34",
// 		date: "1 week ago",
// 	},
// };

// export default function page({ params }) {
// 	return <div>blog</div>;
// }

// ```
