import React from "react";
import "./MenuOption.css";
import { useNavigate } from "react-router-dom";

function MenuOption({ label, route, externalLink = false }) {
  const navigate = useNavigate();

  const handleRoute = (event) => {
    event.preventDefault();

    if (externalLink) {
      window.open(route, "_blank");
    } else {
      navigate(route);
    }
  };

  return (
    <div className="menu-option" onClick={handleRoute}>
      <h3 className="option-label">{label}</h3>
    </div>
  );
}

export default MenuOption;
