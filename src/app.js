import React from "react";
import {createBrowserRouter, RouterProvider,useRouteError} from "react-router-dom";
import {Outlet} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer.js";
//import {useState, useEffect} from "react";
// import { FaSearch } from "react-icons/fa";
import Header from "./components/Header.js";
import PageBody from "./components/PageBody.js";
import ErrorPage from "./components/ErrorPage.js";
import AboutUs from "./components/AboutUs.js";

const Root = ReactDOM.createRoot(document.getElementById("root"));

// const err = useRouteError();
// if(err){
    // Root.render(<ErrorPage err = {err}/>
//     );
    
// }

const Page = ()=>{
    return (
      <div className="page">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Page />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<PageBody />
            },
            {
                path:"/about",
                element:<AboutUs />
            },
        ]
    }
    // {
    //     path:"/about",
    //     element:<AboutUs />,
    //     // errorElement:<ErrorPage />

    // }
]);

// Root.render(<h1>WORKING</h1>);
Root.render(<RouterProvider router={appRouter} />);