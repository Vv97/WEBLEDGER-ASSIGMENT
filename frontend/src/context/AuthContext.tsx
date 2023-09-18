import { createContext, ReactNode, useState } from "react";

interface AuthInterface {
  Auth: boolean;
  setAuth: (e: boolean) => void;
}

const isAuthenticated: string | null = localStorage.getItem("isAuthenticated");

export const AuthContext = createContext<AuthInterface>({
  Auth: false,
  setAuth: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [Auth, setAuth] = useState<boolean>(
    isAuthenticated ? JSON.parse(isAuthenticated) : false
  );
  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
