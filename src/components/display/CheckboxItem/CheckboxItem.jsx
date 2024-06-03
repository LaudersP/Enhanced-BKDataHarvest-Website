import React from "react";
import Checkbox from "../Checkbox/Checkbox";

const CheckboxItem = ({ text, onChange, isChecked }) => {
  const handleOnChange = (e) => {
    const checked = e.target.checked;
    onChange(text, checked);
  };

  return (
    <div className="checkbox-item">
      <Checkbox text={text} onChange={handleOnChange} checked={isChecked} />
    </div>
  );
};

export default CheckboxItem;
