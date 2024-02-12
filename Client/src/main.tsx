import React from "react";
import ReactDOM from "react-dom/client";
import BiddingComponenet from "./pages/BiddingFE.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/shared/NavBar.tsx";
import CreateAuction from "./pages/createAuction.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <BiddingComponenet />,
      },
      {
        path: "/createAuction",
        element: <CreateAuction />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
