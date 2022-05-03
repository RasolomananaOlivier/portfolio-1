import styles from "./css/about.module.css";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FaAlignRight, FaHome, FaPhone, FaProjectDiagram, FaRProject, FaUser, } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"


export function AboutSection() {
    const [showNavbar, setshowNavbar] = useState(false);

    const [load, setload] = useState(false);

    useEffect(() => {
        setload(true);
    }, [load]);

    const ref = useRef()
    useEffect(() => {
        ref.current = document.getElementById('nav');
    }, []);

    const handleClick = () => {
        setshowNavbar(!showNavbar)
        let class1 = ref.current.classList.contains("navExpand")
        console.log(class1);
        if (!class1) {
            ref.current.classList.add("navExpand")

        } else {
            ref.current.classList.remove("navExpand")

        }
        console.log(ref.current.classList);
    }


    return (
        <section >
            <nav id="nav" className="nav" >

            </nav>
            <FaAlignRight onClick={() => handleClick()} className='menuIcon' />

            {
                showNavbar ?
                    <ul className={styles.sticky} >
                        <a href="#home" className="homeIcon" ><FaHome /></a>
                        <a href="#project" className="projectIcon" ><FaProjectDiagram /></a>
                        <a href="#about" className="aboutIcon"><FaUser /> </a>
                        <a href="#contact" className="contactIcon"><FaPhone /></a>
                    </ul> :
                    null
            }

            <div className="titlePage" id='about'>

            </div>
            <div className={styles.sectionDes} >
                <h1 id='project' className={styles.project}> Project</h1>
            </div>
            <div className={styles.outerContainer}>
                <div className={styles.cellOne}>
                    <Image
                        src="/portfolio.svg"
                        width={500 + 'rem'}
                        height={650 + 'rem'}
                        alt='Olivier Rasolomanana'
                        layout="responsive"

                    />


                </div>
                <div className={styles.cellTwo} >
                    <div className={styles.profil} >
                        {
                            load
                                ? <AnimationOnScroll animateIn="animate__bounceInRight"  >
                                    <h2 className={styles.header}>Who{"'"}s this guy ?</h2>
                                </AnimationOnScroll>
                                : null
                        }

                        {
                            load
                                ? <AnimationOnScroll animateIn="animate__bounceInRight"  >
                                    <p className={styles.bio}>
                                        I{"'"}m a Full-Stack Developer form Madagascar. But
                                        I have serious passion for UI effects, animations, creating intuitive and dynamic user experiences.
                                        I love creating strong Back-End for all my front-end projects.

                                    </p>
                                </AnimationOnScroll>
                                : null
                        }
                    </div>
                    <div className={styles.outerSkillContainer}>
                        {load
                            ?
                            [{
                                name: 'Html',
                                progress: 80,

                            },
                            {
                                name: 'css',
                                progress: 80
                            },
                            {
                                name: 'react',
                                progress: 80
                            },
                            {
                                name: 'nodejs',
                                progress: 80
                            },
                            {
                                name: 'flutter',
                                progress: 80
                            },
                            {
                                name: 'mysql',
                                progress: 80
                            },
                            ].map(skill => (
                                <AnimationOnScroll animateIn="animate__bounceIn" key={skill.name} >
                                    <div className={styles.skillContainer}>
                                        <div className={styles.skillName}>
                                            {skill.name}
                                        </div>
                                        <div className={styles.progressContainer} >
                                            <CircularProgressbar value={skill.progress} text={`${skill.progress}%`} />
                                        </div>


                                    </div>

                                </AnimationOnScroll>
                            ))

                            : null
                        }
                    </div>



                </div>

            </div>

            <div className={styles.cardContainer}>
                <h1>What kind of website I can build ?</h1>


                <div className={styles.cardGrid}>
                    {
                        load
                            ? <AnimationOnScroll animateIn="animate__lightSpeedInLeft">
                                <div className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <Image
                                            alt=""
                                            src='/icons/rocket.svg'

                                            width={90}
                                            height={90}
                                        />

                                    </div>
                                    <h1 className={styles.cardTitle}>
                                        Fast
                                    </h1>
                                    <p className={styles.cardDescription}>
                                        I have serious passion for UI effects, animations and
                                        creating intuitive, dynamic user experiences
                                    </p>
                                </div>
                            </AnimationOnScroll>
                            : null
                    }
                    {
                        load
                            ? <AnimationOnScroll animateIn="animate__lightSpeedInLeft" >
                                <div className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <Image
                                            alt=""
                                            src='/icons/shield.svg'

                                            width={90}
                                            height={90}
                                        />


                                    </div>
                                    <h1 className={styles.cardTitle}>
                                        Secure
                                    </h1>
                                    <p className={styles.cardDescription}>
                                        I have serious passion for UI effects, animations
                                        and creating intuitive, dynamic user experiences
                                    </p>
                                </div>
                            </AnimationOnScroll>
                            : null
                    }

                    {
                        load
                            ? <AnimationOnScroll animateIn="animate__lightSpeedInLeft"  >
                                <div className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <Image
                                            alt=""
                                            src='/icons/responsive2.svg'

                                            width={90}
                                            height={90}
                                        />


                                    </div>
                                    <h1 className={styles.cardTitle}>
                                        Responsive
                                    </h1>
                                    <p className={styles.cardDescription}>
                                        I have serious passion for UI effects, animations
                                        and creating intuitive, dynamic user experiences
                                    </p>
                                </div>
                            </AnimationOnScroll>
                            : null
                    }
                    {
                        load
                            ? <AnimationOnScroll animateIn="animate__lightSpeedInLeft">
                                <div className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <Image
                                            alt=""
                                            src='/icons/dynamic.svg'

                                            width={90}
                                            height={90}
                                        />


                                    </div>
                                    <h1 className={styles.cardTitle}>
                                        Dynamic
                                    </h1>
                                    <p className={styles.cardDescription}>
                                        I have serious passion for UI effects, animations
                                        and creating intuitive, dynamic user experiences
                                    </p>
                                </div>
                            </AnimationOnScroll>
                            : null
                    }
                </div>
            </div>
        </section >
    )
}