import { useEffect, useState } from "react";
import { fetchPosts, Post } from "../../services/posts.service";
import { PostItem } from "../../components/blocks/PostItem";
import { fetchUsers } from "../../services/users.service.ts";
import { Input } from "../../components/primitives/inputs/Input.tsx";

export interface PostPreview extends Post {
  username: string;
  comments?: string[];
}

export const PostsPage = () => {
  const [posts, setPosts] = useState<PostPreview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultPosts = await fetchPosts();
      const resultUsers = await fetchUsers();

      if (resultPosts instanceof Array) {
        setPosts(
          resultPosts.map((post) => {
            const postUser = resultUsers?.find(
              (user) => user.id === post.userId,
            );

            return {
              ...post,
              username: postUser?.username ?? "-",
            };
          }),
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="md:w-1/2 xs:w-3/4 mx-auto mb-10">
        <Input placeholder="Search" />
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};
