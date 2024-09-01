import { useParams } from "react-router-dom";
import { PostsProvider } from "../features/posts/postsProvider.tsx";
import { PostContainer } from "../features/posts/PostContainer.tsx";

export const PostDetailsPage = () => {
  const { id } = useParams();

  if (!id) return null;

  return (
    <div className="sm:mx-12 md:mx-24 lg:mx-44 xl:mx-60">
      <PostsProvider>
        <PostContainer postId={id} />
      </PostsProvider>
    </div>
  );
};
