import styles from '../styles/layouts/mainLayout.module.css'

import { NavLink, Outlet } from 'react-router'

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

    const links = [
        {
            link: "home",
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

    return (
        <main className={styles.mainLayout}>
            <header>
                <div className={styles.logo}>
                    <img src="/icon.svg" alt="" width={150} />
                </div>

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
        </main>
    )
}
