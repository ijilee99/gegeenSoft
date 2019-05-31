import React, { Component } from 'react';
import './Body.css';
import Contact1 from '../../../assets/img/icons/1.png';
import Contact2 from '../../../assets/img/icons/2.png';
import Contact3 from '../../../assets/img/icons/3.png';
import {Container, Col,Row} from 'reactstrap';


class Body extends Component {
    render() {
        return (
            <section className="contact-section">
                <Container>
                    <Row>
                        <Col  lg="3" className="contact-text">
                            <h4>ХОЛБОО БАРИХ МЭДЭЭЛЭЛ</h4>
                            <p>Та дараах сувгуудаар бидэнтэй холбогдох боломжтой. Эсвэл холбоо барих формыг бөглөн өөрийн холбоо барих мэдээллийг үлдээгээрэй. Бид ажлын 1 хоногт багтан эргэн холбогдох болно. Баярлалаа.</p>
                            <div className="cont-info">
                                <div className="ci-icon">
                                    <img src={Contact1 } alt="icon" />
                                </div>
                                <span>Тайм скүэр 509, Хан-Уул дүүрэг, 11-р хороо.</span>
                            </div>
                            <div className="cont-info">
                                <div className="ci-icon">
                                    <img src={Contact2} alt="icon"/>
                                </div>
                                <span> 77001623</span>
                            </div>
                            <div className="cont-info">
                                <div className="ci-icon">
                                    <img src={Contact3} alt="icon"/>
                                </div>
                                <span> info@bzp.mn</span>
                            </div>
                        </Col>
                        <Col lg="9">
                            <form className="contact-form">
                                <Row>
                                    <Col  md="6">
                                        <input type="text" placeholder="Овог" />
                                    </Col>
                                    <Col md="6">
                                        <input type="text" placeholder="Нэр*" />
                                    </Col>
                                    <Col md="6">
                                        <input type="text" placeholder="Утас:*" />
                                    </Col>
                                    <Col md="6">
                                        <input type="text" placeholder="И-мэйл хаяг*" />
                                    </Col>
                                    <Col md="12">
                                        <input type="text" placeholder="Байгууллага" />
                                        <textarea placeholder="Мэдээлэл"></textarea>
                                        <buttom class="site-btn">ИЛГЭЭХ</buttom>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Body;