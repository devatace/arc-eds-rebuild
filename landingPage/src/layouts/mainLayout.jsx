import styles from '../styles/layouts/mainLayout.module.css'

import { Fragment, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router'
import Lenis from 'lenis'

import Logo from '../assets/logo.png'

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

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            duration: 1.5,
            direction: 'vertical',
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

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

    // footer magic
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate(`/news?email=${email}`);
        console.log('sending email...')
    }

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <Fragment>
            <header className={(scrolled || isNavVisible) ? styles.scrolled : ''}>
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
                    <a target='_blank' href="https://web.facebook.com/EduSkillsAfricaConference/">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a target='_blank' href="https://x.com/EduSkillsAfrica?mx=2">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/eduskillsafrica-7273422bb/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a target='_blank' href="https://www.youtube.com/@esdevFoundationAfrica">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>

                <button className={styles.mobileMenu} onClick={toggleNav}>
                    {isNavVisible ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </button>

                {isNavVisible &&
                    <div className={styles.mobileLinks}>
                        {links.map((link, idx) => (
                            <NavigationItem
                                key={idx}
                                link={link.link}
                                name={link.name}
                            />
                        ))}
                    </div>
                }
            </header>

            <Outlet />

            <footer>
                <section className={styles.about}>
                    <div className={styles.logo}>
                        <img src="/icon.svg" alt="ARC-EDS logo" width={150} />
                    </div>

                    <p>
                        The Africa Regional Conference &
                        Exhibition on Education and Skills
                        Development (ARC-EDS) is an initiative
                        of ESDEV Foundation Africa.
                    </p>

                    <div className={styles.socialMediaLinks}>
                        <a target='_blank' href="https://web.facebook.com/EduSkillsAfricaConference/">
                            <i className="fab fa-facebook"></i>
                        </a>

                        <a target='_blank' href="https://x.com/EduSkillsAfrica?mx=2">
                            <i className="fab fa-x-twitter"></i>
                        </a>

                        <a target='_blank' href="https://www.linkedin.com/in/eduskillsafrica-7273422bb/">
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a target='_blank' href="https://www.youtube.com/@esdevFoundationAfrica">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </section>

                <section className={styles.links}>
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <div className={styles.linkLine}>
                            <p onClick={() => navigate("/")}>Home</p>
                            <p onClick={() => navigate("/about")}>About</p>
                            <p onClick={() => navigate("/exhibition")}>Exhibition</p>
                            <p onClick={() => navigate("/gallery")}>Gallery</p>
                            <p onClick={() => navigate("/news")}>News & Updates</p>
                            <p onClick={() => navigate("/past-events")}>Past Events</p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <div className={styles.linkLine}>
                            <p onClick={() => navigate("/faqs")}>FAQs</p>
                            <p onClick={() => navigate("/terms")}>Terms of Service</p>
                            <p onClick={() => navigate("/privacy")}>Privacy Policy</p>
                            <p onClick={() => navigate("/legal")}>Legal</p>
                        </div>
                    </div>
                </section>

                <section className={styles.newsletter}>
                    <h2>Stay up to date</h2>
                    <div className={styles.fieldContainer}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className={styles.sendBtn}><i className="fal fa-send"></i></button>
                    </div>
                </section>
            </footer>

            <div className={styles.copyright}>
                <p>Copyright &copy; {new Date().getFullYear()} Africa Regional Conference & Exhibition on Education and Skills Development. All Rights Reserved.</p>
            </div>
        </Fragment>
    )
}
