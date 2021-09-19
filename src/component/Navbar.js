import React, { useState } from 'react';
import './navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [showMediaIcons, setshowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part */}
                <div className="logo">
                    <h2>
                        <span>G</span>aurav
                        <span>K</span>ain
                    </h2>
                </div>

                {/* 2nd Menu part */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://www.facebook.com" target="_google"><FaFacebookSquare className="facebook"/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_google"><FaInstagramSquare className="instagram"/></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com" target="_google"><FaYoutubeSquare className="youtube"/></a>
                        </li>
                    </ul>

                    {/* hamburger menu start */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
                    </div>
                </div>
            </nav>

            {/* hero section  */}
            {/* <section className="hero-section">
                <p>Welcome to </p>
                <h1>Gaurav kain blogs</h1>
            </section> */}
        </>
    );
};

export default Navbar;
