import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header__title">
            <Link to="/" className="header__link">
            <h2>Will Fullerton</h2>
            </Link>
            </div>

                <div className="header__nav">
                    <div className="header__option">
                    <Link to="/about" className="header__link">
                    <h4>About</h4>
                    </Link>
                </div>

                <div className="header__option">
                <Link to="/projects" className="header__link">
                    <h4>Projects</h4>
                </Link>
                </div>

                <div className="header__option">
                <Link to="/contact" className="header__link">
                    <h4>Contact</h4>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
