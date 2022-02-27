import Link from 'next/link'
import {Button, Card, Col, Divider, Grid, Row, Text} from "@nextui-org/react";
const NewsTextCard = ({item}) => {
    //console.log(article)
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
export default NewsTextCard
