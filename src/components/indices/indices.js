import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './indices.css';
import es from '../../assets/images/es03012023.jpg'
import tr1 from '../../assets/images/es03012023Tr1.jpg'
import tr2 from '../../assets/images/es03012023Tr2.jpg'
import tr3 from '../../assets/images/es03012023Tr3.jpg'
import tr4 from '../../assets/images/es03012023Tr4.jpg'
import tr5 from '../../assets/images/es03012023Tr5.jpg'

let Indices = () => {
    return (
        <>
        <Container fluid className="containerMargin oneFullDay">
            <Row className="containerHeader">
                <Col lg={12}>
                    <div className="myh1">Indices</div>
                </Col>
            </Row>
            <section>
                <Row>
                    <Col lg={4}><div className="myh2 instrumentName">MES 03-23 </div></Col>
                    <Col lg={3}><div className="myh2 result">+112 </div></Col>
                    <Col lg={2}><div className="myh2 day">Friday </div></Col>
                    <Col lg={3}><div className="myh2 date">2023-01-10 </div></Col>
                </Row>
                <Row>
                    <Col lg={2}><div className="myh5 numOfTrades">5</div></Col>
                    <Col lg={2}><div className="myh5 tickSize" >987</div></Col>
                    <Col lg={2}><div className="myh5 sessionStart">18:30</div></Col>
                    <Col lg={2}><div className="myh5 sessionEnd">20:50</div></Col>
                </Row>
                <Row>
                    <Col lg={2}><div className="myh5 winners" >4</div></Col>
                    <Col lg={2}><div className="myh5 losers" >1</div></Col>
                    <Col lg={2}><div className="myh5 break-even" >0</div></Col>
                </Row>
                <Row>
                    <Col lg={2}><div className="plusPoints" >28</div></Col>
                    <Col lg={2}><div className="minusPoints" >3</div></Col>
                </Row>
                <Row>
                    <Col lg={2}><div className="plusTicks" >124</div></Col>
                    <Col lg={2}><div className="minusTicks" >12</div></Col>
                </Row>
                <Row>
                    <Col lg={2}><div className="bigWin" >18</div></Col>
                    <Col lg={2}><div className="bigLoss" >12</div></Col>
                </Row>
                <Row>
                    <Col lg={2}><div className="profit" >+$</div></Col>
                    <Col lg={2}><div className="loss" >-$</div></Col>
                </Row>
                <hr></hr>
                    <img className="chartImage" src={es} alt="Index chart"></img>
                <hr></hr>

                <section className="imageRight">
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={2}><h2 className="myh2 upperCa">Trade 1</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa initialRiskReward">2,5/6</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa actualRiskReward">0,5/6</h2></Col>
                        </Row>
                    </Col>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3821,25</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3819,00</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3820,50</div></Col>
                            <Col lg={2}><div className="myh5 exit">3823,50</div></Col>
                            <Col lg={2}><div className="myh5 tradeResultPoints">+2,5 </div></Col>
                            <Col lg={2}><div className="myh5 tradeResultTicks">+10 </div></Col>
                        </Row>
                    <Col lg={8}>
                        <h4 className="myh4 upperCa">Pre analysis</h4>
                        <p>The market fell strongly from the Swing high at 18:33 with a lot of selling trigger bars. The swing high is marked with the green line. The market made a new swing low at 18:47 with a signal bar and a following trigger bar. The move down was so strong so we need more information before doing anything else.</p><p>The market moved sideways and made higher lows with a lot of buying pressure on the bottom of the candles, there was no close below the last bear trigger bar (the bar before the swing low at 18:47)</p>
                        <h4 className="myh4 upperCa">Entry</h4>
                        <p>The market was not able to close below previous swing lows and the market made higher swing lows. At 18:56 we got a strong (high close) signal bar and a double bottom buy signal (the two previous swing lows). This is an aggressive entry and if we take it we need to trail our stops tightly!</p>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3822,00</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3819,00</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3820,50</div></Col>
                            <Col lg={2}><div className="myh5 exit">3825,50</div></Col>
                        </Row>
                        <h4 className="myh4 upperCa">Post analysis/summary</h4>
                        <p>Trade duration: 59 sec</p>
                        <p>This was a very high risk trade and we should avoid these setups! We need to wait for more confirmation before taking a trade, the leg down was so strong so the probability for more down was high.</p>
                        <p>If we take a trade like this, we need do keep a tight stop and trail it below the next bar.</p>
                    </Col>
                    <Col lg={4}><div className="d-flex align-items-center justify-content-center"><img className="mx-auto width100" src={tr1} alt="Index chart"></img></div></Col>
                </Row>
                </section>
                <hr></hr>

                <section className="imageLeft">
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={2}><h2 className="myh2 upperCa">Trade 2</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa initialRiskReward">3,50/8,50</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa actualRiskReward">1,75/8,50</h2></Col>
                        </Row>
                    </Col>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3823,25</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3819,75</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3821,50</div></Col>
                            <Col lg={2}><div className="myh5 exit">3830,75</div></Col>
                            <Col lg={2}><div className="myh5 tradeResultPoints">+8,5 </div></Col>
                            <Col lg={2}><div className="myh5 tradeResultTicks">+30 </div></Col>
                        </Row>
                    <Col lg={4}><div className="d-flex align-items-center justify-content-center"><img className="mx-auto width100" src={tr2} alt="Index chart"></img></div></Col>
                    <Col lg={8}>
                        <h4 className="myh4 upperCa">Pre analysis</h4>
                        <p>The market traded sideways after the first trade opportunity and made two higher highs and was not able to close below the previous swing lows, this indicates bull strength.</p>
                        <h4 className="myh4 upperCa">Entry</h4>
                        <p>After the market fell below the previous swing low and closed above it we got a strong bull signal bar and we entered at the close of the next trigger bar. </p>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3823,25</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3819,75</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3821,50</div></Col>
                            <Col lg={2}><div className="myh5 exit">3830,75</div></Col>
                        </Row>
                        <h4 className="myh4 upperCa">Post analysis/summary</h4>
                        <p>Trade duration: 2,27 min</p>
                        <p>We got 5 out of 6 strong bull bars closing near or at the top so we could expect more up. A trailing stop was used but we could have given this trade some more space since we have the strong bull run after entry. The market stalls and moves sideways after our exit.</p>
                        <p></p>
                    </Col>
                </Row>
                </section>
            </section>
            <hr></hr>

            <section className="imageRight">
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={2}><h2 className="myh2 upperCa">Trade 3</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa initialRiskReward">- -</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa actualRiskReward">- -</h2></Col>
                        </Row>
                    </Col>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3831,25</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3828,00</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3828,00</div></Col>
                            <Col lg={2}><div className="myh5 exit">3823,50</div></Col>
                            <Col lg={2}><div className="myh5 tradeResultPoints">-4 </div></Col>
                            <Col lg={2}><div className="myh5 tradeResultTicks">-12 </div></Col>
                        </Row>
                    <Col lg={8}>
                        <h4 className="myh4 upperCa">Pre analysis</h4>
                        <p>The bears was not able to push the market down, there was however lower lows but only one close below these lower lows so the context for mor up was ok! The bulls took out 4 bear bars with 2 strong bull bars.</p>
                        <h4 className="myh4 upperCa">Entry</h4>
                        <p>If we would have managed to enter at the close we would have a 4 points loss. We could have also entered on the trigger bar after the high close bear bar (hammer bar) and gotten back the loss!</p>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3822,00</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3819,00</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3820,50</div></Col>
                            <Col lg={2}><div className="myh5 exit">3825,50</div></Col>
                        </Row>
                        <h4 className="myh4 upperCa">Post analysis/summary</h4>
                        <p>Trade duration: 1 min</p>
                        <p>The context was good for a new long, if we would have gotten into the trade we would have made a loss but out of the 14 bars only 3 are bear bars so the bulls were strong. This would have been a tricky trade to get into again after the loss but the context is for more up! </p>
                        <p></p>
                    </Col>
                    <Col lg={4}><div className="d-flex align-items-center justify-content-center"><img className="mx-auto width100" src={tr3} alt="Index chart"></img></div></Col>
                </Row>
            </section>
            <hr></hr>

            <section className="imageRight">
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={2}><h2 className="myh2 upperCa">Trade 4</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa initialRiskReward">1/1</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa actualRiskReward">2/3</h2></Col>
                        </Row>
                    </Col>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3831,75</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3834,75</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3833,75</div></Col>
                            <Col lg={2}><div className="myh5 exit">3828,75</div></Col>
                            <Col lg={2}><div className="myh5 tradeResultPoints">+3 </div></Col>
                            <Col lg={2}><div className="myh5 tradeResultTicks">+12 </div></Col>
                        </Row>
                    <Col lg={8}>
                        <h4 className="myh4 upperCa">Pre analysis</h4>
                        <p>The market was unable to close above the swing high at 18:34, there was a lot of resistance at this level and the bears pushed the market down strongly with two strong bear bars</p><p>The market moved sideways without letting the bulls take back control and the new swing highs all closed below the previous 4 swing highs!</p>
                        <h4 className="myh4 upperCa">Entry</h4>
                        <p>Entry after the bulls failed the fifth time at the doji trigger bar. Trailing stop since it was the second leg down.</p>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3822,00</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3819,00</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3820,50</div></Col>
                            <Col lg={2}><div className="myh5 exit">3825,50</div></Col>
                        </Row>
                        <h4 className="myh4 upperCa">Post analysis/summary</h4>
                        <p>Trade duration: 59 sec</p>
                        <p>This was a tricky trade and hard to get into it would have been better to wait for more bear confirmation and try to enter on the third leg down around the 20:15 area.</p>
                    </Col>
                    <Col lg={4}><div className="d-flex align-items-center justify-content-center"><img className="mx-auto width100" src={tr4} alt="Index chart"></img></div></Col>
                </Row>
            </section>
            <hr></hr>

            <section className="imageRight">
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={2}><h2 className="myh2 upperCa">Trade 5</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa initialRiskReward">3,5/18</h2></Col>
                            <Col lg={5}><h2 className="myh2 upperCa actualRiskReward">0,75/18</h2></Col>
                        </Row>
                    </Col>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3823,00</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3819,50</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3822,25</div></Col>
                            <Col lg={2}><div className="myh5 exit">3841,00</div></Col>
                            <Col lg={2}><div className="myh5 tradeResultPoints">+18 </div></Col>
                            <Col lg={2}><div className="myh5 tradeResultTicks">+72 </div></Col>
                        </Row>
                    <Col lg={8}>
                        <h4 className="myh4 upperCa">Pre analysis</h4>
                        <p>The bears pushed the market down 3 times (3 legs) and wasn't able to get follow through below the previous swing lows so the market fell down to support. There was only 3 closes below the support area, but the bulls pushed the market up straight away and closed within the support area.There were three signal bars and we could have entered on the first trigger bull bar to go long.</p>
                        <h4 className="myh4 upperCa">Entry</h4>
                        <p>Entry after a breakout above the market stall after the bears wasn't able to push the market down below support. We hade three signal bars and entered at the first trigger bar.</p><p>We trailed the stop behind every signal and trigger bar all the way to the top!</p>
                        <Row>
                            <Col lg={2}><div className="myh5 entry">3822,00</div></Col>
                            <Col lg={2}><div className="myh5 initialStop">3819,00</div></Col>
                            <Col lg={2}><div className="myh5 actualStop">3820,50</div></Col>
                            <Col lg={2}><div className="myh5 exit">3825,50</div></Col>
                        </Row>
                        <h4 className="myh4 upperCa">Post analysis/summary</h4>
                        <p>Trade duration: 4,42 min</p>
                        <p>Good context for a counter trend long, there was a (high) double bottom with the first bear push down from 18:34 and the bears couldn't push below the support area around 3820.</p>
                        <p></p>
                    </Col>
                    <Col lg={4}><div className="d-flex align-items-center justify-content-center"><img className="mx-auto width100" src={tr5} alt="Index chart"></img></div></Col>
                </Row>
            </section>
                <hr></hr>
        </Container>
        </>
    )
};

export default Indices;