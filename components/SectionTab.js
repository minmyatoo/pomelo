import Nav from "./Nav";
import styles from '../styles/SectionTab.module.css'
import {Container, Grid, Row, Col, Card, Text} from '@nextui-org/react';
import Head from "next/head";
import ArticleItem from "./ArticleItem";

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


const SectionTab = ({articles, sectionText}) => {//{children}
    console.log(articles)
    return (
        <>
            <h1 className={styles.head__text}>{sectionText}</h1>
            <Grid.Container gap={2} justify="center">
                <Grid xs={6}>

                    <NewsItem url="https://nextui.org/images/card-example-4.jpeg" title="Google"
                              description="thisistest"/>
                </Grid>
            </Grid.Container>
        </>
    )
}


export default SectionTab

