import Link from 'next/link'
import {Card, Col, Grid, Text} from "@nextui-org/react";

const NewsItem = ({url, title, description}) => {
    return (
        <>
            <Card cover>
                <Card.Header css={{position: 'absolute', zIndex: 1, top: 5, left: 5}}>
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
                        <Text h5 color="white">
                            {description}
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
const ArticleItem = ({article}) => {
    //console.log(article)
    return (
        <>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
                <NewsItem url='https://nextui.org/images/card-example-3.jpeg' title={article.title} description={article.abstract}/>
            </Link>
        </>

    )
}
export default ArticleItem
{/*dd.results[0].media[0]['media-metadata'][1]*/
}
// <a className={articleStyle.card} >
//     <h3>{article.title} &rarr;</h3>
// <p>{article.body} &rarr;</p>
// </a>