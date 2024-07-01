import Layout from "Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const Error = lazy(() => import("pages/Error"));
const About = lazy(() => import("pages/About"));
const Services = lazy(() => import("pages/Services"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <About />,
        path: "/pages/about",
      },
      {
        element: <Services />,
        path: "/pages/services",
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
