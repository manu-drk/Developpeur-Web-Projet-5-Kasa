// import React from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import logements from "../../datas/logements.json";
// import Tag from "../../components/tag/Tag";
import Slideshow from '../../components/Slideshow/Slideshow';
import './Logements.scss';

const Logements = () => {
  const { id, tagName } = useParams();
  const [logementData, setLogementData] = useState(null);

  useEffect(() => {
    // Récupérer les données du logement correspondant à l'ID passé dans l'URL
    const data = logements.find((item) => item.id === id);
    setLogementData(data);
  }, [logements, id]);

  return (
    <div className="logementsContainer">
<Header />
    <div className="logement-details">
      {logementData && <Slideshow pictures={logementData.pictures} />}
      {/* Affichage du tagName */}
      {logementData && (
        <div>
          <h2 className="logement-title">{logementData.title}</h2>
          <p className="logement-tag">Tag: {tagName}</p>
          <p className="logement-description">{logementData.description}</p>
          {/* Ajoutez d'autres détails du logement ici */}
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
};

export default Logements;





// const Logements = () => {
//   // // Utilisez le hook useParams pour récupérer les paramètres d'URL
//   // const { id } = useParams();

//   // // Trouvez le logement correspondant dans le fichier JSON en fonction de l'ID
//   // const logement = logements.find(logement => logement.id === id);

//   const { id, tagName } = useParams();

//   // Trouvez le logement correspondant dans le fichier JSON en fonction de l'ID et du tag
//   const logement = logements.find(logement => logement.id === id && logement.tags.includes(tagName));

//   const tagsName = logement?.tags.map((tags, i) => {
//     return <Tag key={i} nom={tags} />;
//   });

//   return (
//     <div className="logements">
//       <Header />
//       <main>
//         <h1>{logement.title}</h1>
//         <div>
//           {tagsName}</div>
//         <img src={logement.cover} alt={logement.title} className="logements_img" />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Logements;