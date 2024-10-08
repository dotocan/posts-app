﻿import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { checkToken, login, logout } from "../../services/auth/auth.service.ts";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    setLoading(true);
    const tokenFromStorage = checkToken();

    if (tokenFromStorage) {
      setUser(tokenFromStorage);
      setToken(tokenFromStorage);
      setLoading(false);
      setError(null);
    } else {
      setLoading(false);
    }
  };

  const signIn = (username: string, password: string) => {
    setLoading(true);

    const token = login(username, password);

    if (token) {
      setUser(username);
      setToken(token);
      setLoading(false);
      setError(null);
    } else {
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
