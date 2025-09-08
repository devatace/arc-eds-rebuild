import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/pages/home.module.css';

import { Fragment } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Astro from '../assets/landing/astro.webp';
import Slide1 from '../assets/landing/slide1.webp';
import Slide2 from '../assets/landing/slide2.webp';
import Slide3 from '../assets/landing/slide3.webp';

export default function Home() {
    return (
        <Fragment>
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
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={Slide1} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={Slide2} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={Slide3} />
                    </SwiperSlide>
                </Swiper>

                <div className={styles.cover}></div>

                <div className={styles.content}>
                    <h1>The Elephant In <br /> Our Community</h1>
                    <p>Let stories be shared!</p>
                    <button className={styles.cta}>Join Us Now!</button>
                </div>
            </section>

            <section className={styles.whoWeAre}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <div className={styles.line}></div>
                        <h3>Know About Us</h3>
                    </div>
                    <h2>Harnessing Potential, <br /> Shaping the Future</h2>
                    <div className={styles.text}>
                        <p>
                            In 2023, the UN warned that only 12% of the
                            global goals for 2030 are on track, with Africa
                            facing some of the toughest challenges—youth
                            unemployment, rapid population growth, and the
                            urgent need for inclusive economic opportunities.
                            At ARC-EDS, we see these challenges as
                            opportunities to drive transformation. Our
                            mission is to help harness Africa’s demographic
                            potential through innovation, skills, and
                            sustainable development.
                        </p>
                    </div>
                    <button className={styles.cta}><p>Learn More</p></button>
                </div>

                <div className={styles.media}>
                    <img src={Astro} alt="" />
                </div>
            </section>
        </Fragment>
    )
}
