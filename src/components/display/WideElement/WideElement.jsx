import React from "react";
import "./WideElement.css";
import Button from "../../navigation/Button/Button";

function WideElement({ title, buttonText, buttonRoute, imageSrc, imageAlt }) {
  return (
    <div className="wide-element">
      <div className="text">
        <h1>{title}</h1>
        <div className="button-container">
          <Button
            label={buttonText}
            route={buttonRoute}
            className="default-btn"
          />
        </div>
      </div>
      <div className="image">
        <img src={imageSrc} alt={imageAlt} className={`default-image`} />
      </div>
    </div>
  );
}

export default WideElement;
