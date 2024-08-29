import { fetchPostById, fetchPosts, Post } from "../services/posts.service.ts";
import { createContext, ReactNode, useContext, useState } from "react";

interface PostsProviderType {
  posts: Post[] | null;
  loadingPosts: boolean;
  postsError: string | null;
  selectedPost: Post | null;
  loadingSelectedPost: boolean;
  selectedPostError: string | null;
  getPosts: () => void;
  getPostById: (id: string) => void;
}

interface PostsContextProps {
  children: ReactNode;
}

const PostsContext = createContext<PostsProviderType | null>(null);

export const PostsProvider = ({ children }: PostsContextProps) => {
  const [posts, setPosts] = useState<Post[] | null>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [postsError, setPostsError] = useState<string | null>(null);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loadingSelectedPost, setLoadingSelectedPost] = useState(false);
  const [selectedPostError, setSelectedPostError] = useState<string | null>(
    null,
  );

  const getPosts = async () => {
    setLoadingPosts(true);

    const resultPosts = await fetchPosts();
    if (resultPosts instanceof Array && resultPosts.length > 0) {
      setPosts(resultPosts);
      setPostsError(null);
      setLoadingPosts(false);
    } else {
      setPosts(null);
      setPostsError(
        "There was an issue with loading posts. Please try  again later.",
      );
      setLoadingPosts(false);
    }
  };

  const getPostById = async (id: string) => {
    setLoadingSelectedPost(true);

    const resultPost = await fetchPostById(id);
    if (resultPost) {
      setSelectedPost(resultPost);
      setSelectedPostError(null);
      setLoadingSelectedPost(false);
    } else {
      setSelectedPost(null);
      setSelectedPostError(
        "There was an issue with loading this post. Please try  again later.",
      );
      setLoadingSelectedPost(false);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        loadingPosts,
        postsError,
        selectedPost,
        loadingSelectedPost,
        selectedPostError,
        getPosts,
        getPostById,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
