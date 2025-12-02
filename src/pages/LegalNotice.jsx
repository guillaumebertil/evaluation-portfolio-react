import PagesTitle from "../components/PagesTitle";


function LegalNotice() {
    return (
        <div>
            {/* Titre de la page */}
            <PagesTitle title="Mentions légales" description=""/>

            {/* Accordéon */}
            <div className="container">
                <div className="accordion" id="accordion">
                    {/* Editeur du site */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Editeur du site
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h4>John Doe</h4>

                            {/* Adresse */}
                            <address>
                                <p className='mt-2 mb-0'><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
                                <p className='mb-0'><i className="bi bi-geo-alt"></i> 69009 Lyon, France  </p>

                                {/* Téléphone */}
                                <p className='mb-0'><i className="bi bi-phone"></i> 10 20 30 40 50</p>

                                {/* Mail */}
                                <p className='mb-0'><a href='mailto:john.doe@gmail.com' className='text-decoration-none text-dark'><i className="bi bi-envelope-at"></i> john.doe@gmail.com</a></p>
                            </address>
                        </div>
                        </div>
                    </div>

                    {/* Hébergeur */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h2>alwaysdata</h2>
                            <address>91 Rue du Faubourg Saint-Honoré, 75008 Paris</address>
                            <p>
                                <i className="bi bi-globe"></i> <a href="https://www.alwaysdata.com/fr/" target="_blank">www.alwaysdata.com</a>
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Crédits */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h2>Crédits</h2>
                            <p>
                                Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank">Centre Européen de formation</a>.
                            </p>

                            <p className="fst-italic">
                                Les images utilisées sur ce site sont libres de droit et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank">Pixabay</a>
                            </p>

                            <p className="fst-italic">
                                La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank">John doe Icons erstellt von Freepik - Flaticon</a>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LegalNotice;