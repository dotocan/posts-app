import { withLogger } from "../../shared/loggerHoc";
import { MessageProps } from "../../shared/message.props";
import { BlogAuthor } from "../posts/PostItem";

interface Props extends MessageProps {
  author: BlogAuthor | null;
}

export const AuthorPreview = ({ author }: Props) => {
  if (!author) return null;

  return (
    <div className="flex items-center space-x-4">
      <span>By:</span>
      <span className="font-medium dark:text-white">{author.name}</span>
    </div>
  );
};

export default withLogger(AuthorPreview);
