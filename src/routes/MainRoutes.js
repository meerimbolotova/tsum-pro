import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import TicketsDetails from "../components/Details/TicketsDetails";
import Feedback from "../components/Feedback/Feedback";
import Contact from "../components/Contact/Contact";
import TicketRefund from "../components/TicketRefund/TicketRefund";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
    },
    {
      link: "/admin",
      element: <AdminPage />,
    },
    {
      link: "/details",
      element: <TicketsDetails />,
    },
    { link: "/feedback", element: <Feedback /> },
    {
      link: "/contact",
      element: <Contact />,
    },
    {
      link: "/ticketrefund",
      element: <TicketRefund />,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item, index) => (
          <Route path={item.link} element={item.element} key={index} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
