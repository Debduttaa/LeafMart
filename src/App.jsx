import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Add from "./pages/add/Add";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import "./app.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";



function App() {

  const Layout = ()=>{
    return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[

        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/Orders",
          element:<Orders/>
        },
        
        {
          path:"/mygigs",
          element:<MyGigs/>
        },

        {
          path:"/message/:id",
          element:<Message/>
        },

        {
          path:"/messages",
          element:<Messages/>
        },

        {
          path:"/add",
          element:<Add/>
        }
      ]
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
