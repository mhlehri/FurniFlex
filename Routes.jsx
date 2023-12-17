import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/Layout/MainLayout";
import Home from "./src/Pages/Home/Home";
import Shop from "./src/Pages/Shop/Shop";
import Contact from "./src/Pages/Contact/Contact";
import ProductDetails from "./src/Pages/Shop/Details/ProductDetails";
import Cart from "./src/Pages/Cart/Cart";
import Checkout from "./src/Pages/Checkout/Checkout";
import Blog from "./src/Pages/Blog/Blog";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/details",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
