import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from "../components/ArticleList";


export default function Home({articles}) {
    console.log(articles)
    return (
        <>
        <div>
            <Head>
                <title>Mini News</title>
                <meta name='mike' content='web'/>
            </Head>
            <h1 className={styles.head__text}>Most Viewed by Section 👋</h1>
            <ArticleList articles={articles} />
            <hr/>
            <h1 className={styles.head__text}>Most Viewed by Time Period 👋</h1>
                <ArticleList articles={articles} />


        </div>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
    const articles = await res.json();

    return {
        props: {
            articles
        }
    }
}
