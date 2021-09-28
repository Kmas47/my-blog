export const GetBlogPosts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/posts?page=1&limit=10`);
    return response.json();
}