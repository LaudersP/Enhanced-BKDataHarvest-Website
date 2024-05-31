import React from "react";
import "./MenuPage.css";
import SectionHeader from "../../components/display/SectionHeader/SectionHeader";
import MenuOption from "../../components/navigation/MenuOption/MenuOption";
import Button from "../../components/navigation/Button/Button";

function Menu() {
  return (
    <div className="menu-page">
      <div className="menu-page-content">
        <div className="return-btn">
          <Button
            className="menu-btn"
            label={"Return to PWL Digital"}
            route={"https://pwldigital.com"}
            externalLink={true}
          />
        </div>{" "}
        <SectionHeader label="Pages" />
        <MenuOption label="Home" route="/" />
        <MenuOption label="Heat Map" route="/heat-map" />
        <MenuOption label="Data Graphs" route="/data-graphs" />
        <SectionHeader label="Code" />
        <MenuOption label="About" route="/about" />
        <MenuOption label="Documentation" route="/doc" />
        <MenuOption
          label="Enhanced-BKDataHarvest"
          route="https://github.com/LaudersP/Enhanced-BKDataHarvest"
          externalLink={true}
        />
        <SectionHeader label="Legal" />
        <MenuOption label="Disclaimer" route="/disclaimer" />
      </div>
    </div>
  );
}
export default Menu;
