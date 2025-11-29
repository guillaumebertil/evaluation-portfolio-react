import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='bg-dark text-light py-5'>
            <div className='container'>
                <div className='row d-flex justify-content-md-center'>
                    {/* Informations */}
                    <div className='col-md-4'>
                        <h5>John Doe</h5>

                        {/* Adresse */}
                        <p className='mt-2 mb-0'>40 rue Laure Diebold</p>
                        <p className='mb-0'>69009 Lyon, France  </p> 

                        {/* Téléphone */}
                        <p className='mb-0'>10 20 30 40 50</p>

                        {/* Mail */}
                        <p className='mb-0'><a href='mailto:john.doe@gmail.com' className='text-decoration-none text-light'>john.doe@gmail.com</a></p>

                        {/* Réseaux sociaux */}
                        <div className='d-flex justify-content-start mt-3 fs-2 gap-2'>
                            {/* Lien Github */}
                            <a href='https://github.com/github-john-doe' target='_blank' rel='noopener noreferrer nofollow' className='text-light'>
                                <i className='bi bi-github'></i>
                            </a>

                            {/* Lien Twitter */}
                            <a href='https://x.com/' target='_blank' rel='noopener noreferrer nofollow' className='text-light'>
                                <i className='bi bi-twitter'></i>
                            </a>

                            {/* Lien LinkedIn */}
                            <a href='https://fr.linkedin.com/' target='_blank' rel='noopener noreferrer nofollow' className='text-light'>
                                <i className='bi bi-linkedin'></i>
                            </a>
                        </div>
                    </div>

                    {/* Liens utiles */}
                    <div className='col-md-4'>
                        <h5>Liens utiles</h5>
                        <ul className='list-unstyled'>
                            {/* Accueil */}
                            <li>
                                <Link to='/' className='text-light text-decoration-none'>Accueil</Link>
                            </li>
                            {/* Services */}
                            <li>
                                <Link to='/services' className='text-light text-decoration-none'>Services</Link>
                            </li>
                            {/* Portfolio */}
                            <li>
                                <Link to='/portfolio' className='text-light text-decoration-none'>Portfolio</Link>
                            </li>
                            {/* Contact */}
                            <li>
                                <Link to='/contact' className='text-light text-decoration-none'>Contact</Link>
                            </li>
                            {/* Mentions légales */}
                            <li>
                                <Link to='/legalNotice' className='text-light text-decoration-none'>Mentions Légales</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Dernières réalisations */}
                    <div className='col-md-4'>
                        <h5>Mes dernières réalisations</h5>
                        <ul className='list-unstyled'>
                            {/* Fresh Food */}
                            <li>
                                <Link to='/portfolio' className='text-light text-decoration-none'>Fresh Food</Link>
                            </li>

                            {/* Restaurant Akira */}
                            <li>
                                <Link to='/portfolio' className='text-light text-decoration-none'>Restaurant Akira</Link>
                            </li>

                            {/* Espace bien-être */}
                            <li>
                                <Link to='/portfolio' className='text-light text-decoration-none'>Espace bien-être</Link>
                            </li>

                            {/* SEO */}
                            <li>
                                <Link to='/portfolio' className='text-light text-decoration-none'>SEO</Link>
                            </li>

                            {/* Création d'un API */}
                            <li>
                                <Link to='/portfolio' className='text-light text-decoration-none'>Création d'une API</Link>
                            </li>

                            {/* Maquette d'un site */}
                            <li>
                                <Link to='/portfolio' className='text-light text-decoration-none'>Maquette d'un site</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;