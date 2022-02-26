import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from "../components/ArticleList";
import {Container, Grid, Row, Col, Card, Text} from '@nextui-org/react';
import ArticleItem from "../components/ArticleItem";
import {server} from "../config";
import Layout from "../components/Layout";

export default function Home({articles, articlesSeven,articlesThirty}) {
    console.log(server);
    return (
        <>
            <Container gap={0}>
                <h1 className={styles.head__text}>Trending <span><svg height="72" width="100"> <circle fill="#ff0000" stroke="none" cx="60" cy="60" r="12"> <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" /> </circle> </svg> </span></h1>
                <hr/>
                <h3 className={styles.head__text}>Most viewed in 24 Hours </h3>
                <ArticleList articles={articles.results}/>
                <hr/>
                <h3 className={styles.head__text}>Most viewed in  7 Days</h3>
                <ArticleList articles={articlesSeven.results}/>
                <hr/>
                <h3 className={styles.head__text}>Most viewed in 30 Days</h3>
                <ArticleList articles={articlesThirty.results}/>
            </Container>

        </>
    )
}
export const getStaticProps = async () => {
    const oneRes = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo`)
    const sevenRes = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo`)
    const thirtyRes = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo`)
    const articles = await oneRes.json();
    const articlesSeven = await sevenRes.json();
    const articlesThirty = await thirtyRes.json();
    return {
        props: {
            articles,
            articlesSeven,
            articlesThirty,
        }
    }
}