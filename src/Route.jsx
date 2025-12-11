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
import Login from './pages/LoginPage/Login';
import Signup from "./pages/SignupPage/Signup";

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
                path:"Signup",
                element:<Signup />
            }
        ]
    }
])

export default router
