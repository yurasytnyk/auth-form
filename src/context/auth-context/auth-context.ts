import { createContext } from "react";

interface AuthContextType {
  isAuth: boolean;
  signIn: (email: string, password: string) => void;
  signInWithGoogle: () => void;
  signOut: () => void;
  signUp: (email: string, password: string) => void;
  fetchUser: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
