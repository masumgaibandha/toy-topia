import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/profile",
        element: <Profile />,
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
