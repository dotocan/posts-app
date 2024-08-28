import { API_URL, defaultHeaders } from "../config/api.config.ts";

export interface Post {
  userId: number;
  id: number;
  title: string;
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

export const getUserById = async (): Promise<any | null> => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return null;
  }
};

export const getPostById = async (postId: string): Promise<Post | null> => {
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

export const createPost = async () => {};
