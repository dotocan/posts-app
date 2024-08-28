import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById, Post } from "../../services/posts.service.ts";

export const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPostById(id ?? "");
      setPost(result);
    };

    fetchData();
  }, []);

  return <div>{JSON.stringify(post)}</div>;
};
