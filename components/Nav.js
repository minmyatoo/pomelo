import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import {Card, Col, Grid, Text, Row, Button, Divider, Modal, Input} from "@nextui-org/react";
// Import the FontAwesomeIcon component
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {useModal} from "@nextui-org/react";

const Nav = () => {
    const { setVisible, bindings } = useModal();

    return (
        <>
            <nav className={navStyles.navbar}>
                <div className={navStyles.navbar__title}><Link href='/'>NYT News</Link></div>

                {/*<input type="text" className={navStyles.navbar__search} placeholder="Search..."/>*/}
                <div align='center'>
                    <FontAwesomeIcon
                        onClick={() => setVisible(true)}
                        icon={faSearch}
                        style={{fontSize: 25, color: "red"}}
                    />
                </div>
                <div className={navStyles.navbar__item}><Link href='/about'>About</Link></div>
                <div className={navStyles.navbar__item}><Link href='/movie'>Movie</Link></div>
            </nav>

            <Modal
                scroll
                fullScreen
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Search
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4}>
                        <Grid>

                            <Row>
                                <Input label="Search" type="search" />
                            </Row>
                            <Row>
                                <Button flat auto color="error" onClick={() => setVisible(false)}>
                                    Search
                                </Button>
                            </Row>
                        </Grid>

                    </Grid.Container>
                    {/*<Text  id="modal-description">*/}
                    {/*    <Input label="Search News..." placeholder="search news keywords" />*/}
                    {/*</Text>*/}
                </Modal.Body>
                <Modal.Footer>
                    <Button flat auto color="error" onClick={() => setVisible(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default Nav