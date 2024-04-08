import { createBrowserRouter } from "react-router-dom";
import ClientSideLayout from "../layout/ClientSideLayout";
import Home from "../page/Home";
import Shop from "../page/Shop";
import Product from "../page/Product";
import AboutUs from "../page/AboutUs";
import Blog from "../page/Blog";
import ContactUs from "../page/ContactUs";

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
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default route;
