import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/HomePage/Home";
import Catagories from "./pages/CategoriesPage/Catagories";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import WishList from './pages/WishListPage/WishList';
import Cart from './pages/CartPage/Cart';
import Products from './pages/ProductsPage/Products';
import AuthLayout from "./Layouts/AuthLayout";
import Login from './pages/AuthPages/LoginPage/Login';
import Signup from "./pages/AuthPages/SignupPage/Signup";
import SendCode from "./pages/AuthPages/SendCodePage/SendCode";
import ResetPassword from "./pages/AuthPages/ResetPasswordPage/ResetPassword";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                path:"home",
                element:<Home />
            },
            {
                path:"products",
                element:<Products />
            },
            {
                path:"Catagories",
                element:<Catagories />
            },
            {
                path:"about",
                element:<About />
            },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"wishlist",
                element:<WishList />
            },
            {
                path:"cart",
                element:<Cart />
            }
        ]
    },
    {
        path:"/auth/",
        element:<AuthLayout />,
        children:[
            {
                path:"login",
                element:<Login />
            },
            {
                path:"signup",
                element:<Signup />
            },
            {
                path:"sendcode",
                element:<SendCode />
            },
            {
                path:"resetpassword",
                element:<ResetPassword />
            }
        ]
    }
])

export default router
