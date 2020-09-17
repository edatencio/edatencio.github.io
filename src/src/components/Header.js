import React from "react";
import Contact from "./Contact";

const Header = () =>
{
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* Masthead Avatar Image */}
                <img className="masthead-avatar mb-5" src="assets/img/hero-img.png" alt="" />
                {/* Masthead Heading */}
                <h1 className="masthead-heading mb-0">Edward Atencio</h1>
                {/* Icon Divider */}
                {/* <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div> */}
                {/* Masthead Subheading */}
                <hr />
                <p className="masthead-subheading font-weight-light mb-0">Unity 3D & Front End Developer</p>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>
                <Contact />
            </div>
        </header>
    );
};

export default Header;
