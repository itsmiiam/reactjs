import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
    /*== Change Background Header ==*/
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (header !== null) {
                if (window.scrollY >= 80) {
                    header.classList.add("scroll-header");
                } else {
                    header.classList.remove("scroll-header");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Membersihkan event listener ketika komponen tidak lagi digunakan
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Dependency array kosong memastikan efek ini berjalan sekali pada saat mount

    /*== Toggle Menu ==*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Mia
                </a>

                <div className={Toggle ? "nav__menu show-menu" :
                    "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i
                        class="uil uil-times nav__close" onClick={() =>
                            showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu
                    (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header