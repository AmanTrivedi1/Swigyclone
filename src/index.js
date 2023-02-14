import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Componants/Profile";
import styles from "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
// import About from "./Componants/About";
import RestauntDetails from "./Componants/RestauntDetails";
import Navbar from "./Componants/Navbar";
import Body from "./Componants/Body";
import Footer from "./Componants/Footer";
import Error from "./Componants/Error";
import Contact from "./Componants/Contact";
import Simmer from "./Componants/Simmer";
import { Provider } from "react-redux";
import store from "./Utils/Store";
// import Instamart from "./Componants/Instamart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./Componants/Cart";

const Instamart = lazy(() => import("./Componants/Instamart.js"));

const About = lazy(() => import("./Componants/About.js"));

function AppLayout() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
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
          <Suspense fallback={<Simmer />}>
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
          <Suspense fallback={<Simmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          // <Cart/>
          <Suspense fallback={<Simmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-h0xsxqo65ppwases.us.auth0.com"
    clientId="vvJeFhw9Js5bUbEI30gNtuJyFUr85eMm"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>
);
