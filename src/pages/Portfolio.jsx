import PortfolioCard from "../components/ProjectCard";
import PagesTitle from "../components/PagesTitle";

import banner from "../assets/images/banner.jpg";

import freshFood from "../assets/images/portfolio/fresh-food.jpg";
import akira from "../assets/images/portfolio/restaurant-japonais.jpg";
import bienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import seo from "../assets/images/portfolio/seo.jpg";
import api from "../assets/images/portfolio/coder.jpg";
import maquette from "../assets/images/portfolio/screens.jpg";


function Portfolio() {
    return (
        <div>
            {/* Bannière */}
            <div className="banner" style={{ backgroundImage: `url(${banner})`, height:"200px", backgroundSize:"cover", backgroundPosition:"center" }}>
            </div>

            {/* Titre de la page */}
            <PagesTitle title="Portfolio" description="Voici quelques-unes de mes réalisations"/>

            {/* Section cards */}
            <div className="container text-center">
                <div className="row d-flex justify-content-center g-2">

                    {/* Fresh Food */}
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <PortfolioCard image={freshFood} title="Fresh Food" content="Site de vente de produits frais en ligne" rea="Site réalisé avec PHP et MySQL"/>
                    </div>

                    {/* Restaurant Akira */}
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <PortfolioCard image={akira} title="Restaurant Akira" content="Site de vente de produits frais en ligne" rea="Site réalisé avec WordPress"/>
                    </div>

                    {/* Espace bien-être */}
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <PortfolioCard image={bienEtre} title="Espace bien-être" content="Site de vente de produits frais en ligne" rea="Site réalisé avec LARAVEL"/>
                    </div>

                    {/* SEO */}
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <PortfolioCard image={seo} title="SEO" content="Amélioration du référencement d'un site e-commerce" rea="Utilisation des outils SEO"/>
                    </div>

                    {/* Création d'une API */}
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <PortfolioCard image={api} title="Création d'une API" content="Création d'une API RESTFULL publique" rea="PHP - SYMFONY"/>
                    </div>

                    {/* SEO */}
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <PortfolioCard image={maquette} title="Maquette d'un site web" content="Création du prototype d'un site" rea="Réalisation avec FIGMA"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;