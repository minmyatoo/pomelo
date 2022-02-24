import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from "../components/ArticleList";
import Section from "../components/SectionTab";
import SectionTab from "../components/SectionTab";
import {Container, Grid, Row, Col, Card, Text} from '@nextui-org/react';
import ArticleItem from "../components/ArticleItem";

const NewsItem = ({url, title, description}) => {
    return (
        <>
            <Card cover>
                <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
                    <Col>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                        >
                            MOST VIEWED
                        </Text>
                        <Text h4 color="white">
                            {title}
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Image
                    src={url}
                    height={340}
                    width="100%"
                    alt="Card image background"
                />
            </Card>
        </>

    );
}


export default function Home({articles}) {

    return (
        <>
            <h1 className={styles.head__text}>Most Viewed by Section 👋</h1>
            <ArticleList articles={articles.results}/>
            <hr/>
            <h1 className={styles.head__text}>Most Viewed by Time Period 👋</h1>
            <ArticleList articles={articles.results}/>

        </>
    )
}

// export const getStaticProps = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2`)
//     const articles = await res.json();
//
//     return {
//         props: {
//             articles
//         }
//     }
// }

export const getStaticProps = async () => {
    const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo`)
    const articles = await res.json();
    return {
        props: {
            articles
        }
    }
}