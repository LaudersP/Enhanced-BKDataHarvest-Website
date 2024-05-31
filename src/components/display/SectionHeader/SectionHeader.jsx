import React from "react";
import "./SectionHeader.css";

function SectionHeader({ removeTop = false, label }) {
  return (
    <div className={`section-header ${removeTop ? "no-top-border" : ""}`}>
      <h3 className="label">{label}</h3>
    </div>
  );
}

export default SectionHeader;
