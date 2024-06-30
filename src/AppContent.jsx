import React from "react";
import Header from "./components/display/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/display/Footer/Footer";
import MenuPage from "./pages/MenuPage/MenuPage";
import HeatMapPage from "./pages/HeatMapPage/HeatMapPage";
import DataGraphsPage from "./pages/DataGraphsPage/DataGraphsPage";
import DocumentationPage from "./pages/DocumentationPage/DocumentationPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DisclaimerPage from "./pages/DisclaimerPage/DisclaimerPage";
import ContactMePage from "./pages/ContactMePage/ContactMePage";

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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/doc" element={<DocumentationPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/contact-me" element={<ContactMePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppContent;
