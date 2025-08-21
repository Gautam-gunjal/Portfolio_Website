import React from "react";
import "./Card.css";

const Card = ({ title, image, description, technologies, liveLink }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>

      <div className="card-content">
        <h2 className="card-title">{title}</h2>

        <p className="card-description">{description}</p>

        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <button
          className="view-live-btn"
          onClick={(e) => {
            e.stopPropagation();
            window.open(liveLink, "_blank");
          }}
        >
          🚀 View Code
        </button>
      </div>
    </div>
  );
};

export default Card;
