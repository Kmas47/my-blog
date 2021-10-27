import { useQuery } from "react-query";
import { IBlogPost } from "../../@types/blogPosts";
import { GetBlogPosts } from "../../pages/api/api-request";
import { Card } from "../components/cards/baseCard";
import { CardContent } from "../components/cards/cardContent";

export const BlogPosts = () => {
  const { data, isLoading } = useQuery(
    `BlogPosts/${GetBlogPosts}`,
    GetBlogPosts
  );

  return (
    <div>
      {isLoading ? (
        <h1> loading </h1>
      ) : (
        <div className="flex justify-center flex-wrap bg-gray-100 h-full">
          {data.slice(0, 5).map((blog: IBlogPost) => (
            <div
              className="flex justify-center px-3 py-2 w-full max-w-screen-lg"
              key={blog.id}
            >
              <Card key={blog.id}>
                <CardContent
                  title={blog.title}
                  description={blog.description}
                  createdAt={blog.createdAt}
                  updatedAt={blog?.updatedAt}
                  comments={blog?.comments}
                  authors={blog.authors}
                />
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
