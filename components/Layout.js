import Nav from "./Nav";
import {Container} from '@nextui-org/react';
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