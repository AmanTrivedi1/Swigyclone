import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Componants/Profile";
import styles from "./index.css";
// import About from "./Componants/About";
import RestauntDetails from "./Componants/RestauntDetails";
import Navbar from "./Componants/Navbar";
import Body from "./Componants/Body";
import Footer from "./Componants/Footer";
import Error from "./Componants/Error";
import Contact from "./Componants/Contact";
// import Instamart from "./Componants/Instamart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Instamart = lazy(() => import("./Componants/Instamart.js"));

const About = lazy(() => import("./Componants/About.js"));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
