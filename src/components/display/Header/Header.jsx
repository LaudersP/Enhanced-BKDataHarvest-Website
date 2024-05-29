import React from "react";
import "./Header.css";
import Navbar from "../../navigation/NavBar/Navbar";
import Banner from "../Banner/Banner";

function Header({ path, data }) {
  let iconName;
  switch (path) {
    case "/":
      iconName = "menu";
      break;
    case "/menu":
      iconName = "close";
      break;
    default:
      iconName = "arrow_back_ios";
  }

  return (
    <div className="header">
      <Navbar
        iconName={iconName}
        className={iconName === "arrow_back_ios" ? "arrow_back_ios" : "default"}
      />
      <Banner data={data} />
    </div>
  );
}

export default Header;
