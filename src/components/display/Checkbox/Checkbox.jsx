import React from "react";
import "./Checkbox.css";

const Checkbox = ({ text, onChange, checked }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="checkbox-text">{text}</span>
    </label>
  );
};

export default Checkbox;
