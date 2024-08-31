import { Input } from "../../components/primitives/inputs/Input.tsx";
import { PostItem } from "../../components/blocks/PostItem.tsx";
import { useEffect } from "react";
import { usePosts } from "./postsProvider.tsx";

export const PostsList = () => {
  const postsContext = usePosts();

  // TODO: run this inside posts context?
  useEffect(() => {
    postsContext?.getPosts();
  }, []);

  // TODO: check how to set ErrorBoundary
  if (!postsContext || !postsContext.posts) return null;

  return (
    <div>
      <div className="md:w-1/2 xs:w-3/4 mx-auto mb-10">
        <Input placeholder="Search" />
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {postsContext.posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};
