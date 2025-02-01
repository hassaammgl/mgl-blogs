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
            {
                name: "Personal Finance",
                options: [
                    "Budgeting & Saving",
                    "Investing",
                    "Debt Reduction",
                    "Side Hustles & Making Money Online",
                    "Real Estate",
                    "Retirement Planning",
                ],
            },
            {
                name: "Hobbies",
                options: [
                    "Gaming",
                    "Music",
                    "Books & Literature",
                    "Movies & TV",
                    "Photography",
                    "Art",
                    "Collecting",
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
                name: "Education",
                options: [
                    "Teaching Resources",
                    "Homeschooling",
                    "Higher Education",
                    "Online Learning",
                    "Language Learning",
                    "Career Advice",
                ],
            },
            {
                name: "Health & Wellness",
                options: [
                    "Medical Advice (with proper credentials)",
                    "Mental Health",
                    "Nutrition",
                    "Fitness",
                    "Yoga & Pilates",
                    "Alternative Medicine",
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
                name: "Art",
                options: [
                    "Painting",
                    "Drawing",
                    "Sculpture",
                    "Digital Art",
                    "Graphic Design",
                    "Art History",
                    "Artist Interviews",
                ],
            },
            {
                name: "Music",
                options: [
                    "Music Reviews",
                    "Artist Profiles",
                    "Music News",
                    "Songwriting",
                    "Music Production",
                    "Music Theory",
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
        category: "Other",
        subcategories: [
            {
                name: "Environmentalism",
                options: ["Sustainability", "Climate Change", "Conservation", "Green Living"],
            },
            {
                name: "Social Justice",
                options: ["Feminism", "LGBTQ+ Issues", "Racial Equality", "Human Rights"],
            },
            {
                name: "Pets",
                options: ["Dog Training", "Cat Care", "Exotic Pets", "Pet Nutrition", "Pet Photography"],
            },
            {
                name: "DIY & Crafts",
                options: ["Knitting", "Crocheting", "Sewing", "Woodworking", "Jewelry Making", "Upcycling"],
            },
            {
                name: "Gardening",
                options: ["Vegetable Gardening", "Flower Gardening", "Indoor Plants", "Organic Gardening"],
            },
            {
                name: "Travel",
                options: [
                    "Solo Travel",
                    "Budget Travel",
                    "Luxury Travel",
                    "Adventure Travel",
                    "Family Travel",
                    "Digital Nomading",
                    "Travel Photography",
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
