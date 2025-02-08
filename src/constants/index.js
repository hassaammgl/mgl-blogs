export const blogNicheCategories = [
    {
        category: "Personal",
        subcategories: [
            {
                name: "Travel",
                options: [
                    "Budget Travel",
                    "Solo Travel",
                    "Luxury Travel",
                    "Adventure Travel",
                    "Family Travel",
                    "Digital Nomading",
                    "Travel Photography",
                ],
            },
            {
                name: "Food",
                options: [
                    "Vegan/Vegetarian Recipes",
                    "Baking",
                    "International Cuisine",
                    "Food Reviews",
                    "Healthy Eating",
                    "Cooking for Beginners",
                    "Food Photography",
                ],
            },
            {
                name: "Lifestyle",
                options: [
                    "Fashion & Beauty",
                    "Fitness & Health",
                    "Personal Development",
                    "Mindfulness & Meditation",
                    "Home Decor",
                    "DIY & Crafts",
                    "Parenting",
                    "Pet Care",
                ],
            },
        ],
    },
    {
        category: "Professional/Niche",
        subcategories: [
            {
                name: "Technology",
                options: [
                    "Tech Reviews",
                    "Software Development",
                    "Cybersecurity",
                    "AI & Machine Learning",
                    "Data Science",
                    "Web Development",
                    "Mobile Apps",
                ],
            },
            {
                name: "Business",
                options: [
                    "Marketing",
                    "Entrepreneurship",
                    "Leadership",
                    "Business Strategy",
                    "Small Business",
                    "Sales",
                    "Customer Service",
                ],
            },
            {
                name: "Finance",
                options: [
                    "Investing",
                    "Trading",
                    "Financial News",
                    "Economic Analysis",
                    "Personal Finance",
                ],
            },
        ],
    },
    {
        category: "Creative",
        subcategories: [
            {
                name: "Photography",
                options: [
                    "Landscape Photography",
                    "Portrait Photography",
                    "Travel Photography",
                    "Wildlife Photography",
                    "Food Photography",
                    "Product Photography",
                ],
            },
            {
                name: "Writing",
                options: [
                    "Creative Writing",
                    "Poetry",
                    "Short Stories",
                    "Novel Writing",
                    "Blogging Tips",
                    "Freelance Writing",
                ],
            },
        ],
    },
    {
        category: "Entertainment",
        subcategories: [
            {
                name: "Anime",
                options: [
                    "Anime Reviews",
                    "Manga Reviews",
                    "Anime News",
                    "Anime Theories",
                    "Top 10 Anime Lists",
                    "Anime vs Manga Comparisons",
                    "Cosplay & Conventions",
                    "Anime Merchandise",
                ],
            },
            {
                name: "Movies & TV",
                options: [
                    "Movie Reviews",
                    "TV Show Reviews",
                    "Film Analysis",
                    "Celebrity News",
                    "Streaming Services",
                ],
            },
            {
                name: "Video Gaming",
                options: [
                    "Game Reviews",
                    "Gaming News",
                    "Esports",
                    "Let's Plays",
                    "Game Development",
                ],
            },
        ],
    },
    {
        category: "Programming",
        subcategories: [
            {
                name: "Web Development",
                options: [
                    "HTML & CSS",
                    "JavaScript",
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Frontend Development",
                    "Backend Development",
                    "Full Stack Development",
                ],
            },
            {
                name: "Mobile Development",
                options: [
                    "React Native",
                    "Flutter",
                    "Android Development",
                    "iOS Development",
                    "Mobile UI/UX",
                ],
            },
            {
                name: "Software Engineering",
                options: [
                    "Data Structures & Algorithms",
                    "System Design",
                    "Software Architecture",
                    "DevOps",
                    "Cloud Computing",
                ],
            },
            {
                name: "Programming Languages",
                options: [
                    "JavaScript",
                    "Python",
                    "Java",
                    "C++",
                    "Ruby",
                    "Swift",
                    "Kotlin",
                ],
            },
            {
                name: "Machine Learning & AI",
                options: [
                    "Deep Learning",
                    "NLP (Natural Language Processing)",
                    "Computer Vision",
                    "AI Tools & Frameworks",
                    "AI Ethics",
                ],
            },
            {
                name: "Cybersecurity",
                options: [
                    "Ethical Hacking",
                    "Penetration Testing",
                    "Security Best Practices",
                    "Network Security",
                    "Cyber Threats & Attacks",
                ],
            },
        ],
    },
];


export const apiRoutes = {
    app: {
        url: "http://localhost:3000",
        method: "GET"
    },
    blogs: {
        get_all: {
            url: (limit) => `${apiRoutes.app.url}/api/blogs?limit=${limit}`,
            method: "GET"
        },
        get_by_id: {
            url: (id) => `${apiRoutes.app.url}/api/blogs/${id}`,
            method: "GET"
        },
        create: {
            url: () => `${apiRoutes.app.url}/api/blogs`,
            method: "POST"
        },
        update: {
            url: (id) => `${apiRoutes.app.url}/api/blogs/${id}`,
            method: "PUT"
        },
        delete: {
            url: (id) => `${apiRoutes.app.url}/api/blogs/${id}`,
            method: "DELETE"
        }
    },
    comments: {
        get_all: {
            url: (blogId) => `${apiRoutes.app.url}/api/blogs/comments/${blogId}`,
            method: "GET"
        },
        create: {
            url: (blogId) => `${apiRoutes.app.url}/api/blogs/comments/${blogId}`,
            method: "POST"
        },
        update: {
            url: (commentId) => `${apiRoutes.app.url}/api/blogs/comments/${commentId}`,
            method: "PUT"
        },
        delete: {
            url: (commentId) => `${apiRoutes.app.url}/api/blogs/comments/${commentId}`,
            method: "DELETE"
        }
    },
    categories: {
        get_all: {
            url: () => `${apiRoutes.app.url}/api/categories`,
            method: "GET"
        },
        create: {
            url: () => `${apiRoutes.app.url}/api/categories`,
            method: "POST"
        }
    },
    tags: {
        get_all: {
            url: () => `${apiRoutes.app.url}/api/tags`,
            method: "GET"
        },
        create: {
            url: () => `${apiRoutes.app.url}/api/tags`,
            method: "POST"
        }
    },
    likes: {
        url: () => `${apiRoutes.app.url}/api/blogs/like`,
        method: "POST"
    },
    fav: {
        url: () => `${apiRoutes.app.url}/api/blogs/fav`,
        method: "POST"
    }
};
