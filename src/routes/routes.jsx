import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ToyDetails from "../pages/ToyDetails";
import Footer from "../pages/Footer";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Cookies from "../pages/Cookies";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "*", 
        element: <NotFound /> },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/footer",
        element: <Footer/>,
      },
      { path: "/toy/:toyId", 
        element: <PrivateRoute><ToyDetails /></PrivateRoute> 
      },
      
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      
      {
        path: "/register",
        element: <Register />,
      },
      
      {
        path: "/login",
        element: <Login />,
      },
       { path: "/terms", 
        element: <Terms/> },
      { path: "/privacy", 
        element: <Privacy /> },
      { path: "/cookies", 
        element: <Cookies /> },
      
      
    ],
  },
]);
