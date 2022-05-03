import { useState, useEffect } from 'react';
import styles from "./css/project.module.css";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaStar } from "react-icons/fa";

const FaStarColored = () => {
    return (
        <FaStar color='rgb(255, 227, 12)' />
    )
}

const projectData = {
    allproject: {
        src: ['', '', '', '', '', '']
    },
    react: {
        src: ['/img/reactproject/a.jpg', '/img/reactproject/a1.jpg', '/img/reactproject/a2.jpg', '/img/reactproject/a3.jpg', '/img/reactproject/a4.jpg', '/img/reactproject/a5.jpg']
    },
    javascript: {
        src: ['/img/jsproject/js1.jpg', '/img/jsproject/js2.jpg', '/img/jsproject/js3.jpg', '/img/jsproject/js4.jpg', '/img/jsproject/js5.jpg', '/img/jsproject/js6.jpg'],
    },
    flutter: {
        src: ['/img/flutterproject/fkutter1.jpg', '/img/flutterproject/flutter2.jpg', '/img/flutterproject/flutter3.png', '/img/flutterproject/flutter4.png', '/img/flutterproject/flutter5.png', '/img/flutterproject/flutter6.png'],
    }
}

const projects = [
    {
        name: "Project 1",
        description: "Some descriptiion",
        rate: <><FaStar /></>,
        src: "/img/a.jpg",
        key: 1
    },
    {
        name: "Chat app",
        description: "Beautiful designed chat app built with react and express",
        rate: <div><FaStarColored /><FaStarColored /><FaStarColored /></div>,
        src: "/img/b.jpg",
        key: 2
    },
    {
        name: "Project 1",
        description: "Some descriptiion",
        rate: <><FaStar /></>,
        src: "/img/c.jpg",
        key: 3
    },
    {
        name: "Project 1",
        description: "Some descriptiion",
        rate: <><FaStar /></>,
        src: "/img/d.jpg",
        key: 4
    },
    {
        name: "Project 1",
        description: "Some descriptiion",
        rate: <><FaStar /></>,
        src: "/img/e.png",
        key: 5
    },
    {
        name: "Project 1",
        description: "Some descriptiion",
        rate: <><FaStar /></>,
        src: "/img/f.jpg",
        key: 6
    }
]

function Description({ title, description }) {
    return (
        <article>
            <h1 className={styles.titleAnimated} >{title}</h1>
            <p className={styles.pAnimated}>{description}</p>
        </article>

    )
}

export function Project() {
    const [load, setload] = useState(false);

    useEffect(() => {
        setload(true);
    }, [load]);

    const [hover, setdata] = useState({
        project1: true,
        project2: false,
        project3: false,
        project4: false,
        project5: false,
        project6: false
    });

    const [project, setproject] = useState(projectData.allproject);
    const [currentTab, setcurrentTab] = useState(0);

    const showProject = (id) => {
        if (id === 0) {
            setproject(projectData.allproject)
            setcurrentTab(id)
        } else if (id === 1) {
            setproject(projectData.react)
            setcurrentTab(id)
        } else if (id === 2) {
            setproject(projectData.javascript)
            setcurrentTab(id)
        } else {
            setproject(projectData.flutter)
            setcurrentTab(id)
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.sectionDes} >
                <h1 id='project' className={styles.project}> Project</h1>
            </div>
            <div className={styles.tab}>
                <div
                    className={(currentTab === 0) ? styles.currentTabItem : styles.tabItem}
                    onClick={() => showProject(0)}
                >All</div>
                <div
                    className={(currentTab === 1) ? styles.currentTabItem : styles.tabItem}
                    onClick={() => showProject(1)}
                >React/Next</div>
                <div
                    className={(currentTab === 2) ? styles.currentTabItem : styles.tabItem}
                    onClick={() => showProject(2)}
                >JavaScript</div>
                <div
                    className={(currentTab === 3) ? styles.currentTabItem : styles.tabItem}
                    onClick={() => showProject(3)}

                >Flutter</div>
            </div>
            <div className={styles.grid}>

                {
                    projects.map(project => {
                        return (

                            <div
                                className={styles.projectContainer} key={project.key
                                }

                            >
                                {
                                    load
                                        ? <AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__bounceOut" >
                                            <Image
                                                src={project.src}
                                                width={500}
                                                height={300}
                                                alt=''
                                                className={styles.cardProject}
                                                layout='responsive'
                                            />
                                        </AnimationOnScroll>
                                        : null
                                }


                                <article className={styles.article}>
                                    {
                                        load
                                            ? <AnimationOnScroll animateIn="animate__bounceIn"  >
                                                <h1 className={styles.titleAnimated} >{project.name}{project.rate}</h1>
                                            </AnimationOnScroll>
                                            : null
                                    }
                                    {
                                        load
                                            ? <AnimationOnScroll animateIn="animate__bounceIn" >
                                                <p className={styles.pAnimated}>{project.description}</p>
                                            </AnimationOnScroll>
                                            : null
                                    }


                                </article>


                            </div>








                        )
                    })
                }



            </div>
        </section >
    )
}