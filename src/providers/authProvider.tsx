import { createContext, ReactNode, useContext, useState } from "react";
import { checkToken, login, logout } from "../services/auth.service.ts";

interface AuthContextType {
  user: string | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  getToken: () => void;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
}

interface AuthContextProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getToken = () => {
    const token = checkToken();

    if (token) {
      console.log("token exists");
      setUser(token);
      setToken(token);
      setLoading(false);
      setError(null);
    } else {
      console.log("no token exists");
      setLoading(false);
      setError("Wrong username or password. Please try again.");
    }
  };

  const signIn = (username: string, password: string) => {
    setLoading(true);

    const token = login(username, password);

    if (token) {
      console.log("token exists");
      setUser(username);
      setToken(token);
      setLoading(false);
      setError(null);
    } else {
      console.log("no token exists");
      setLoading(false);
      setError("Wrong username or password. Please try again.");
    }
  };

  const signOut = () => {
    const successful = logout();

    if (successful) {
      setUser(null);
      setToken(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        getToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
