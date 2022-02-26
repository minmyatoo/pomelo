import articleItem from "./ArticleItem";
import articleStyles from '../styles/Article.module.css'
import ArticleItem from "./ArticleItem";
import {Card, Col, Grid, Text, Row, Button, Divider} from "@nextui-org/react";

const NewsTextCard = ({item}) => {
    return (
        <>
            <Card hoverable clickable>
                <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
                    <Col>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="yellow"
                        >
                            MOST VIEWED
                        </Text>
                        <Text h6 color="white">
                            {item.title}
                        </Text>
                    </Col>
                </Card.Header>
                <Divider/>
                <Card.Body css={{p: 2, m: 2}}>
                    <br/>
                    <Divider/>
                    <Row wrap='wrap' justify="space-between">
                        <Text size={15} css={{p: 2}}>
                            {item.abstract}
                        </Text>
                    </Row>
                </Card.Body>
                <Divider/>
                <Card.Footer justify="flex-start">
                    <Row justify="flex-end">
                        <Button size="sm" light>#{item.section}</Button>
                        <Button size="sm" color="secondary">Read</Button>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    );
}
const NewsCard = ({item}) => {
    return (
        <>
            <Card hoverable clickable>
                <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
                    <Col>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="yellow"
                        >
                            MOST VIEWED
                        </Text>
                    </Col>
                </Card.Header>
                <Divider/>
                <Card.Body css={{p: 2, m: 2}}>
                    <Card.Image
                        objectFit="cover"
                        src={item.media.length > 0 ? item.media[0]['media-metadata'][2].url : 'No Image'}
                        width='100%'
                        height={150}
                        alt={item.media.length > 0 ? item.media[0].caption : ' '}
                    />

                    <br/>
                    <Divider/>

                    <Row wrap='wrap' justify="space-between">
                        <Text h6 color="white"  css={{
                            position: 'absolute',
                            bgBlur: '#0f1114',
                            borderTop: '$borderWeights$light solid $gray700',
                            bottom: 0,
                            zIndex: 1,
                            p: 2,
                            m:2,
                        }}>
                           {item.title}
                        </Text>
                    </Row>
                    <Row wrap='wrap' justify="space-between">
                        <Text size={9} css={{p: 2}}>
                            {item.published_date} | {item.media.length > 0 ? item.media[0].copyright : ' '}
                        </Text>
                    </Row>
                    <Row wrap='wrap' justify="space-between">
                        <Text size={13} css={{p: 2}}>
                           {item.abstract}
                        </Text>
                    </Row>
                </Card.Body>
                <Divider/>
                <Card.Footer justify="center">
                    <Row justify="flex-end">
                        <Text>
                            #{item.section}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    );

}


const ArticleList = ({articles}) => {
    console.log(articles);
    return (
        <>
            <Grid.Container gap={2} justify="flex-start">
                {articles !== null && articles.slice(0, 12).map((item, index) => (
                    <Grid xs={6} sm={3} key={item.id}>
                        {item.media.length > 0 ? ( <NewsCard item={item}/>) : (<NewsTextCard item={item}/>)}
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