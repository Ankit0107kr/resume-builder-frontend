import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ClerkProvider } from '@clerk/clerk-react';
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Login from "./components/Login";
import ATS from "./components/ATS";

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PUBLISHABLE_KEY = "pk_test_YWxpdmUtdHJlZWZyb2ctMzIuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/score", element: <ATS /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>
);
