import { AuthorPreview } from "./AuthorPreview.tsx";
import { CommentsPreview } from "../comments/CommentsPreview.tsx";
import { Link } from "react-router-dom";
import { Heading2 } from "../../components/primitives/typography/Heading.tsx";
import { BodyText } from "../../components/primitives/typography/BodyText.tsx";

export interface BlogAuthor {
  id: string;
  name: string;
  info: string;
}

export interface BlogPostComment {
  id: string;
  username: string;
  body: string;
}

export interface BlogPost {
  id: string;
  title: string;
  body: string;
  author: BlogAuthor | null;
  comments: BlogPostComment[] | null;
}

interface Props {
  post: BlogPost;
}

export const PostItem = ({ post }: Props) => {
  return (
    <article className="flex flex-col justify-between p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      <div>
        <div className="flex justify-between items-center mb-5">
          <CommentsPreview comments={post.comments} />
        </div>

        <div>
          <Heading2 weight="bold" className="mb-2">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </Heading2>

          <BodyText color="faded" weight="light" className="mb-5">
            {post.body}
          </BodyText>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <AuthorPreview author={post.author} />
        <div className="inline-flex items-center">
          <BodyText weight="bold" className="hover:underline">
            <Link to={`/posts/${post.id}`}>Read more</Link>
          </BodyText>
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </article>
  );
};
