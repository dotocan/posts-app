import { API_URL, defaultHeaders } from "../../config/api.config";
import { User } from "./users.models";

export const fetchUsers = async (): Promise<User[] | null> => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return (await response.json()) as User[];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return null;
  }
};

export const fetchUserById = async (id: string): Promise<User | null> => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return (await response.json()) as User;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return null;
  }
};
