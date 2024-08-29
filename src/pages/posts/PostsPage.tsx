import { PostsProvider } from "../../providers/postsProvider.tsx";
import { PostsList } from "./PostsList.tsx";

export const PostsPage = () => {
  return (
    <PostsProvider>
      <PostsList />
    </PostsProvider>
  );
};
