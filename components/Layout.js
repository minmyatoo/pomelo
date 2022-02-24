import Nav from "./Nav";
import styles from '../styles/Layout.module.css'
import {Container, Row, Col} from '@nextui-org/react';
import Header from "./Header";
import Head from "next/head";


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Mini News</title>
                <meta name='mike' content='web'/>
            </Head>
            <Nav/>

            <Container fluid>
                <main className={styles.main}>
                    {children}
                </main>
            </Container>
        </>
    )
}
export default Layout