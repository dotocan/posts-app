import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Post } from "../../services/posts.service.ts";
import { getUserById, User } from "../../services/users.service.ts";
import { PostComments } from "../../features/comments/PostComments.tsx";

interface Props {
  post: Post;
}

export const PostItem = ({ post }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userResult = await getUserById(post.userId.toString());
      setUser(userResult);
    };

    fetchData();
  }, []);

  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link to={`/posts/${post.id}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.body}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span className="text-gray-800 font-light">Author: </span>
            {user?.username}
          </p>
        </div>
      </div>

      <PostComments postId={post.id.toString()} />
    </article>
  );
};
