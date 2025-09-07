import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/pages/home.module.css'

import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import Slide1 from '../assets/landing/slide1.webp'
import Slide2 from '../assets/landing/slide2.webp'
import Slide3 from '../assets/landing/slide3.webp'

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
        </Fragment>
    )
}
