import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { getSortedPostsData } from '../lib/posts';
import { HomeSection } from '../components/sections/home';
import { AboutSection } from '../components/sections/about';
import { Project } from '../components/sections/project';
import { Contact } from '../components/sections/contact';
import "animate.css/animate.min.css";

export async function getStaticProps(params) {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeSection />

            <AboutSection />

            <Project />

            <Contact />
        </div>
    )
}
