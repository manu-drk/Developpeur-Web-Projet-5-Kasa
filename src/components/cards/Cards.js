import React from 'react';
import './Cards.scss'

function Cards({ image, title }) {
    return (
        <div className="cards">
            <img src={image} alt={title} className="cards_img" />
            

            <h2 className="cards_title">{title}</h2>
        </div>
    );
}

export default Cards;