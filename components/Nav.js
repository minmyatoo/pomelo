import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import React, {useState} from "react";
import axios from "axios";
import {Card, Grid, Text, Row, Button, Divider, Modal, Input, useModal} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {SEARCH_ENDPOINT, NYTAPI, NEWS_IMG_URL} from "../config";


const Nav = () => {
    const {setVisible, bindings} = useModal();
    const [APIData, setAPIData] = useState([])
    let [searchInput, setSearchInput] = useState('');
    const getArticle = () => {
        axios
            .get(`${SEARCH_ENDPOINT}?sort=newest&q=${searchInput}&api-key=${NYTAPI}`)
            .then(response => {
                if (response.data.response.docs.length === 0) {
                    setAPIData([]);
                } else {
                    setAPIData(response.data.response.docs);
                }

            });
    };


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleChange(e.target.value.toLowerCase());

        }
    };

    const handleChange = (term) => {
        let newInput = term;
        if (newInput) {
            searchInput = newInput;
            getArticle();
        }
    };

    return (
        <>
            <div className={navStyles.navbar}>
                <div className={navStyles.navbar__title}><Link href='/'>NYT News</Link></div>
                <div className={navStyles.navbar__item}>
                    <FontAwesomeIcon
                        onClick={() => setVisible(true)}
                        icon={faSearch}
                        style={{fontSize: 25, color: "red"}}
                    />
                </div>
            </div>

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
                        NYT News Search
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input label="Search" type="search" size="xl" placeholder="Type search News terms and Please Enter"
                           onKeyPress={handleKeyPress}/>
                    <Divider/>
                    <Text size={18}>
                        Search result : {APIData.length}
                    </Text>
                    <Grid.Container gap={2} justify="center">
                        {APIData.length > 0 ? APIData.map((item) => {
                                return (
                                    <>
                                        <Grid xs={3} key={item.uri}>
                                            <Card bordered css={{mw: "330px"}}>
                                                <Text h4>{item.abstract}</Text>

                                                {item.multimedia.length > 1 &&
                                                <Card.Image
                                                    objectFit="cover"
                                                    src={`${NEWS_IMG_URL}` + item.multimedia[0].url}
                                                    width='100%'
                                                    height={140}
                                                    alt={item.title}
                                                />
                                                }

                                                <Text size={12}>{item.lead_paragraph}</Text>
                                                <Card.Footer justify="flex-start">
                                                    <Row wrap='wrap' justify="space-between">
                                                        <Text b>
                                                            {item.section_name}
                                                        </Text>
                                                        <Link color="primary" target="_blank" href={item.web_url}>
                                                            Visit full articles
                                                        </Link>
                                                    </Row>
                                                </Card.Footer>
                                            </Card>
                                        </Grid>
                                    </>
                                );

                            }) :
                            ' '
                        }
                    </Grid.Container>

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