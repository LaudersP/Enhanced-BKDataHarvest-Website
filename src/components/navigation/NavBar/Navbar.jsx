import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Navbar({ iconName }) {
  const navigate = useNavigate();

  const handleIconClick = () => {
    switch (iconName) {
      case "menu":
        navigate("/menu");
        break;
      case "close":
        navigate("/");
        break;
      case "arrow_back_ios":
        navigate("/menu");
        break;
      default:
        break;
    }
  };

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="left">
          <span
            className="material-symbols-outlined"
            id="menu-icon"
            onClick={handleIconClick}
          >
            {iconName}
          </span>
        </div>
        <div className="center">
          <div className="website-title" onClick={handleTitleClick}>
            <span className="bun">P</span>
            <span className="patty">W</span>
            <span className="bun">L - D</span>
            <span className="patty">IGITA</span>
            <span className="bun">L</span>
          </div>
        </div>
        <div className="right">
          <Button label="Contact Me" route="/contact-me" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
