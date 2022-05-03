import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title} </title>
            </Head>
            <h1>{postData.date} </h1>
            {postData.date}
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
};