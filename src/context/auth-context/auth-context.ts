import { createContext } from "react";

interface AuthContextType {
  isAuth: boolean;
  signIn: () => void;
  signOut: () => void;
  fetchUser: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
