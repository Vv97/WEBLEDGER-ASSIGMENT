import { createContext, ReactNode, useState } from "react";
import { showLoginInterface } from "../types/user.types";

export const ShowLoginContext = createContext<showLoginInterface>({
  showLogin: false,
  setShowLogin: () => {},
});

export const ShowLoginContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <ShowLoginContext.Provider value={{ showLogin, setShowLogin }}>
      {children}
    </ShowLoginContext.Provider>
  );
};
