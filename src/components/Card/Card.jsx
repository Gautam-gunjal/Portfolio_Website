import React from "react";
import "./Card.css";

const Card = ({ title, image, description, technologies = [], codeLink, liveLink }) => {
  return (
    <div className="card" role="article" aria-label={title}>
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>

      <div className="card-content">
        <h2 className="card-title">{title}</h2>

        <p className="card-description" style={{ whiteSpace: "pre-line" }}>{description}</p>

        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons row */}
        <div className="card-buttons">
          {codeLink && (
            <a
              className="view-live-btn"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              💻 View Code
            </a>
          )}

          {liveLink && (
            <a
              className="view-live-btn"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              🚀 View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;