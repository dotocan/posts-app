import BodyText from "../../components/primitives/typography/BodyText";
import Heading1 from "../../components/primitives/typography/Heading2";
import Heading2 from "../../components/primitives/typography/Heading1";
import { logMessage } from "../../shared/constants";
import CommentsList from "../comments/CommentsList";
import Author from "../users/Author";
import { BlogPost } from "./PostItem";
import { MessageProps } from "../../shared/message.props";
import { withLogger } from "../../shared/loggerHoc";

interface Props extends MessageProps {
  post: BlogPost | null;
}

export const PostDetails = ({ post }: Props) => {
  if (!post) return null;

  return (
    <div>
      <div className="mx-auto mb-10">
        <Author message={logMessage} author={post.author} />
      </div>

      <Heading1 message={logMessage} className="text-center mt-10 mb-10">
        {post.title}
      </Heading1>

      <BodyText message={logMessage}>{post.body}</BodyText>

      <div className="mt-8 border-gray-300 border-2 rounded-lg py-4 px-8">
        <Heading2 message={logMessage} className="mb-6">
          Comments:
        </Heading2>
        <CommentsList message={logMessage} comments={post.comments} />
      </div>
    </div>
  );
};

export default withLogger(PostDetails);
