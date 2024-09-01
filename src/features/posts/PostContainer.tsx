import { useEffect } from "react";
import { usePosts } from "./postsProvider";
import PostDetails from "./PostDetails";
import { MessageProps } from "../../shared/message.props";
import { withLogger } from "../../shared/loggerHoc";
import { logMessage } from "../../shared/constants";

interface Props extends MessageProps {
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

  return <PostDetails message={logMessage} post={postsContext.blogPost} />;
};

export default withLogger(PostContainer);
