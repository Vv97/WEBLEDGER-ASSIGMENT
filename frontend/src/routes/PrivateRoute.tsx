import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

type CardProps = {
  children: React.ReactNode; // Use ReactNode as the type for the children prop
};

export const PrivateRoute: React.FC<CardProps> = ({ children }) => {
  const { Auth } = useContext(AuthContext);

  return !Auth ? <Navigate to={"/"} /> : children;
};
