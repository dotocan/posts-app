import { CommentListItem } from "./CommentListItem.tsx";
import { BlogPostComment } from "../posts/PostItem.tsx";

interface Props {
  comments: BlogPostComment[] | null | undefined;
}

export const CommentsList = ({ comments }: Props) => {
  if (!comments) return null;

  return (
    <div className="p-6 border-blue-400 border-2">
      {comments.map((comment) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
};
