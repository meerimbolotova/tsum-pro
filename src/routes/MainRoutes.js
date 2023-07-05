import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import Feedback from "../components/Feedback/Feedback";
import Contact from "../components/Contact/Contact";
import TicketRefund from "../components/TicketRefund/TicketRefund";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import TicketsDetails from "../components/Details/TicketsDetails";
import ResetePassword from "../components/auth/ResetePassword";
import ResetePasswordConf from "../components/auth/ResetePasswordConf";
import Activation from "../components/auth/Activation";
import EditCardPage from "../pages/EditCardPage";
import NotFoundPage from "../components/notFound/NotFoundPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/admin", element: <AdminPage /> },
    { link: "/feedback", element: <Feedback /> },
    { link: "/contact", element: <Contact /> },
    { link: "/ticketrefund", element: <TicketRefund /> },
    { link: "/login", element: <Login /> },
    { link: "/*", element: <NotFoundPage /> },
    { link: "/register", element: <Register /> },
    { link: "/details/:id", element: <TicketsDetails /> },
    { link: "/resetpassword", element: <ResetePassword /> },
    { link: "/resetpasswordconf/", element: <ResetePasswordConf /> },
    { link: "/activate", element: <Activation /> },
    { link: "/edit/:id", element: <EditCardPage /> },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item, index) => (
        <Route path={item.link} element={item.element} key={index} />
      ))}
    </Routes>
  );
  // const { user } = useSelector((state) => state.auth);
};

export default MainRoutes;
