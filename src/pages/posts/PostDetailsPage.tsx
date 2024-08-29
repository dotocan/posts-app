import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePosts } from "../../providers/postsProvider.tsx";

export const PostDetailsPage = () => {
  const { id } = useParams();
  const postsContext = usePosts();

  // TODO: create separate post details context and call this useEffect inside it instead of here?
  useEffect(() => {
    if (id) {
      postsContext?.getPostById(id.toString());
    }
  }, []);

  if (!postsContext || !postsContext.selectedPost) return null;

  return <div>{JSON.stringify(postsContext.selectedPost)}</div>;
};
