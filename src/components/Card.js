import React from 'react';
import "./Card.css";

function Card({name, description, link, photoURL, hideButton}) {
    return (
        <div className="card">
        <div className="card__container">
            <img 
            src={photoURL}
            alt={name}
            />
            <div className="card__infoTop">
            <h2>{name}</h2>
            </div>
            <div className="card__infoBottom">
                <h5>Description</h5>
                <p>{description}</p>
                {!hideButton && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                <button>Check it out</button>
                </a>
                )}
            </div>
            </div>
        </div>
    )
}

export default Card
