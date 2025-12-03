import PagesTitle from "../components/PagesTitle"

function Contact() {
    return (
        <div>
            {/* Titre de la page  */}
            <PagesTitle title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact." />

            <div className="container">
                <div className="row mx-auto gx-4 border border-2 rounded shadow p-3 mb-5 pb-5">

                    {/* Formulaire */}
                    <div className="col-md-6">
                        <h3 className="border-bottom border-3 border-primary pb-3">Formulaire de contact</h3>
                        <form>
                            <div className="form-group">
                                {/* Nom */}
                                <input className="form-control mt-5" type="text" placeholder="Votre nom" aria-label="nom" required></input>

                                {/* Email */}
                                <input className="form-control mt-2" type="email" placeholder="Votre adresse email" aria-label="email" required></input>

                                {/* Téléphone */}
                                <input className="form-control mt-2" type="tel" placeholder="Votre numéro de téléphone" aria-label="téléphone" required></input>

                                {/* Sujet */}
                                <input className="form-control mt-2" type="text" placeholder="Sujet" aria-label="sujet" required></input>

                                {/* Message */}
                                <textarea className="form-control mt-2" placeholder="Votre message" aria-label="message" rows="16" required></textarea>

                            </div>

                            {/* Bouton envoyer */}
                            <div className="container">
                                <div className="text-center mt-3">
                                    <button type="submit" className="btn btn-primary">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Mes coordonnées */}
                    <div className="col-md-6">
                        <h3 className="border-bottom border-3 border-primary pb-3">Mes coordonnées</h3>
                        <h4 className="mt-5">John Doe</h4>

                        {/* Adresse */}
                        <address>
                            <p className='mt-2 mb-0'><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
                            <p className='mb-0'><i className="bi bi-geo-alt"></i> 69009 Lyon, France  </p>

                            {/* Téléphone */}
                            <p className='mb-0'><i className="bi bi-phone"></i> 10 20 30 40 50</p>

                            {/* Mail */}
                            <p className='mb-3'><a href='mailto:john.doe@gmail.com' className='text-decoration-none text-dark'><i className="bi bi-envelope-at"></i> john.doe@gmail.com</a></p>

                            {/* Google Map */}
                            <div className="ratio ratio-4x3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754109!2d4.79640397673746!3d45.77866571240141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1764772709147!5m2!1sfr!2sfr" style={{ border:"0", width:"max-width", height:"" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

