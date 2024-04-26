import React from 'react';
import './Cards.css'

function Cards({ image, title }) {
    return (
        <div className="cards">
            <img src={image} alt={title} className="card_img" />
            <div className="card_overlay"></div>

            <h2 className="card_title">{title}</h2>
        </div>
    );
}

export default Cards;