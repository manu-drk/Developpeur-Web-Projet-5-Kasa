import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import logements from "../../datas/logements.json";
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from "../../components/collapse/Collapse";
import starf from '../../assets/starf.png';
import stare from '../../assets/stare.png';
import './Logements.scss';

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementData, setLogementData] = useState(null);

  useEffect(() => {
    // Vérification si l'ID est présent le json logements
    const data = logements.find((item) => item.id === id);
    if (!data) {
      // Redirection vers la page d'erreur si l'ID n'est pas trouvé dans les données
      navigate("/error");
    } else {
      setLogementData(data);
    }
  }, [id, navigate]);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isEquipementOpen, setIsEquipementOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipement = () => {
    setIsEquipementOpen(!isEquipementOpen);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starf} alt="Etoile-pleine" />);
      } else {
        stars.push(<img key={i} src={stare} alt="Etoile-vide" />);
      }
    }
    return stars;
  };

  return (
    <div className="logement_body">
      <Header />
      <div className="logementsCarrousel">
        {logementData && <Slideshow pictures={logementData.pictures} />}
      </div>

      <div className="section_2_logements">
        {logementData && (        
          <div className="logement_info_container_wrapper">  
            <div className="logements_info_container">
              <h2 className="logement-title">{logementData.title}</h2>
              <div className="logement-location">{logementData.location}</div>
              <div className="logement-tags">
                {logementData.tags.map((tag, index) => (
                  <span key={index} className="logement-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="host_rating_container">
              <div className="host">
                <img src={logementData.host.picture} alt={logementData.host.name} />
                <span>{logementData.host.name}</span>
              </div>
              <div className="rating">
                <div className="rating-stars">
                  {renderRatingStars(parseInt(logementData.rating))}
                </div>
              </div>
            </div>
            </div>
        )}
      </div>
      
      <div className="Collapse-logements">
        {logementData && (
          <>
            <Collapse
              className={`Collapse-description ${isDescriptionOpen ? "open" : ""}`}
              title="Description" content={logementData.description}
              isOpen={isDescriptionOpen}
              onToggle={toggleDescription}
            >
              <p>{logementData.description}</p>
            </Collapse>
            <Collapse
              className={`Collapse-equipement ${isEquipementOpen ? "open" : ""}`}
              title="Équipements" content={logementData.equipments}
              isOpen={isEquipementOpen}
              onToggle={toggleEquipement}
            >
              <ul>
                {logementData.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Logements;














// import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import logements from "../../datas/logements.json";
// import Slideshow from '../../components/Slideshow/Slideshow';
// import Collapse from "../../components/collapse/Collapse";
// import starf from '../../assets/starf.png';
// import stare from '../../assets/stare.png';
// import './Logements.scss';

// const Logements = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [logementData, setLogementData] = useState(null);

//   useEffect(() => {
//     // Vérification si l'ID est présent le json logements
//     const data = logements.find((item) => item.id === id);
//     if (!data) {
//       // Redirection vers la page d'erreur si l'ID n'est pas trouvé dans les données
//       navigate("/error");
//     } else {
//       setLogementData(data);
//     }
//   }, [logements, id, navigate]);





//   // const Logements = () => {

//   //   const { id } = useParams();
//   //   const [logementData, setLogementData] = useState(null);

//   //   useEffect(() => {
//   //     const data = logements.find((item) => item.id === id);
//   //     setLogementData(data);
//   //   }, [logements, id]);

//   const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
//   const [isEquipementOpen, setIsEquipementOpen] = useState(false);

//   const toggleDescription = () => {
//     setIsDescriptionOpen(!isDescriptionOpen);
//   };

//   const toggleEquipement = () => {
//     setIsEquipementOpen(!isEquipementOpen);
//   };

//   const renderRatingStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= rating) {
//         stars.push(<img key={i} src={starf} alt="Etoile-pleine" />);
//       } else {
//         stars.push(<img key={i} src={stare} alt="Etoile-vide" />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className="logementsCarrousel">
//       <Header />
//       <div className="logement-details">
//         {logementData && <Slideshow pictures={logementData.pictures} />}
//         {logementData && (

//           <div>
           
            

//             <div className="section_2_logements">

//               <div className="logements_info_container">
//                 <h2 className="logement-title">{logementData.title}</h2>
//                 <div className="logement-location">{logementData.location}</div>
//                 <div className="logement-tags">
//                   {logementData.tags.map((tag, index) => (
//                     <span key={index} className="logement-tag">{tag}</span>
//                   ))}</div>
//               </div>

//               <div className="host_rating_container">
//                 <div className="host">
//                   <img src={logementData.host.picture} alt={logementData.host.name} />
//                   <span>{logementData.host.name}</span>
//                 </div>
//                 <div className="rating">
//                   <div className="rating-stars">
//                     {renderRatingStars(parseInt(logementData.rating))}
//                   </div>
//                 </div>
//               </div>

//             </div>




//             <div className="Collapse-logements">
//               <Collapse

//                 className={`Collapse-description ${isDescriptionOpen ? "open" : ""}`}
//                 title="Description" content={logementData.description}
//                 isOpen={isDescriptionOpen}
//                 onToggle={toggleDescription}
//               >
//                 return (
//                 <p>{logementData.description}</p>;
//                 );
//               </Collapse>

//               <Collapse
//                 className={`Collapse-equipement ${isEquipementOpen ? "open" : ""}`}
//                 title="Équipements" content={logementData.equipments}
//                 isOpen={isEquipementOpen}
//                 onToggle={toggleEquipement}
//               >
//                 return (
//                 <ul>
//                   <li>{logementData.equipments}</li>;
//                 </ul>
//                 );
//               </Collapse>

//             </div>

//           </div>

//         )}

//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Logements;










 {/* <div className="logement-title-container">
              <h2 className="logement-title">{logementData.title}</h2> 
               <div className="host">
                <img src={logementData.host.picture} alt={logementData.host.name} />
                <span>{logementData.host.name}</span>
              </div> 
            </div> */}



            
            // <div className="tags-rating-container">
            //   <div className="logement-tags">
            //     {logementData.tags.map((tag, index) => (
            //       <span key={index} className="logement-tag">{tag}</span>
            //     ))}</div> 


            //   <p>{logementData.rating}</p> 
            //   <div className="rating">
                
            //     <div className="rating-stars">
            //       {renderRatingStars(parseInt(logementData.rating))}
            //     </div>
            //   </div>
            // </div>