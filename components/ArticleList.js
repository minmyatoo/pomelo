
import {Grid} from "@nextui-org/react";
import NewsCard from "./NewsCard";
import NewsTextCard from "./NewsTextCard";
const ArticleList = ({articles}) => {
    // console.log(articles);
    return (
        <>
            <Grid.Container gap={2} justify="flex-start">
                {articles !== null && articles.slice(0, 12).map((item, index) => (
                    <Grid xs={6} sm={3} key={item.id}>
                        {item.media.length > 0 ? (<NewsCard item={item}/>) : (<NewsTextCard item={item}/>)}
                    </Grid>
                ))}
            </Grid.Container>
        </>
    )
}
export default ArticleList

