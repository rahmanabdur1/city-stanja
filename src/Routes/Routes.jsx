import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Cart from "../Components/Cart/Cart";
import SignIn from "../Components/SignIn/SignIn";
import WishLists from "../Components/WishLists/WishLists";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/signIn',
                element:<SignIn/>
            },
            {
                path:'/wishlist',
                element:<WishLists/>
            }
        ]
    }
])