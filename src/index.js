import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Componants/Profile";
import styles from "./index.css";
import About from "./Componants/About";
import RestauntDetails from "./Componants/RestauntDetails";
import Navbar from "./Componants/Navbar";
import Body from "./Componants/Body";
import Footer from "./Componants/Footer";
import Error from "./Componants/Error";
import Contact from "./Componants/Contact";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path:"profile",
            element: <Profile/>,
          }
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestauntDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
