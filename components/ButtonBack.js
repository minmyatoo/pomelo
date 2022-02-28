import Link from 'next/link'
import {Button, Grid, Row} from '@nextui-org/react';
const ButtonBack = ({name, url}) => {
    return (
        <>
            <Grid.Container gap={2}>
                <Row justify="space-between">
                    <Link href='/'><Button>{name}</Button></Link>
                    <Link href={url}><Button shadow color="gradient" auto>Read full article</Button></Link>
                </Row>
            </Grid.Container>

        </>

    )
}
export default ButtonBack