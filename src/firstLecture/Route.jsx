import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginLayout from "./layouts/LoginLayout";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
{
    path: "/",
    element:<MainLayout />,
    children: [
     {
        path: "/home",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
},
{
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: "",
        element: <Login />
      }
    ]
}

]);

export default router