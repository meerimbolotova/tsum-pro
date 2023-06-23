import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";

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
