import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";
import Cards from "../cards/Cards";
import './Gallery.scss'

const Gallery = () => {
    return (
        <div className="home_gallery">
            {logements.map((logement) => {
                return (
                    <article key={logement.id}>
                        {/* <Link to={`/logement/${logement.id}`}> */}
                        <Link to={`/logements/${logement.id}/${logement.tags[0]}`}>
                            <Cards image={logement.cover} title={logement.title} />
                        </Link>
                    </article>
                );
            })}
        </div>
    );
};

export default Gallery;