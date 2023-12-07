import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/Layout/MainLayout";
import Home from "./src/Pages/Home/Home";
import About from "./src/Pages/About/About";
import Shop from "./src/Pages/Shop/Shop";
import Contact from "./src/Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
