import React from 'react';
import './Card.css';

function Card({ type, src, alt = '', description }) {
  return (
    <div className="card">
      {type === 'image' ? (
        <img src={src} alt={alt} className="card-media" />
      ) : (
        <video src={src} muted autoPlay loop className="card-media" />
      )}
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;

