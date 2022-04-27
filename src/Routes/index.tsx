import { useRoutes } from "react-router-dom";
import Start from "../Pages/Start";
import Play from "../Pages/Play";

const NotFound = () => {
  return (
    <div>
      <h3> Not Found </h3>
    </div>
  );
};

export const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/play",
      element: <Play />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};
