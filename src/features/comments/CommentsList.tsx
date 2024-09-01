import CommentListItem from "./CommentListItem.tsx";
import { BlogPostComment } from "../posts/PostItem.tsx";
import { logMessage } from "../../shared/constants.ts";
import { MessageProps } from "../../shared/message.props.ts";
import { withLogger } from "../../shared/loggerHoc.tsx";

interface Props extends MessageProps {
  comments: BlogPostComment[] | null | undefined;
}

export const CommentsList = ({ comments }: Props) => {
  if (!comments) return null;

  return comments.map((comment) => {
    return (
      <CommentListItem
        message={logMessage}
        key={comment.id}
        comment={comment}
      />
    );
  });
};

export default withLogger(CommentsList);
