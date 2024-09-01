import { createContext, ReactNode, useContext, useState } from "react";
import { fetchPostComments } from "../../services/posts/posts.service";
import { Comment } from "../../services/posts/posts.models";

interface CommentsProviderType {
  comments: Comment[] | null;
  loadingComments: boolean;
  commentsError: string | null;
  getComments: (postId: string) => void;
}

interface PostsContextProps {
  children: ReactNode;
}

const CommentsContext = createContext<CommentsProviderType | null>(null);

export const CommentsProvider = ({ children }: PostsContextProps) => {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentsError, setCommentsError] = useState<string | null>(null);

  const getComments = async (postId: string) => {
    setLoadingComments(true);

    const resultComments = await fetchPostComments(postId);
    if (resultComments instanceof Array) {
      setComments(resultComments);
      setCommentsError(null);
      setLoadingComments(false);
    } else {
      setComments(null);
      setCommentsError(
        "There was an issue with loading posts. Please try  again later."
      );
      setLoadingComments(false);
    }
  };

  return (
    <CommentsContext.Provider
      value={{ comments, loadingComments, commentsError, getComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
