import ServiceCard from "../components/ServiceCard";
import PagesTitle from "../components/PagesTitle";

import banner from "../assets/images/banner.jpg";

function Services() {
    return (
        <div>
            {/* Bannière */}
            <img src={banner} alt="bannière" style={{ width: "100%", objectFit:"cover" }}/>
            
            {/* Titre de la page */}
            <PagesTitle title="Mon offre de services" description="Voici les prestations sur lesquelles je peux intervenir" />

            {/* Section cards */}
            <div className="container text-center mb-4 pb-2">
                <div className="row d-flex justify-content-center g-3 mt-1">
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <ServiceCard icon="bi bi-brush" title="UX Design" content="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."/>
                    </div>

                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <ServiceCard icon="bi bi-code-slash" title="Développement web" content="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."/>
                    </div>

                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <ServiceCard icon="bi bi-search" title="Référencement" content="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Services;