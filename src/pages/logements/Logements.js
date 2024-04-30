import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import logements from "../../datas/logements.json";
import Tag from "../../components/tag/Tag";


const Logements = () => {
  // // Utilisez le hook useParams pour récupérer les paramètres d'URL
  // const { id } = useParams();

  // // Trouvez le logement correspondant dans le fichier JSON en fonction de l'ID
  // const logement = logements.find(logement => logement.id === id);

  const { id, tagName } = useParams();

  // Trouvez le logement correspondant dans le fichier JSON en fonction de l'ID et du tag
  const logement = logements.find(logement => logement.id === id && logement.tags.includes(tagName));

  const tagsName = logement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  return (
    <div className="logements">
      <Header />
      <main>
        <h1>{logement.title}</h1>
        <div>Tags:
          {tagsName}</div>
        <img src={logement.cover} alt={logement.title} className="logements_img" />
      </main>

      <Footer />
    </div>
  );
};

export default Logements;