import { CommentListItem } from "./CommentListItem.tsx";
import { Comment } from "../../services/posts.service.ts";

interface Props {
  comments: Comment[];
}

export const CommentsList = ({ comments }: Props) => {
  return (
    <div className="p-6 border-blue-400 border-2">
      {comments.map((comment) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
};
