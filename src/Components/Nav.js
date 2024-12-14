import React, { useEffect, useState } from 'react';
import logo from '../assets/Logo.png'

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const highlightActiveLink = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');
        const top = window.scrollY;

        sections.forEach((sec) => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', highlightActiveLink);
        return () => {
            window.removeEventListener('scroll', highlightActiveLink);
        };
    }, []);

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" width="85" />
            </div>
            <div className="burger-menu" id="burger-menu" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                <li><a href="#">Main</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#highlight">Highlights</a></li>
            </nav>
        </header>
    );
}

export default Header;