import {useRouter} from "next/router";
import ButtonBack from "../../../components/ButtonBack";
import Meta from "../../../components/Meta";
import React from "react";
import {Container, Row, Col, Card, Text, Spacer} from '@nextui-org/react';
import {SEARCH_ENDPOINT,NYTAPI} from "../../../config";


const article = ({article}) => {
    //const router = useRouter();
    //const {id} = router.query;
    return (
        <>
            <Meta title="News"/>
            <Spacer y={1}/>
            <Container fluid>
                <Row justify="center" align="center">
                    <Text h3 color="black" css={{p: 2, m: 4}}>
                        {article.response.docs[0].headline.main}
                    </Text>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        #{article.response.docs[0].section_name} {article.response.docs[0].subsection_name != null && `#${article.response.docs[0].subsection_name}`}
                    </Col>
                    <Col>
                        {article.response.docs[0].byline.original}
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Text>
                        {article.response.docs[0].lead_paragraph}
                    </Text>
                </Row>
            </Container>
            <br/>
            <ButtonBack name="Back" url={article.response.docs[0].web_url}/>
        </>

    )
}
const encode = (uri) => {
    return encodeURIComponent(`"_id": "nyt://article/${uri}"`)
}
export const getServerSideProps = async (context) => {
    var queryURL = `${SEARCH_ENDPOINT}?fq=_id%3A%22nyt%3A%2F%2Farticle%2F${context.params.id}%22&api-key=${NYTAPI}`;
    const res = await fetch(queryURL)
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}


export default article