import { createContext, ReactNode, useContext, useState } from "react";
import { Comment, Post } from "../../services/posts/posts.models";
import {
  fetchPosts,
  fetchPostById,
  fetchComments,
  fetchPostComments,
} from "../../services/posts/posts.service";
import { fetchUserById, fetchUsers } from "../../services/users/users.service";
import { BlogAuthor, BlogPost, BlogPostComment } from "./PostItem";
import { User } from "../../services/users/users.models";

interface PostsProviderType {
  blogPosts: BlogPost[] | null;
  loadingPosts: boolean;
  postsError: string | null;
  blogPost: BlogPost | null;
  loadingSelectedPost: boolean;
  selectedPostError: string | null;
  getPostsWithAuthorsAndComments: () => void;
  getPostWithAuthorAndComments: (postId: string) => void;
}

interface PostsContextProps {
  children: ReactNode;
}

const PostsContext = createContext<PostsProviderType | null>(null);

const mapCommentsIntoBlogPostComments = (
  comments: Comment[] | null | undefined
): BlogPostComment[] | null => {
  if (!comments) return null;

  return comments.map((c) => ({
    id: c.id.toString(),
    body: c.body,
    username: c.email,
  }));
};

const mapUserIntoBlogAuthor = (
  user: User | null | undefined
): BlogAuthor | null => {
  if (!user) return null;

  return {
    id: user?.id.toString() ?? "-",
    name: user?.name ?? "-",
    info: user?.company.name ?? "-",
  };
};

export const PostsProvider = ({ children }: PostsContextProps) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | null>(null);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  const [posts, setPosts] = useState<Post[] | null>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [postsError, setPostsError] = useState<string | null>(null);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loadingSelectedPost, setLoadingSelectedPost] = useState(false);
  const [selectedPostError, setSelectedPostError] = useState<string | null>(
    null
  );

  const getPostsWithAuthorsAndComments = async () => {
    setLoadingPosts(true);

    let blogPosts: BlogPost[] | null = null;

    // This could be done in Promise.all, but if for some reason fetching users or comments fails,
    // we still want to be able to display posts.
    // In a more ideal scenario, API would already give us posts with author info.
    const resultPosts = await fetchPosts();
    const resultUsers = await fetchUsers();
    const resultComments = await fetchComments();

    if (resultPosts) {
      blogPosts = resultPosts.map((post) => {
        const postUser = resultUsers?.find((u) => u.id === post.userId);
        const postComments = resultComments?.filter((rc) => rc.id === post.id);

        return {
          id: post.id.toString(),
          title: post.title,
          body: post.body,
          author: mapUserIntoBlogAuthor(postUser),
          comments: mapCommentsIntoBlogPostComments(postComments),
        };
      });

      setLoadingPosts(false);
      setBlogPosts(blogPosts);
      setPostsError(null);
    } else {
      setLoadingPosts(false);
      setBlogPosts(null);
      setPostsError("Error fetching posts");
    }
  };

  const getPostWithAuthorAndComments = async (postId: string) => {
    setLoadingSelectedPost(true);

    // This could be done in Promise.all, but if for some reason fetching users or comments fails,
    // we still want to be able to display posts.
    // In a more ideal scenario, API would already give us posts with author info.
    const resultPost = await fetchPostById(postId);

    if (resultPost) {
      const postUser = await fetchUserById(resultPost.userId.toString());
      const postComments = await fetchPostComments(postId);

      const blogPost: BlogPost = {
        id: resultPost.id.toString(),
        title: resultPost.title,
        body: resultPost.body,
        author: mapUserIntoBlogAuthor(postUser),
        comments: mapCommentsIntoBlogPostComments(postComments),
      };

      setLoadingSelectedPost(false);
      setBlogPost(blogPost);
      setSelectedPostError(null);
    } else {
      setLoadingSelectedPost(false);
      setBlogPost(null);
      setSelectedPostError("Error fetching post");
    }
  };

  return (
    <PostsContext.Provider
      value={{
        blogPosts,
        loadingPosts,
        postsError,
        blogPost,
        loadingSelectedPost,
        selectedPostError,
        getPostsWithAuthorsAndComments,
        getPostWithAuthorAndComments,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
