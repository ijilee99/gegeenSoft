import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SerIcon1 from '../../../../assets/img/icons/ser1.png';
import SerIcon2 from '../../../../assets/img/icons/ser2.png';
import SerIcon3 from '../../../../assets/img/icons/ser3.png';
import './Service1.css';

class Service extends Component {
    render() {
        return (

            <section >
                <Container>
                    <Row className="service-section">          
                        <Col  lg="4" >
                            <div className="section-title">
                                <h3 >Бид юу бүтээдэг вэ</h3>
                                <br/>
                                <p> Бид гадаад дотоодын байгуулага, хувь хэрэглэгчидэд зориулан хүссэн загвар системийг, орчин үеийн чанар шаардлага хангасан, хүчирхэг технологийг ашиглан хэрэгцээ шаардлагыг нь ханган хамтран ажиллахдаа таатай байдаг.
                                </p>
                            </div>
                        </Col>
                        <Col lg="8">
                            <Row>
                                <Col sm="4" className="box-style">
                                    <div className="box-style-content">
                                        <h4>Mobile app</h4>
                                        <img src={SerIcon1} />
                                    </div>
                                </Col>
                                <Col sm="4" className="box-style">
                                    <div className="box-style-content">
                                        <h4>Вэб сайт</h4>
                                        <img src={SerIcon2} />
                                    </div>
                                </Col>
                                <Col sm="4" className="box-style">
                                    <div className="box-style-content">
                                        <h4>Mobile app</h4>
                                        <img src={SerIcon3} />
                                    </div>
                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </Container>
            </section>

        );
    }
}

export default Service;