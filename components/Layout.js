import Nav from "./Nav";
import styles from '../styles/Layout.module.css'
import {Container, Row, Col} from '@nextui-org/react';
import Meta from "./Meta";

const Layout = ({children}) => {
    return (
        <>
            <Meta/>
            <Nav/>
            <Container fluid>
                {children}
            </Container>
        </>
    )
}
export default Layout