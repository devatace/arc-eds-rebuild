import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/pages/home.module.css';

import { Fragment } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Counter from '../lib/counter';

import Astro from '../assets/landing/astro.webp';
import Map from '../assets/landing/map.png';
import Slide1 from '../assets/landing/slideshow/slide1.webp';
import Slide2 from '../assets/landing/slideshow/slide2.webp';
import Slide3 from '../assets/landing/slideshow/slide3.webp';
import Slide4 from '../assets/landing/slideshow/slide4.webp';
import Slide5 from '../assets/landing/slideshow/slide5.webp';
import Slide6 from '../assets/landing/slideshow/slide6.webp';
import Slide7 from '../assets/landing/slideshow/slide7.webp';
import Slide8 from '../assets/landing/slideshow/slide8.webp';
import Slide9 from '../assets/landing/slideshow/slide9.webp';
import Slide10 from '../assets/landing/slideshow/slide10.webp';
import NewsMain from '../assets/landing/news-main.webp';
import ESDev from '../assets/landing/es.svg';

export default function Home() {
    const slides = [
        {
            id: 1,
            img: Slide1,
        },
        {
            id: 2,
            img: Slide2,
        },
        {
            id: 3,
            img: Slide3,
        },
        {
            id: 4,
            img: Slide4,
        },
        {
            id: 5,
            img: Slide5,
        },
        {
            id: 6,
            img: Slide6,
        },
        {
            id: 7,
            img: Slide7,
        },
        {
            id: 8,
            img: Slide8,
        },
        {
            id: 9,
            img: Slide9,
        },
        {
            id: 10,
            img: Slide10,
        },
    ]

    return (
        <main className={styles.homeLayout}>
            <section className={styles.heroSection}>
                <Swiper
                    direction={'vertical'}
                    modules={[Autoplay]}
                    className={styles.swiper}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className={styles.swiperSlide}>
                            <img src={slide.img} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={styles.cover}></div>

                <div className={styles.content}>
                    <h1>2025 ARC-EDS & IYQ<br />Global Event</h1>
                    <button className={styles.cta}>Check it Out!</button>
                </div>
            </section>

            <section className={styles.stats}>
                <div className={styles.stat}>
                    <Counter target={2000} plus={true} />
                    <span className={styles.description}>In-Person & Online Attendees</span>
                </div>

                <hr />

                <div className={styles.stat}>
                    <Counter target={50} plus={true} />
                    <span className={styles.description}>Exhibitions</span>
                </div>

                <hr />

                <div className={styles.stat}>
                    <Counter target={2} />
                    <span className={styles.description}>Conferences</span>
                </div>
            </section>

            <section className={styles.whoWeAre}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Know About Us</h1>
                    </div>
                    <h2>Harnessing Potential, Shaping the Future</h2>
                    <div className={styles.text}>
                        <p>
                            The Africa Regional Conference and Exhibition
                            on Education and Skills Development (ARC-EDS)
                            is a flagship platform convened by ESDEV
                            Foundation Africa to foster dialogue,
                            innovation, and collaboration across
                            the continent’s education and skills
                            ecosystem. Since its inception, ARC-EDS has
                            created space for policymakers, educators,
                            researchers, industry leaders, and youth to
                            address critical challenges and explore
                            opportunities at the intersection of education,
                            employment, and sustainable development.
                        </p>
                    </div>
                    <button className={styles.cta}><p>Learn More</p></button>
                </div>

                <div className={styles.media}>
                    <img src={Astro} alt="" />
                </div>

                <div className={styles.backgroundImg}>
                    <img src={Map} alt="world map" />
                </div>
            </section>

            <section className={styles.exhibitionSection}>
                <h1>Exhibitions</h1>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <i className="fal fa-wrench"></i>
                        <h2>TVET Institutions</h2>
                        <p>
                            Innovations and entrepreneurial models
                            emerging from Individuals Technical
                            Institutions
                        </p>
                    </div>

                    <div className={styles.card}>
                        <i className="fal fa-solar-system"></i>
                        <h2>STEM & Emerging Technologies</h2>
                        <p>
                            A unique opportunity to showcase
                            frontier STEM & Emerging Technologies
                        </p>
                    </div>

                    <div className={styles.card}>
                        <i className="fal fa-users"></i>
                        <h2>The General Public</h2>
                        <p>
                            For companies, organizations and
                            startups to showcase their products
                            and services
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.news}>
                <div className={styles.title}>
                    <h3>News & Updates</h3>
                    <p>Stay ahead with our latest stories, insights, and announcements.</p>
                </div>

                <section className={styles.newsContainer}>
                    <div className={styles.mainNews}>
                        <div className={styles.image}>
                            <img src={NewsMain} alt="" />
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.title}>
                                ESDEV Foundation Africa and GAEC Strengthen Collaboration for IYQ2025 and STEM Advancement
                            </h3>
                            <p className={styles.summary}>
                                On February 10, 2025, the leadership of ESDEV
                                Foundation Africa held a strategic meeting
                                with the Director-General and team of the
                                Ghana
                            </p>
                        </div>

                        <div className={styles.actions}>
                            <span><p>Aug 18, 2024</p></span>
                            <button className={styles.readMoreBtn}>
                                <p>Read More</p>
                            </button>
                        </div>
                    </div>

                    <section className={styles.otherNews}>
                        <div className={styles.newsCard}>
                            <div className={styles.image}>
                                <img src={Astro} alt="" />
                            </div>

                            <div className={styles.content}>
                                <h3>Atronut Falls fromo Space and breaks his back</h3>
                                <p>
                                    Astronaut Neil Armstrong was the first person to walk on the moon
                                    Astronaut Neil Armstrong was the first person to walk on the moon
                                </p>
                                <span><p>Aug 18, 2024</p></span>
                            </div>
                        </div>
                        <div className={styles.newsCard}>
                            <div className={styles.image}>
                                <img src={Astro} alt="" />
                            </div>

                            <div className={styles.content}>
                                <h3>Atronut Falls fromo Space and breaks his back</h3>
                                <p>
                                    Astronaut Neil Armstrong was the first person to walk on the moon
                                    Astronaut Neil Armstrong was the first person to walk on the moon
                                </p>
                                <span><p>Aug 18, 2024</p></span>
                            </div>
                        </div>
                        <div className={styles.newsCard}>
                            <div className={styles.image}>
                                <img src={Astro} alt="" />
                            </div>

                            <div className={styles.content}>
                                <h3>Atronut Falls fromo Space and breaks his back</h3>
                                <p>
                                    Astronaut Neil Armstrong was the first person to walk on the moon
                                    Astronaut Neil Armstrong was the first person to walk on the moon
                                </p>
                                <span><p>Aug 18, 2024</p></span>
                            </div>
                        </div>
                        <div className={styles.newsCard}>
                            <div className={styles.image}>
                                <img src={Astro} alt="" />
                            </div>

                            <div className={styles.content}>
                                <h3>Atronut Falls fromo Space and breaks his back</h3>
                                <p>
                                    Astronaut Neil Armstrong was the first person to walk on the moon
                                    Astronaut Neil Armstrong was the first person to walk on the moon
                                </p>
                                <span><p>Aug 18, 2024</p></span>
                            </div>
                        </div>
                    </section>
                </section>
            </section>

            <section className={styles.motherCompany}>
                <div className={styles.image}>
                    <img src={ESDev} alt="" />
                </div>
                <p>ARC-EDS is a subsidiary of ESDEV Foundation Africa fueled by a passion for innovation and a commitment to excellence.</p>
            </section>

            <section className={styles.sponsorship}>
                <div className={styles.content}>
                    <div className={styles.leftCol}>
                        <span>Join Us</span>
                        <h2>Become a Sponsor</h2>
                        <p>
                            Partner with us to support innovation, skills development, and sustainable
                            growth across Africa. Together, we can create lasting impact.
                        </p>
                    </div>

                    <div className={styles.rightCol}>
                        <button className={styles.cta}>Sponsor Us</button>
                        <button className={styles.learnMoreBtn} onClick={() => navigate("/about")}>Learn More <i className="fal fa-arrow-up-right"></i></button>
                    </div>
                </div>
            </section>
        </main>
    )
}
