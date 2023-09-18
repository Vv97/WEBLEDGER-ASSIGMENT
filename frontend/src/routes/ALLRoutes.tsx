import { Routes, Route, RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Save } from "../pages/Save/Save";
import { PrivateRoute } from "./PrivateRoute";
import { SinglePage } from "../pages/SinglePage/SinglePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/save",
    element: (
      <PrivateRoute>
        <Save />
      </PrivateRoute>
    ),
  },
  {
    path: "/single/:id",
    element: (
      <PrivateRoute>
        <SinglePage />
      </PrivateRoute>
    ),
  },
];

export const AllRoutes = () => {
  return (
    // Render the Route components using map
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
