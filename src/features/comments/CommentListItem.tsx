import { BodyText } from "../../components/primitives/typography/BodyText";
import { BlogPostComment } from "../posts/PostItem";

interface Props {
  comment: BlogPostComment;
}

export const CommentListItem = ({ comment }: Props) => {
  if (!comment) return null;

  return (
    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt={comment.username}
            />
            {comment.username}
          </p>
        </div>
      </div>
      <BodyText color="faded">{comment.body}</BodyText>
    </article>
  );
};
