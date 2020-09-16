import React from 'react';
import "./Main.css";
import Card from "./Card";

function Main() {
    return (
        <div className="main">
            <h1>Projects</h1>
            <div className="main__container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div className="main__container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}

export default Main
