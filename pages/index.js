import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from "../components/ArticleList";
import Section from "../components/SectionTab";
import SectionTab from "../components/SectionTab";
import {Container, Grid, Row, Col, Card, Text} from '@nextui-org/react';
import ArticleItem from "../components/ArticleItem";

export default function Home({articles, articles1}) {

    return (
        <>
            <Container gap={0}>
                <h1 className={styles.head__text}>Trending</h1>
                <hr/>
                <h3 className={styles.head__text}>Most Popular</h3>
                <ArticleList articles={articles.results}/>
                <hr/>
                <h3 className={styles.head__text}>Most Popular</h3>
                <ArticleList articles={articles1.results}/>
                <hr/>
            </Container>
        </>
    )
}
export const getStaticProps = async () => {
    const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo`)
    const res1 = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo`)
    const articles = await res.json();
    const articles1 = await res1.json();
    return {
        props: {
            articles,
            articles1,
        }
    }
}