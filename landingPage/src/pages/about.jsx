import styles from '../styles/pages/about.module.css'

import Img01 from '../assets/about/img_01.webp'
import EsDev from '../assets/about/es.svg'

const Title = ({ title }) => <div className={styles.title}>{title}</div>

const Objective = ({ objective, style }) => {
    return (
        <div className={styles.objective} style={style}>
            <i className="fas fa-bullseye-arrow"></i>
            <p>{objective}</p>
        </div>
    )
}

const Audience = ({ audience, style }) => {
    return (
        <div className={styles.audience} style={style}>
            <i className="fal fa-circle"></i>
            <p>{audience}</p>
        </div>
    )
}

const FocusArea = ({ title, description }) => {
    return (
        <div className={styles.focusArea}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default function About() {
    const objectives = [
        {
            objective: `Deepen the promotion of entrepreneurial education by integrating 
            entrepreneurship and innovation into educational curricula across 
            Africa, equipping young people with the skills necessary for self-employment.
            `
        }, {
            objective: `Facilitate knowledge exchange by providing a platform for the 
            exchange of ideas, best practices, and experiences among educators, policymakers, 
            industry leaders, and young entrepreneurs.`
        }, {
            objective: `Showcase innovations by highlighting successful youth-led startups 
            and projects that address unemployment, offering inspiration and investment-ready 
            opportunities for stakeholders.`
        }, {
            objective: `Strengthen partnerships by fostering collaborations among educational 
            institutions, industry, government, and development partners to create a 
            supportive ecosystem for sustainable enterprises.`
        }, {
            objective: `Engage policymakers to create enabling environments that support 
            youth entrepreneurship and innovation, fostering investment opportunities 
            for impactful change.`
        }, {
            objective: `Explore the potential of quantum science and quantum technology 
            to drive youth entrepreneurship and create new job opportunities through 
            innovation in advanced technologies.`
        }
    ]

    const audiences = [
        { audience: `Government officials and legislators involved in education, labour, and economic development seeking practical, scalable solutions for youth unemployment.` },
        { audience: `Representatives from Technical Universities, technical institutions, and vocational training centres eager to transform curricula to meet modern demands.` },
        { audience: `Business executives, entrepreneurs, and innovators from various sectors seeking investment opportunities in scalable youth-led initiatives.` },
        { audience: `Aspiring and established young entrepreneurs, students, and youth organizations interested in mentorship, funding, and market access.` },
        { audience: `United Nations Specialized Agencies, international organizations, NGOs, and foundations focused on education and employment, offering funding and strategic support.` },
        { audience: `Venture capitalists, impact investors, and philanthropic organizations looking to fund innovative solutions with measurable social and economic returns.` },
    ]

    const focusAreas = [
        {
            title: "Fostering Innovative Educational Models for Entrepreneurship",
            description: "This sub-theme will explore educational models that cultivate entrepreneurship among the youth. It will showcase how Technical Universities, and allied institutions can enhance curricula to integrate entrepreneurship effectively, while presenting successful case studies and investment-ready educational innovations."
        }, {
            title: "Youth Empowerment through Skills Development",
            description: "This sub-theme will emphasize equipping young people with practical skills aligned with market demands. Discussions will focus on vocational training, apprenticeships, and partnerships with industry to ensure graduates are employment-ready. Investors will have the opportunity to explore scalable models for workforce development"
        }, {
            title: "Industry Collaboration and Employment Opportunities",
            description: "This sub-theme will strengthen partnerships between educational institutions and industry, highlighting internships, co-op programs, and industry-led projects that bridge the gap between education and employment. Discussions will identify actionable strategies for scaling these collaborations to create more employment opportunities"
        }, {
            title: "Policy and Institutional Support for Youth Innovation",
            description: "This sub-theme will advocate for supportive policies and institutional frameworks that encourage innovation and entrepreneurship among youth. It will explore funding opportunities, institutional reforms, and partnerships needed to support Africa’s next generation of entrepreneurs"
        }, {
            title: "Harnessing Green Entrepreneurship to Empower Youth for Sustainable Development and Employment",
            description: "This sub-theme will focus on green entrepreneurship as a sustainable employment pathway. It will highlight policies, training programs, and innovations that equip young people to lead eco-friendly businesses. Successful green enterprises and investment opportunities will be showcased"
        }, {
            title: "Quantum Science and Technology as a Catalyst for Youth Job Creation",
            description: "This sub-theme will explore how advancements in quantum science and technology can drive innovation and entrepreneurship among African youth. It will highlight opportunities for young people to leverage quantum technologies in fields such as computing, communications, and energy, and discuss strategies for integrating quantum science into education and industry collaborations. Successful global and regional examples will be showcased, emphasizing Africa’s potential to lead in this emerging field"
        }
    ]

    return (
        <main className={styles.aboutLayout}>
            <section className={styles.context}>
                <div className={styles.leftCol}>
                    <Title title="The Context" />
                    <p>
                        In the 2023 United Nations Report, Secretary-General
                        António Guterres acknowledges that only 12% of the 17
                        Sustainable Development Goals (SDGs) are on track to be
                        achieved by 2030.<br />
                        The report highlights that, without a significant
                        acceleration of efforts, meeting all the goals by the
                        deadline remains unlikely. Of particular concern is Goal
                        8, which focuses on inclusive and sustainable economic
                        growth, full and productive employment, and decent work
                        for all.<br />
                        For many African countries, achieving this goal appears
                        increasingly difficult, given that youth unemployment
                        exceeds 30% in several sub-Saharan nations. Meanwhile,
                        the United Nations projects Africa’s population to reach
                        2.5 billion by 2050, meaning nearly one-third of the world’s
                        population will reside on the continent within the next three
                        decades.<br />
                        This demographic shift presents both challenges and
                        opportunities. How should African governments respond? What
                        preparations are needed to harness the demographic dividend?
                        These critical questions underscore the significance of the
                        ARC-EDS initiative.
                    </p>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.imageContainer}>
                        <img src={Img01} alt="" />
                    </div>
                </div>
            </section>

            <section className={styles.aboutUs}>
                <div className={styles.leftCol}>
                    <div className={styles.imageContainer}>
                        <img src={Img01} alt="" />
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <Title title={'About The Conference'} />
                    <p>
                        The Africa Regional Conference and Exhibition
                        on Education and Skills Development (ARC-EDS) is
                        a flagship platform convened by ESDEV Foundation
                        Africa to foster dialogue, innovation, and
                        collaboration across the continent’s education
                        and skills ecosystem. Since its inception, ARC-EDS
                        has created space for policymakers, educators,
                        researchers, industry leaders, and youth to
                        address critical challenges and explore
                        opportunities at the intersection of education,
                        employment, and sustainable development. <br />
                        At the core of ARC-EDS is a commitment to equipping
                        Africa’s youth with future-ready skills, fostering
                        entrepreneurial mindsets, and strengthening technical
                        and vocational education and training (TVET) as a
                        catalyst for economic growth and job creation. Through
                        thought-provoking panel discussions, hands-on workshops,
                        immersive exhibitions, and capacity-building sessions,
                        ARC-EDS drives tangible action towards an inclusive
                        and sustainable education ecosystem.
                    </p>
                </div>
            </section>

            <section className={styles.conference}>
                <div className={styles.topRow}>
                    <div className={styles.imageContainer}>
                        <img src={Img01} alt="" />
                    </div>
                </div>

                <div className={styles.bottomRow}>
                    <Title title={'Conference Justification'} />
                    <p>
                        Youth unemployment continues to hinder economic growth
                        and social stability in Africa. Traditional education
                        systems often fall short in equipping students with the
                        practical skills demanded by today’s job market, resulting
                        in a significant gap between education and employment.
                        Entrepreneurship and innovation present alternative
                        pathways to job creation, offering scalable solutions
                        to empower young people to generate opportunities for
                        themselves and others. <br />
                        This conference provides an unparalleled platform for
                        stakeholders—including governments, donors, investors,
                        and industry—to collaborate on scalable interventions
                        that address youth unemployment while fostering sustainable
                        development. The 2025 ARC-EDS offers not just discussions
                        but actionable pathways and opportunities to invest in
                        Africa’s future workforce and innovators.
                    </p>
                </div>
            </section>

            <section className={styles.conferenceObj}>
                <div className={styles.leftCol}>
                    <Title title={'Conference Objectives'} />
                    <p>The 2025 ARC-EDS aims to achieve the following specific objectives:</p>
                    <div className={styles.objectives}>
                        {objectives.map((o, idx) =>
                            <Objective
                                key={idx}
                                objective={o.objective}
                                style={{ animationDelay: `${idx * 0.2}s` }}
                            />)}
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.imageContainer}>
                        <img src={Img01} alt="" />
                    </div>

                </div>
            </section>

            <section className={styles.target}>
                <Title title={'Target Audience'} />
                <p>The conference targets a diverse and influential audience, including:</p>

                <div className={styles.audienceContainer}>
                    <div className={styles.line}></div>
                    {audiences.map((a, idx) =>
                        <Audience
                            key={idx}
                            audience={a.audience}
                            style={{ animationDelay: `${idx * 0.2}s` }}
                        />)}
                </div>
            </section>

            <section className={styles.focus}>
                <div className={styles.leftCol}>
                    <Title title={'Focus Areas'} />
                    <p>
                        Our focus areas highlight the core themes that drive our work —
                        from innovation and skills development to sustainable solutions —
                        showing where we channel our expertise and impact.
                    </p>
                    <div className={styles.imageContainer}>
                        <img src={Img01} alt="" />
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.focusAreaContainer}>
                        {focusAreas.map((f, idx) => <FocusArea key={idx} title={f.title} description={f.description} />)}
                    </div>
                </div>
            </section>

            <section className={styles.motherCopmpany}>
                <div className={styles.topRow}>
                    <div className={styles.imageContainer}>
                        <img src={EsDev} alt="" />
                    </div>
                </div>
                <div className={styles.bottomRow}>
                    <p>
                        ESDEV Foundation Africa is a non-profit, Pan African Non-Governmental Organisation committed to
                        promoting quality education and skills development, innovative research, and lifelong
                        learning opportunities for Africa’s socio-economic transformation.
                        We are inspired by the vision and aspirations of the late Prof. Francis K. A. Allotey (the renowned
                        Ghanaian mathematical physicist and promoter of STEM education in Africa), who mentored the founding
                        partners of ESDEV Foundation Africa.<br />
                        We believe that Africa’s greatest resource is its people, therefore, investment in education and skills
                        development will empower the youth to address the multidimensional causes of poverty.
                    </p>
                </div>
            </section>
        </main>
    )
}
