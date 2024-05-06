import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import logements from "../../datas/logements.json";
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from "../../components/collapse/Collapse";
import './Logements.scss';

const Logements = () => {
  const { id, tagName } = useParams();
  const [logementData, setLogementData] = useState(null);

  useEffect(() => {
    const data = logements.find((item) => item.id === id);
    setLogementData(data);
  }, [logements, id]);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isEquipementOpen, setIsEquipementOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipement = () => {
    setIsEquipementOpen(!isEquipementOpen);
  };

  return (
    <div className="logementsContainer">
      <Header />
      <div className="logement-details">
        {logementData && <Slideshow pictures={logementData.pictures} />}
        {logementData && (
          <div>
            <h2 className="logement-title">{logementData.title}</h2>
            <p className="logement-tag">Tag: {tagName}</p>
            <div className="Collapse-logements">
              <Collapse
              
                className={`Collapse-description ${isDescriptionOpen ? "open" : ""}`}
                title="Description"
                isOpen={isDescriptionOpen}
                onToggle={toggleDescription}
              >
                {logementData.description.split('. ').map((desc, index) => {
        console.log("After split:", desc);
        return <p key={index}>{desc}</p>;
    })}
                

              </Collapse>

              <Collapse
                className={`Collapse-equipement ${isEquipementOpen ? "open" : ""}`}
                title="Équipements"
                isOpen={isEquipementOpen}
                onToggle={toggleEquipement}
              >
                <ul>
                  {logementData.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Logements;
