import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../pages/HomePage";
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
import { ADMIN } from "../helpers/consts";

const MainRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/feedback", element: <Feedback /> },
    { link: "/contact", element: <Contact /> },
    { link: "/ticketrefund", element: <TicketRefund /> },
    { link: "/login", element: <Login /> },
    { link: "*", element: <NotFoundPage /> },
    { link: "/register", element: <Register /> },
    { link: "/details/:id", element: <TicketsDetails /> },
    { link: "/details/", element: <TicketsDetails /> },
    { link: "/resetpassword", element: <ResetePassword /> },
    { link: "/resetpasswordconf/", element: <ResetePasswordConf /> },
    { link: "/activate", element: <Activation /> },
    { link: "/edit/:id", element: <EditCardPage /> },
    // { link: "/admin", element: <AdminPage /> },
  ];

  const PRIVATE_ROUTES = [{ link: "/admin", element: <AdminPage /> }];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item, index) => (
        <Route path={item.link} element={item.element} key={index} />
      ))}
      {user &&
        PRIVATE_ROUTES.map((item, index) => (
          <Route
            path={item.link}
            element={
              user === ADMIN ? item.element : <Navigate replace to="*" />
            }
            key={index}
          />
        ))}
    </Routes>
  );
};

export default MainRoutes;
