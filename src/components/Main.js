import React from 'react';
import "./Main.css";
import Banner from "./Banner.js";
import Card from "./Card.js";

function Main() {
    return (
        <div className="main">
            <Banner />
            <h2>Featured Projects</h2>
            <div className="main__section">
            <Card
                name="Photo Sharing"
                description="Watermark, is a photo sharing app that offers licensing capabilities."
                link="https://watermark-1.web.app/"
                photoURL="https://watermark.ventures/wp-content/uploads/2020/07/watermark.png"
                
                />
                <Card
                name="Marketplace"
                description="Marketplace, is an Amazon like site, that utlizes the stripe API."
                link="https://watermark-mkt.web.app/"
                photoURL="https://watermark.ventures/wp-content/uploads/2020/07/watermark.png"
                />
                <Card
                name="Messenger"
                description="Messenger, is an WhatsApp like site, that allows users to chat."
                link="https://watermark-chat.web.app/"
                photoURL="https://watermark.ventures/wp-content/uploads/2020/07/watermark.png"
                />
        </div>
        </div>
    )
}

export default Main
