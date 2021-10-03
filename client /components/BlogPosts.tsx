import { useQuery } from "react-query";
import { GetBlogPosts } from "../../pages/api/api-request";
import { Card } from "./Card";
import { CardContent } from "./CardContent";

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
        <div className="flex flex-wrap bg-gray-100 h-full">
          {data.map((blog) => (
            <div className="flex justify-center px-3 py-2 w-full md:w-1/2 xl:w-1/3 2xl:w-1/4" key={blog.id}>
              <Card key={blog.id}>
                <CardContent
                  title={blog?.title}
                  description={blog?.description}
                  createdAt={blog?.createdAt}
                  updatedAt={blog?.updatedAt}
                />
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
