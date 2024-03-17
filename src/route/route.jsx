import { createBrowserRouter } from "react-router-dom";
import ClientSideLayout from "../layout/ClientSideLayout";
import Home from "../page/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <ClientSideLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <h1>Shop Page</h1>,
      },
      {
        path: "/about-us",
        element: <h1>About us Page</h1>,
      },
      {
        path: "/blog",
        element: <h1>Blog Page</h1>,
      },
      {
        path: "/contact-us",
        element: <h1>Contact us Page</h1>,
      },
    ],
  },
]);

export default route;
