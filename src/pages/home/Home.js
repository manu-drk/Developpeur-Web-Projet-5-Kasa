import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import imgHomeBanner from "../../assets/banner/homeBanner.jpeg";
// import './Home.scss';

function Home() {

    return (
    <div className="home">
        {/* <h1>Bienvenue sur la page d'accueil</h1>
        <p>C'est la page d'accueil de notre application.</p> */}
        <main>
        <Header />
    <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
    <Gallery>
          <Link to="/logements">
            {/* Contenu de la galerie */}
          </Link>
        </Gallery>
    <Footer />
    </main>
    </div>

    );
}

export default Home;