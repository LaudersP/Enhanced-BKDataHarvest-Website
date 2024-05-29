import React from "react";
import "./NewsElement.css";
import { useNavigate } from "react-router-dom";
import Button from "../../navigation/Button/Button";

function NewsElement({
  image,
  imageAltText,
  title,
  summary,
  buttonLabel,
  route,
  externalLink = false,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (externalLink) {
      window.open(route, "_blank");
    } else {
      navigate(route);
    }
  };

  return (
    <div className="news-element">
      <img
        src={image}
        alt={imageAltText}
        className="news-element-image"
        onClick={handleNavigate}
      />
      <h2 className="news-element-header">{title}</h2>
      <p className="news-element-summary">{summary}</p>
      <Button
        label={buttonLabel}
        route={route}
        externalLink={externalLink}
        className="news-element-button"
      />
    </div>
  );
}

export default NewsElement;
