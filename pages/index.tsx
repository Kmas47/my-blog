import type { NextPage } from "next";
import { BlogPosts } from "../client /components/blogPosts";
import { Footer } from "../client /components/theme/footer";
import { Header } from "../client /components/theme/header";
import { PageLayout } from "../client /components/theme/pageLayout";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <PageLayout>
        <BlogPosts />
      </PageLayout>
      <Footer />
    </div>
  );
};

export default Home;
