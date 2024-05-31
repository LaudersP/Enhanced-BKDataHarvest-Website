import React, { useState } from "react";
import "./DropdownMenu.css";

function DropdownMenu({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu-title" onClick={handleToggle}>
        <span>{title}</span>
        {isOpen ? (
          <span class="material-symbols-outlined">keyboard_arrow_up</span>
        ) : (
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        )}
      </div>
      {isOpen && (
        <div className="dropdown-menu-items checkbox-grid">{children}</div>
      )}
    </div>
  );
}

export default DropdownMenu;
