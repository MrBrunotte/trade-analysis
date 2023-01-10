import React from "react";
import { Col, Row } from "react-bootstrap";
import test from '../../assets/images/testES.jpg'

<section>
                <Row>
                    <Col lg={4}>
                        <div className="myh2 instrumentName">ES</div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh2 result">+$</div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh2 day"></div>
                    </Col>
                    <Col lg={4}>
                        <div className="myh2 date"></div>
                    </Col>

                </Row>
                        <div className="myh5 tickSize" ></div>
                <Row>

                    <Col lg={2}>
                        <div className="sessionStart"></div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh5 sessionEnd"></div>
                    </Col>
                </Row>

                        <div className="myh5 numOfTrades"></div>

                <Row>
                    <Col lg={2}>
                        <div className="myh5 winners" ></div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh5 losers" ></div>
                    </Col>
                    <Col lg={2}>
                        <div className="myh5 break-even" ></div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <div className="bigWin" >+$</div>
                    </Col>
                    <Col lg={2}>
                        <div className="bigLoss" >-$</div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <div className="profit" >+$</div>
                    </Col>
                    <Col lg={2}>
                        <div className="loss" >-$</div>
                    </Col>
                </Row>
                <hr></hr>
                <p>This is the trade analysis for the different indices that I am trading.</p>
                <img className="chartImage" src={test} alt="Index chart"></img>
                <hr></hr>
            </section>