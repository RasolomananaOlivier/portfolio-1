import styles from "./css/home.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export function HomeSection() {
    const [load, setload] = useState(false);

    useEffect(() => {
        setload(true);
    }, [load]);

    return (
        <section id='home'>
            <div className={styles.container}>


                <div className={styles.text}>
                    {
                        load
                            ? <AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__bounceOut" >
                                Hello , I{"'"}m  <span className={styles.name}> Olivier</span>.
                            </AnimationOnScroll>
                            : null
                    }


                </div>
                <div className={styles.text}>
                    {
                        load
                            ? <AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__bounceOut" >
                                I{"'"}m a full-stack developper.
                            </AnimationOnScroll>
                            : null
                    }
                </div>

                {
                    load
                        ? <AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__bounceOut" >
                            <a href="#about" >
                                <button className={styles.button}>
                                    Learn more
                                    <FaArrowDown className={styles.arrowDown} />
                                </button>
                            </a>

                        </AnimationOnScroll>
                        : null
                }

            </div>
        </section >
    )
}