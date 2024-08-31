import { CommentsProvider, useComments } from "./commentsProvider.tsx";
import { useEffect } from "react";
import { CommentsList } from "./CommentsList.tsx";

interface Props {
  postId: string;
}

export const PostComments = ({ postId }: Props) => {
  return (
    <CommentsProvider>
      <PostCommentsContent postId={postId} />
    </CommentsProvider>
  );
};

const PostCommentsContent = ({ postId }: Props) => {
  const commentsContext = useComments();

  useEffect(() => {
    commentsContext?.getComments(postId.toString());
  }, []);

  if (!commentsContext || !commentsContext.comments) return null;

  // TODO: add loading component
  if (commentsContext.loadingComments) return "Loading...";

  // Add error component
  if (commentsContext.commentsError)
    return <div>{commentsContext.commentsError}</div>;

  return <CommentsList comments={commentsContext.comments} />;
};
