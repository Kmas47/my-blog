import type { NextPage } from "next";
import { BlogPosts } from "../client /blogPosts/blogPosts";
import { Page } from "../client /components/theme/page";
import { PageLayout } from "../client /components/theme/pageLayout";

const Home: NextPage = () => {
  return (
    <div>
      <Page>
        <PageLayout>
          <BlogPosts />
        </PageLayout>
      </Page>
    </div>
  );
};

export default Home;
