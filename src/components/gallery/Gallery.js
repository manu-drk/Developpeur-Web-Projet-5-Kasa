import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";
import Cards from "../cards/Cards";
import './Gallery.scss'

const Gallery = () => {
    return (
        <div className="home__gallery">
            {logements.map((logement) => {
                return (
                    <article className="art" key={logement.id}>
                        <Link to={`/logements/${logement.id}`}>                        
                            <Cards image={logement.cover} title={logement.title} />
                        </Link>
                    </article>
                );
            })}
        </div>
    );
};

export default Gallery;