import johnDoeAbout from "../assets/images/john-doe-about.jpg"

function About() {
    return (
        <div className="container">
            <div className="row m-4 gx-4 border border-2 rounded shadow p-3 mb-5">
                {/* A propos */}
                <div className="col-md-6">
                    <h3 className="border-bottom border-3 border-primary">A propos</h3>
                    <img src={johnDoeAbout} alt="photo de John Doe" className="img-fluid"></img>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
                    </p>
                </div>

                {/* Mes compétences */}
                <div className="col-md-6">
                    <h3 className="border-bottom border-3 border-primary">Mes compétences</h3>
                    <ul className="list-unstyled">
                        {/* HTML5 */}
                        <li className="mt-4 mb-4">
                            <h5>HTML5 90%</h5>
                            <div className="progress" role="progressbar" aria-label="HTML" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                            </div>
                        </li>

                        {/* CSS */}
                        <li className="mb-4">
                            <h5>CSS 80%</h5>
                            <div className="progress" role="progressbar" aria-label="CSS" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                            </div>
                        </li>

                        {/* JavaScript */}
                        <li className="mb-4">
                            <h5>JavaScript 70%</h5>
                            <div className="progress" role="progressbar" aria-label="JavaScript" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                            </div>
                        </li>

                        {/* PHP */}
                        <li className="mb-4">
                            <h5>PHP 60%</h5>
                            <div className="progress" role="progressbar" aria-label="PHP" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                            </div>
                        </li>

                        {/* REACT */}
                        <li className="mb-4">
                            <h5>REACT 50%</h5>
                            <div className="progress" role="progressbar" aria-label="CSS" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-primary" style={{width: "50%"}}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;