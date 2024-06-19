import React from "react";
import Header from "./components/display/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/display/Footer/Footer";
import MenuPage from "./pages/MenuPage/MenuPage";
import HeatMapPage from "./pages/HeatMapPage/HeatMapPage";
import DataGraphsPage from "./pages/DataGraphsPage/DataGraphsPage";
import DocumentationPage from "./pages/DocumentationPage/DocumentationPage";

function AppContent({ initialData }) {
  const location = useLocation();

  return (
    <>
      <Header path={location.pathname} data={initialData} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/heat-map" element={<HeatMapPage />} />
        <Route path="/data-graphs" element={<DataGraphsPage />} />
        <Route path="/doc" element={<DocumentationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppContent;
