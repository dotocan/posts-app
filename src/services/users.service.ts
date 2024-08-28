import { API_URL, defaultHeaders } from "../config/api.config.ts";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

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

export const getUserById = async (id: string): Promise<User | null> => {
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
