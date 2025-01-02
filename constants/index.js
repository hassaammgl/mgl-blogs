export const categoryBlog = [
    "Technology",
    "Science",
    "Health",
    "Business",
    "Sports",
    "Education",
    "Travel",
    "Food",
    "React",
    "JavaScript",
    "Node",
    "Express",
    "MongoDB",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring",
    "C++",
    "C#",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Material-UI",
    "Chakra-UI",
    "Ant Design",
    "GraphQL",
    "Apollo",
    "REST API",
    "WebSockets",
    "Socket.IO",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "AWS",
    "Azure",
    "GCP",
    "Firebase",
    "Heroku",
    "Netlify",
    "Vercel",
    "Nginx",
    "Apache",
    "Linux",
    "Ubuntu",
    "CentOS",
    "Debian",
    "Fedora",
    "Arch",
    "Windows",
    "MacOS",
    "iOS",
    "Android",
    "VS Code",
    "Sublime Text",
    "Atom",
    "Vim",
    "Eclipse",
    "IntelliJ",
    "PyCharm",
    "WebStorm",
    "Visual Studio",
    "Postman",
    "Insomnia",
    "Swagger",
    "Jira",
    "Confluence",
    "Trello",
    "Slack",
    "Zoom",
    "Google Meet",
    "Microsoft Teams",
    "Discord",
    "WhatsApp",
    "Telegram",
    "Signal",
    "Facebook",
    "Twitter",
    "LinkedIn",
    "Instagram",
    "Snapchat",
    "TikTok",
    "YouTube",
    "Netflix",
    "Prime Video",
    "Disney+",
    "Hulu",
    "Spotify",
    "Apple Music",
    "YouTube Music",
    "Tidal",
    "SoundCloud",
    "Podcast",
    "Blog",
    "Vlog",
    "Book",
    "Movie",
    "TV Show",
    "Entertainment",
    "Education",
    "Travel",
    "Food",
    "Other",
]

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
            url: (blogId) => `${apiRoutes.app.url}/api/blogs/${blogId}/comments`,
            method: "GET"
        },
        create: {
            url: (blogId) => `${apiRoutes.app.url}/api/blogs/${blogId}/comments`,
            method: "POST"
        },
        update: {
            url: (commentId) => `${apiRoutes.app.url}/api/comments/${commentId}`,
            method: "PUT"
        },
        delete: {
            url: (commentId) => `${apiRoutes.app.url}/api/comments/${commentId}`,
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
        like_blog: {
            url: (id) => `${apiRoutes.app.url}/api/blogs/${id}/like`,
            method: "POST"
        },
        remove_like: {
            url: (id) => `${apiRoutes.app.url}/api/blogs/${id}/like`,
            method: "DELETE"
        }
    }
};
