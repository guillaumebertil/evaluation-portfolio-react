import PagesTitle from "../components/PagesTitle"

function Contact() {
    return (
        <div>
            {/* Titre de la page  */}
            <PagesTitle title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact." />

            <div className="container">
                <div className="row m-4 gx-4 border border-2 rounded shadow p-3 mb-5">

                    {/* Formulaire */}
                    <div className="col-md-6">
                        <h3 className="border-bottom border-3 border-primary">Formulaire de contact</h3>
                        <form>
                            <div className="form-group">
                                {/* Nom */}
                                <input className="form-control" type="text" placeholder="Votre nom" aria-label="nom"></input>

                                {/* Email */}
                                <input className="form-control" type="email" placeholder="Votre adresse email" aria-label="email"></input>

                                {/* Téléphone */}
                                <input className="form-control" type="tel" placeholder="Votre numéro de téléphone" aria-label="téléphone"></input>

                                {/* Sujet */}
                                <input className="form-control" type="text" placeholder="Sujet" aria-label="sujet"></input>

                                {/* Message */}
                                <textarea className="form-control" placeholder="Votre message" aria-label="message"></textarea>
                            </div>
                        </form>
                    </div>

                    {/* Mes coordonnées */}
                    <div className="col-md-6">
                        <h3 className="border-bottom border-3 border-primary">Mes coordonnées</h3>
                        <h4>John Doe</h4>

                        {/* Adresse */}
                        <address>
                            <p className='mt-2 mb-0'><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
                            <p className='mb-0'><i className="bi bi-geo-alt"></i> 69009 Lyon, France  </p>

                            {/* Téléphone */}
                            <p className='mb-0'><i className="bi bi-phone"></i> 10 20 30 40 50</p>

                            {/* Mail */}
                            <p className='mb-0'><a href='mailto:john.doe@gmail.com' className='text-decoration-none text-dark'><i className="bi bi-envelope-at"></i> john.doe@gmail.com</a></p>

                            {/* Google Map */}
                            <div className="ratio ratio-4x3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55246.743227522806!2d4.798979!3d45.778662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e1!3m2!1sfr!2sfr!4v1764662933358!5m2!1sfr!2sfr" style={{ border:"0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

