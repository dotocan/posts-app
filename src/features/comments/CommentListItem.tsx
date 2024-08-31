import { Comment } from "../../services/posts.service.ts";

interface Props {
  comment: Comment | null;
}

export const CommentListItem = ({ comment }: Props) => {
  if (!comment) return null;

  return (
    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt={comment.name}
            />
            {comment.name}
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
    </article>
  );
};
