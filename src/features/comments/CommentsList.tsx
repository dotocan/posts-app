import { CommentListItem } from "./CommentListItem.tsx";
import { BlogPostComment } from "../posts/PostItem.tsx";

interface Props {
  comments: BlogPostComment[] | null | undefined;
}

export const CommentsList = ({ comments }: Props) => {
  if (!comments) return null;

  
    return comments.map((comment) => {
      return <CommentListItem key={comment.id} comment={comment} />;
    });
  
};
