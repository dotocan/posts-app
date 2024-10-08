﻿import { createContext, ReactNode, useContext, useState } from "react";
import { Comment } from "../../services/posts/posts.models";
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
  filteredPosts: BlogPost[] | null;
  loadingPosts: boolean;
  postsError: string | null;
  blogPost: BlogPost | null;
  loadingSelectedPost: boolean;
  selectedPostError: string | null;
  getPostsWithAuthorsAndComments: () => void;
  getPostWithAuthorAndComments: (postId: string) => void;
  filterPostsByUser: (query: string) => void;
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
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[] | null>(null);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  const [loadingPosts, setLoadingPosts] = useState(false);
  const [postsError, setPostsError] = useState<string | null>(null);

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
        const postComments = resultComments?.filter((rc) => rc.postId === post.id);

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
      setFilteredPosts(blogPosts);
      setPostsError(null);
    } else {
      setLoadingPosts(false);
      setFilteredPosts(null);
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

      // Make body text longer for demonstration purposes, since placeholder API returns very little body text
      const mockLongText =
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body +
        resultPost.body;

      const blogPost: BlogPost = {
        id: resultPost.id.toString(),
        title: resultPost.title,
        body: mockLongText,
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

  const filterPostsByUser = (query: string) => {
    if (blogPosts) {
      if (query === "") {
        setFilteredPosts(blogPosts);
      } else {
        const filtered = blogPosts.filter((p) =>
          p.author?.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPosts(filtered);
      }
    } else {
      setFilteredPosts(null);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        blogPosts,
        filteredPosts,
        loadingPosts,
        postsError,
        blogPost,
        loadingSelectedPost,
        selectedPostError,
        getPostsWithAuthorsAndComments,
        getPostWithAuthorAndComments,
        filterPostsByUser,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
