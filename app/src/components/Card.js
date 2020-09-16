import React from 'react';
import "./Card.css";
import { Link } from "react-router-dom";

function Card({name, description, link, photoURL}) {
    return (
        <div className="card">
        <div className="card__container">
            <img 
            src={photoURL}
            alt="react-logo"
            />
            <div className="card__infoTop">
            <h2>{name}</h2>
            </div>
            <div className="card__infoBottom">
                <h5>Description</h5>
                <p>{description}</p>
                <Link to="www.google.com">
                <button>Check out Repo</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Card
