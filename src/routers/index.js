import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import MyShare from "../pages/MyShare";
import Recommend from "../pages/Recommend";
import LogIn from "../component/LogIn";
import Index from "../component/Index";
import EditUp from "../pages/EditUp";
import ThreeD from "../pages/ThreeD";




export const routers = [
    {
        path: '/',
        element: <Navigate to='/index/home'/>
    },
    {
        path: '/login',
        element: <LogIn/>
    },
    {
        path: 'threeD',
        element: <ThreeD/>
    },      
    {
        path: '/index',
        element: <Index/>,
        children: [
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'share',
                element: <MyShare/>
            },
            {
                path: 'recommend',
                element: <Recommend/>
            },
            {
                path: 'edit',
                element: <EditUp/>
            }
        ]
    }
    
];