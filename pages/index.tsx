import type { NextPage } from "next";
import { BlogPosts } from "../client /components/blogPosts";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <h1>Welcome to my amazing blog</h1>
        <BlogPosts />
    </div>
  );
};

export default Home;
