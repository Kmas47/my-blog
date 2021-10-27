export const GetBlogPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/posts`
  );
  return response.json();
};
