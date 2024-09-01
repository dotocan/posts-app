import { BodyText } from "../../components/primitives/typography/BodyText";
import { Heading1, Heading2 } from "../../components/primitives/typography/Heading";
import { CommentsList } from "../comments/CommentsList";
import { Author } from "../users/Author";
import { BlogPost } from "./PostItem";

interface Props {
  post: BlogPost | null;
}

export const PostDetails = ({ post }: Props) => {
  if (!post) return null;

  return (
    <div>
      <div className="mx-auto mb-10">
        <Author author={post.author} />
      </div>

      <Heading1 className="text-center mt-10 mb-10">{post.title}</Heading1>

      <BodyText>{post.body}</BodyText>

      <div className="mt-8 border-gray-300 border-2 rounded-lg py-4 px-8">
        <Heading2 className="mb-6">Comments:</Heading2>
        <CommentsList comments={post.comments} />
      </div>
    </div>
  );
};
