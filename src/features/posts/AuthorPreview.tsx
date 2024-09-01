import { BlogAuthor } from "./PostItem";

interface Props {
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
