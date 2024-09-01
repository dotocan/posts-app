import { BodyText } from "../../components/primitives/typography/BodyText";
import { BlogPostComment } from "../posts/PostItem";

interface Props {
  comments: BlogPostComment[] | null;
}

export const CommentsPreview = ({ comments }: Props) => {
  if (!comments) return null;
  const count = comments.length;

  return (
    <BodyText weight="light" color="faded">{`${count} comments`}</BodyText>
  );
};
