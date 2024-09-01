import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PostsProvider, usePosts } from "../features/posts/postsProvider.tsx";
import { FullPost } from "../features/posts/FullPost.tsx";

export const PostDetailsPage = () => {
  const { id } = useParams();
  const postsContext = usePosts();

  useEffect(() => {
    if (id) {
      postsContext?.getPostWithAuthorAndComments(id.toString());
    }
  }, []);

  if (!postsContext || !postsContext.blogPost) return null;

  // TODO: create error component
  if (postsContext.selectedPostError)
    return <div>{postsContext.selectedPostError}</div>;

  return (
    <PostsProvider>
      <FullPost post={postsContext.blogPost} />
    </PostsProvider>
  );
};
