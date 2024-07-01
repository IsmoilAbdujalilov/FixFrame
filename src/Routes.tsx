import Layout from "Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const News = lazy(() => import("pages/News"));
const Home = lazy(() => import("pages/Home"));
const Error = lazy(() => import("pages/Error"));
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/Contact"));
const Services = lazy(() => import("pages/Services"));
const Portfolio = lazy(() => import("pages/Portfolio"));

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
      {
        element: <Portfolio />,
        path: "/pages/portfolio",
      },
      {
        element: <News />,
        path: "/pages/news",
      },
      {
        element: <Contact />,
        path: "/pages/contact",
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
