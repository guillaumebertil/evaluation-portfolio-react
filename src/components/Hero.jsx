import "./Hero.css";

import heroImage from "../assets/images/hero-bg.jpg";

import ProfilModal from "./ProfilModal";

const Hero = () => {
    return (
        <div>
            <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-content">
                    <h1 className="" id="hero-title">Bonjour, je suis John Doe</h1>
                    <h2 className="">Développeur web full stack</h2>
                    <ProfilModal />
                </div>
            </div>
        </div>
    );
}

export default Hero;
