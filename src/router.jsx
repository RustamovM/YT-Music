import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/youtube";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/videos/:videoId",
      element: <Video />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
