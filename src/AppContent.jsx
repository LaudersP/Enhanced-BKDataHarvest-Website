import React from "react";
import Header from "./components/display/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/display/Footer/Footer";

function AppContent({ initialData }) {
  const location = useLocation();

  return (
    <>
      <Header path={location.pathname} data={initialData} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppContent;
