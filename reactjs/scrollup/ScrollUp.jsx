import React, { useEffect } from 'react';
import "./scrollup.css";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (scrollUp !== null) {
                if (window.scrollY >= 560) {
                    scrollUp.classList.add("show-scroll");
                } else {
                    scrollUp.classList.remove("show-scroll");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Membersihkan event listener ketika komponen tidak lagi digunakan
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Dependency array kosong memastikan efek ini berjalan sekali pada saat mount

    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default ScrollUp
