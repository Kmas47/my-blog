import type { NextPage } from "next";
import { BlogPosts } from "../client /components/blogPosts";
import { Header } from "../client /components/theme/header";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Header />
      <BlogPosts />
    </div>
  );
};

export default Home;
