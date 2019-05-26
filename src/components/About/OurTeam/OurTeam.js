import React from 'react';
import SectionTitle from '../../../assets/img/section-title-icon.png';
import './OurTeam.css';
import Avator from '../../../assets/img/avator01.jpg'
import { Container, Row, Col } from 'reactstrap';
import Avator02 from '../../../assets/img/avator02.jpg';
import Avator03 from '../../../assets/img/avator03.jpg';
import Avator04  from '../../../assets/img/avator04.jpg';

 
const OurTeam = () => {
    return (
        <section className="our-team ">
            <Container>
                <Row>
                    <Col >
                        <div className="section-title">
                            <img src={SectionTitle} alt="#" />
                            <h2>БИДНИЙ ТУХАЙ</h2>
                            <p>ХЭН ЮУ ХИЙДЭГ ВЭ?</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3" sm="6" md="6">
                        <div className="team-content ">
                            <div className="member-thumb">
                                <img src={Avator} />
                            </div>
                            <h5>М.Батдэмбэрэл</h5>
                            <span>Захирал</span>
                        </div>
                    </Col>
                    <Col lg="3" sm="6" md="6">
                        <div className="team-content">
                            <div className="member-thumb">
                                <img src={Avator02} />
                            </div>
                            <h5>Ижилцэцэг</h5>
                            <span>Вэб хөгжүүлэгч</span>
                        </div>
                    </Col>
                    <Col lg="3" sm="6" md="6">
                        <div className="team-content">
                            <div className="member-thumb">
                                <img src={Avator03} />
                            </div>
                            <h5>Д.Одбаяр</h5>
                            <span> менежер</span>
                        </div>
                    </Col>
                    <Col lg="3" sm="6" md="6">
                        <div className="team-content">
                            <div className="member-thumb">
                                <img src={Avator04} />
                            </div>
                            <h5>Б.Тамир</h5>
                            <span>Мобайл хөгжүүлэгч</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurTeam;