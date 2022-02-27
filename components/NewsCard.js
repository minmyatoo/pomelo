import Nav from "./Nav";
import styles from '../styles/Layout.module.css'
import {Container, Row, Col, Card, Text, Divider} from '@nextui-org/react';
import Meta from "./Meta";
import Link from "next/link";

const NewsCard = ({item}) => {
    let uri = item.uri.split('/');
    let uriValue = uri[3];
    return (
        <>
            <Link href="/article/[id]" as={`/article/${uriValue}`}>
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
                            <Text h6 color="white" css={{
                                position: 'absolute',
                                bgBlur: '#0f1114',
                                borderTop: '$borderWeights$light solid $gray700',
                                bottom: 0,
                                zIndex: 1,
                                p: 2,
                                m: 2,
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
            </Link>
        </>
    );
}
export default NewsCard