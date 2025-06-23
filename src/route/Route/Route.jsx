import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Shop from "../../components/Shop/Shop";
import Cart from "../../components/Cart/Cart";
import Login from "../../components/Login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
  {
    path: "/login",
    element : <Login></Login>
  }
]);

export default router;
