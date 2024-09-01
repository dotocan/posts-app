import BodyText from "../../components/primitives/typography/BodyText";
import { logMessage } from "../../shared/constants";
import { withLogger } from "../../shared/loggerHoc";
import { MessageProps } from "../../shared/message.props";
import { BlogPostComment } from "../posts/PostItem";

interface Props extends MessageProps {
  comments: BlogPostComment[] | null;
}

export const CommentsPreview = ({ comments }: Props) => {
  if (!comments) return null;
  const count = comments.length;

  return (
    <BodyText
      message={logMessage}
      weight="light"
      color="faded"
    >{`${count} comments`}</BodyText>
  );
};

export default withLogger(CommentsPreview);
