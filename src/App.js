import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const { last_updated, total_stores, total_items } = data;
        setInitialData({ last_updated, total_stores, total_items });
      })
      .catch((error) => console.error("Unable to load `data.json`:", error));
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <AppContent initialData={initialData} />
      </BrowserRouter>
    </div>
  );
}

export default App;
