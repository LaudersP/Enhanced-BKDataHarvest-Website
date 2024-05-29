import React from "react";

function BannerItem({ icon, label, text, id }) {
  return (
    <div className={`banner-group ${id}`}>
      <div className="banner-icon">
        <span className="material-symbols-outlined" id={`${id}-icon`}>
          {icon}
        </span>
      </div>
      <div className="banner-text">
        <span className="update-label">{label}</span>
        <span className="update-text">{text}</span>
      </div>
    </div>
  );
}

export default BannerItem;
