import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

function Button({ label, route, className = "", externalLink = false }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (externalLink) {
      window.open(route, "_blank");
    } else {
      navigate(route);
    }
  };

  return (
    <div className="button">
      <button className={`btn ${className}`} onClick={handleButtonClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
