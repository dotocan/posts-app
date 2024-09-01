import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../../services/users/users.models";
import { fetchUserById } from "../../services/users/users.service";

interface UsersProviderType {
  user: User | null;
  loadingUser: boolean;
  userError: string | null;

  getUserById: (id: string) => void;
}

interface UsersContextProps {
  children: ReactNode;
}

const UsersContext = createContext<UsersProviderType | null>(null);

export const UsersProvider = ({ children }: UsersContextProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const [userError, setUserError] = useState<string | null>(null);

  const getUserById = async (id: string) => {
    setLoadingUser(true);

    const resultUser = await fetchUserById(id);
    if (resultUser) {
      setUser(resultUser);
      setUserError(null);
      setLoadingUser(false);
    } else {
      setUser(null);
      setUserError(
        `There was an issue with fetching this user's info. Please try  again later.`
      );
      setLoadingUser(false);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        user,
        loadingUser,
        userError,
        getUserById,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
