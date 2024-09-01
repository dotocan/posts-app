import { useEffect, useState } from "react";
import { fetchUserById, User } from "../../services/users.service.ts";

export const usePostAuthor = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const [userError, setUserError] = useState<string | null>(null);

  useEffect(() => {
    setLoadingUser(true);

    const resultUser = await fetchUserById(id);
    if (resultUser) {
      setUser(resultUser);
      setUserError(null);
      setLoadingUser(false);
    } else {
      setUser(null);
      setUserError(
        `There was an issue with fetching this user's info. Please try  again later.`,
      );
      setLoadingUser(false);
    }
  }, []);
};
