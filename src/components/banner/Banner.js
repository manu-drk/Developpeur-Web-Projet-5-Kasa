import React from "react";
import './Banner.css'

function Banniere({ image, texte }) {
    return (
        <div className="banner">
            <img className="banner-img" src={image} alt="Bannière" />
            <span className="banner-txt">{texte}</span>
        </div>
    );
}

export default Banniere;