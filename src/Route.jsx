import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/HomePage/Home";
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
import ProductDetails from './pages/ProductDetailsPage/ProductDetails';
import ProtectedRouter from "./ProtectedRouter/ProtectedRouter";
import Profile from "./pages/ProfilePage/Profile";
import Checkout from './pages/CheckOutPage/Checkout';
import ProfileInfo from "./pages/ProfilePage/ProfileInfo";
import ProfileOrders from "./pages/ProfilePage/ProfileOrders";
import ProfileSettings from "./pages/ProfilePage/ProfileSettings";
import ProductsOfCategory from "./pages/ProductsOfCategoryPage/ProductsOfCategory.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                path:"",
                element:<Home />
            },
            {
                path:"home",
                element:<Home />
            },
            {
                path:"products",
                element:<Products />
            },
            {
                path:"productDetails/:id",
                element:<ProductDetails />
            },
            {
                path:"productsOfCategory/:id/:name",
                element:<ProductsOfCategory />
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
                element:
                <ProtectedRouter>
                    <WishList />
                </ProtectedRouter>
            },
            {
                path:"cart",
                element:
                <ProtectedRouter>
                    <Cart />
                </ProtectedRouter>
            },
            {
                path:"checkout",
                element:
                <ProtectedRouter>
                    <Checkout />
                </ProtectedRouter>
            },
            {
                path:"profile/",
                element:
                <ProtectedRouter>
                    <Profile />
                </ProtectedRouter>,
                children:[
                    {
                        // path:"",
                        index:true,
                        element:<ProfileInfo />
                    },
                    {
                        path:"profileOrders",
                        element:<ProfileOrders />
                    },
                    {
                        path:"profileSettings",
                        element:<ProfileSettings />
                    },
                ]
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
    },
    {
        path: "*",
        element: <Navigate to="/home" />
    }
])

export default router
