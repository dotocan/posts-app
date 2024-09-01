import { useEffect } from "react";
import { usePosts } from "./postsProvider";
import { PostDetails } from "./PostDetails";

interface Props {
  postId: string;
}

export const PostContainer = ({ postId }: Props) => {
  const postsContext = usePosts();

  useEffect(() => {
    postsContext?.getPostWithAuthorAndComments(postId.toString());
  }, []);

  if (!postsContext) return null;

  // TODO: create error component
  if (postsContext.selectedPostError)
    return <div>{postsContext.selectedPostError}</div>;

  if (postsContext.loadingSelectedPost) return <div>Loading...</div>;

  return <PostDetails post={postsContext.blogPost} />;
};
