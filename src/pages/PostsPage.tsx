import { PostsList } from "../features/posts/PostsList";
import { PostsProvider } from "../features/posts/postsProvider";

export const PostsPage = () => {
  return (
    <PostsProvider>
      <PostsList />
    </PostsProvider>
  );
};
