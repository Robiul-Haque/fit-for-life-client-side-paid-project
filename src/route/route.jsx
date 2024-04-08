import { createBrowserRouter } from "react-router-dom";
import ClientSideLayout from "../layout/ClientSideLayout";
import Home from "../page/Home";
import Shop from "../page/Shop";
import Product from "../page/Product";
import { AboutUs } from "../page/AboutUs";

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
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        loader: ({ params }) =>
          fetch(
            `https://fit-for-life-paid-project.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <h1>Blog page</h1>,
      },
      {
        path: "/contact-us",
        element: <h1>Contact us Page</h1>,
      },
    ],
  },
]);

export default route;
