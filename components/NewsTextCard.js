import {Button, Card, Col, Divider, Row, Text} from "@nextui-org/react";
import Link from "next/link";
const NewsTextCard = ({item}) => {
    let uri = item.uri.split('/');
    let uriValue = uri[3];
    //console.log(article)
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
                            color="red"
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
                    <Row wrap='wrap' justify="flex-start">
                        <Text size={15} css={{p: 20}}>
                            {item.abstract}
                        </Text>
                    </Row>
                </Card.Body>
                <Divider/>
                <Card.Footer justify="space-between">
                    <Row justify="flex-end">
                        <Button size="sm" light>#{item.section}</Button>

                    </Row>
                </Card.Footer>
            </Card>
            </Link>
        </>
    );
}
export default NewsTextCard
