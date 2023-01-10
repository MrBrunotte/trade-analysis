import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import test from '../../assets/images/testES.jpg'

let Indices = () => {
    return (
        <>
        <Container fluid className="containerMargin">
            <Row className="containerHeader">
                <Col lg={12}>
                    <div className="myh1">Indices</div>
                </Col>
            </Row>
            <section>
                <Row>
                    <Col lg={4}>
                        <div className="myh2 instrumentName">ES 03-23 </div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh2 result">+$450 </div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh2 day">Friday </div>
                    </Col>
                    <Col lg={4}>
                        <div className="myh2 date">2023-01-10 </div>
                    </Col>

                </Row>
                        <div className="myh5 tickSize" >2000</div>
                <Row>

                    <Col lg={2}>
                        <div className="sessionStart">09:30</div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh5 sessionEnd">12:00</div>
                    </Col>
                </Row>

                        <div className="myh5 numOfTrades">5</div>

                <Row>
                    <Col lg={2}>
                        <div className="myh5 winners" >3</div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh5 losers" >2</div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh5 break-even" >1</div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <div className="bigWin" >+$250</div>
                    </Col>
                    <Col lg={2}>
                        <div className="bigLoss" >-$150</div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <div className="profit" >+$450</div>
                    </Col>
                    <Col lg={2}>
                        <div className="loss" >-$150</div>
                    </Col>
                </Row>
                <hr></hr>
                <p>This is the trade analysis for the different indices that I am trading.</p>
                <img className="chartImage" src={test} alt="Index chart"></img>
            </section>
            <hr></hr>
        </Container>
        </>
    )
};

export default Indices;