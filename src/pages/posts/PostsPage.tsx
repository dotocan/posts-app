import { PostsProvider } from "../../features/posts/postsProvider.tsx";
import { PostsList } from "../../features/posts/PostsList.tsx";

export const PostsPage = () => {
  return (
    <PostsProvider>
      <PostsList />
    </PostsProvider>
  );
};
