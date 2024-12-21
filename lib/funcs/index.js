// Example usage in client components
const fetchBlogs = async () => {
    // Get all blogs with pagination
    const res = await fetch('/api/blogs?page=1&limit=10');
    const data = await res.json();

    // Get blogs by category
    const categoryRes = await fetch('/api/blogs/category/development?page=1&limit=10');
    const categoryData = await res.json();

    // Get single blog
    const blogRes = await fetch(`/api/blogs/${blogId}`);
    const blog = await blogRes.json();

    // Create new blog
    const createRes = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
    });

    // Update blog
    const updateRes = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
    });

    // Delete blog
    const deleteRes = await fetch(`/api/blogs/${blogId}`, {
        method: 'DELETE'
    });
};
