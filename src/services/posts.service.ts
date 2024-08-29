import { API_URL, defaultHeaders } from "../config/api.config.ts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const fetchPosts = async (): Promise<Post[] | null> => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return (await response.json()) as Post[];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return null;
  }
};

export const fetchPostById = async (postId: string): Promise<Post | null> => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return (await response.json()) as Post;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return null;
  }
};

export const fetchPostComments = async (
  postId: string,
): Promise<Comment[] | null> => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return (await response.json()) as Comment[];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return null;
  }
};
