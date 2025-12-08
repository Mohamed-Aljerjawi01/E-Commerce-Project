import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/HomePage/HomeComponents/Home";
import Catagories from "./pages/CategoriesPage/CatagoriesComponents/Catagories";
import About from "./pages/AboutPage/AboutComponents/About";
import LoginLayout from "./Layouts/LoginLayout";
import Login from './pages/LoginPage/LoginComponents/Login';
import Contact from "./pages/ContactPage/ContactComponents/Contact";
import WishList from './pages/WishListPage/WishListComponents/WishList';
import Cart from './pages/CartPage/CartComponents/Cart';
import Products from './pages/ProductsPage/ProductsComponents/Products';

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/products",
                element:<Products />
            },
            {
                path:"/Catagories",
                element:<Catagories />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/wishlist",
                element:<WishList />
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ]
    },
    {
        path:"/login",
        element:<LoginLayout />,
        children:[
            {
                path:"",
                element:<Login />
            }
        ]
    }
])

export default router
