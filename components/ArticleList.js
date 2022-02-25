import articleItem from "./ArticleItem";
import articleStyles from '../styles/Article.module.css'
import ArticleItem from "./ArticleItem";
import {Card, Col, Grid, Text, Row} from "@nextui-org/react";

const ArticleList = ({articles}) => {
    console.log(articles);
    console.log(articles[1].media[0]['media-metadata'][1].url);

    return (

        <>
            <Grid.Container gap={2} justify="flex-start">
                {articles.map((item, index) => (
                    <Grid xs={6} sm={3} key={item.id}>
                        <Card hoverable clickable>
                            <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
                                <Col>
                                    <Text
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                        color="#9E9E9E"
                                    >
                                        MOST VIEWED
                                    </Text>
                                    <Text h3 color="white">
                                        {item.title}
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Body css={{p: 0}}>
                                <Card.Image
                                    objectFit="cover"
                                    src={articles[0].media[0]['media-metadata'][1].url}
                                    width='100%'
                                    height={140}
                                    alt={item.type}
                                />

                            </Card.Body>
                            <Card.Footer justify="flex-start">
                                <Row wrap='wrap' justify="space-between">
                                    <Text b>
                                        {item.abstract}
                                    </Text>
                                    <Text css={{color: "$accents4", fontWeight: "$semibold"}}>
                                        Link
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>


        </>
    )
}
export default ArticleList

{/*{articles.map((article) => (*/
}
{/*    <ArticleItem article={article} key={article.id}/>*/
}
{/*))}*/
}