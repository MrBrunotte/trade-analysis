import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import test from '../../assets/images/testES.jpg'

let Indices = () => {
    return (
        <>
        <Container fluid className="containerMargin">
            <Row className="containerHeader">
                <Col lg={12}>
                    <h1 className="myH1">Indices</h1>
                    <p>This is the trade analysis for the different indices that I am trading.</p>
                </Col>
            </Row>
            <section>
                <Row>
                <Col lg={12}>
                        <h2>Index name: </h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <h5>Tick size: </h5>
                    </Col>
                    <Col lg={3}>
                        <h5>Date: </h5>
                    </Col>
                    <Col lg={3}>
                        <h5>Session start: </h5>
                    </Col>
                    <Col lg={3}>
                        <h5>Session end: </h5>
                    </Col>
                        <img className="chartImage" src={test} alt="Index chart"></img>
                        <p>This is the trade analysis for the different indices that I am trading.</p>
                    
                </Row>
            </section>
        </Container>
        </>
    )
};

export default Indices;