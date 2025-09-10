import { Fragment, useEffect, useState } from 'react';
import styles from '../styles/layouts/mainLayout.module.css'

import { NavLink, Outlet, useNavigate } from 'react-router'

const NavigationItem = ({ link, name }) => {
    return (
        <NavLink to={link}>
            {({ isActive }) => (
                <div className={`${styles.navigationItem} ${isActive ? styles.active : ''}`}>
                    <p>{name}</p>
                    {isActive &&
                        <div className={styles.underline}></div>
                    }
                </div>
            )}
        </NavLink>
    )
}

export default function MainLayout() {

    const navigate = useNavigate();

    const links = [
        {
            link: "",
            name: "Home",
        }, {
            link: "about",
            name: "About",
        }, {
            link: "exhibition",
            name: "Exhibition",
        }, {
            link: "gallery",
            name: "Gallery",
        }, {
            link: "news",
            name: "News & Updates",
        }, {
            link: "past-events",
            name: "Past Events",
        }, {
            link: "faqs",
            name: "FAQs",
        }
    ];

    // header scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <Fragment>
            <header className={scrolled ? styles.scrolled : ''}>
                <a href="/" className={styles.logo}>
                    <img src="/icon.svg" alt="EduSkills Africa logo" width={150} />
                </a>

                <nav>
                    {links.map((link, idx) => (
                        <NavigationItem
                            key={idx}
                            link={link.link}
                            name={link.name}
                        />
                    ))}
                </nav>

                <div className={styles.socialLinks}>
                    <a href="https://web.facebook.com/EduSkillsAfricaConference/">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://x.com/EduSkillsAfrica?mx=2">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/eduskillsafrica-7273422bb/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/@esdevFoundationAfrica">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </header>

            <Outlet />
        </Fragment>
    )
}
