import React from 'react';
import Ohin from '../../../../assets/img/ohin.gif';
import { Container, Row, Col } from 'reactstrap';
import './style.css';

const Section02 = () => {
    return (
        <div>
            <section className="about-section spad pt-5">
                <Container>
                    <Row>
                        <Col sm="6" md="6" className="pt-4 pr-3">
                            <img  src={Ohin} alt="git Ohin" />
                        </Col>
                        <Col sm="6" md="6" className="about-text">
                            <div className="section-title">
                                <h3>Вэб сайт бол зардал бус хөрөнгө оруулалт юм</h3>
                            </div>
                            <p>Вэб хуудас бол дижитал маркетингийн цөм юм. Вэб хуудсаараа дамжуулан байгууллага
                                    бүтээгдэхүүн, үйлчилгээ болон бусад бүх мэдээллийг хамгийн бүрэн дүүрэн хэлбэрээр
                                     хүргэхээс гадна борлуулалтын сэжим татах чухал хэрэгсэл болдог.
                                      Вэб сайт нь компани болон үйлчилгээний танилцуулга төдий зүйл байхаа больж маркетингийн хамгийн чухал  хэрэгсэл болоод байна. Бид харилцагчиддаа зөвхөн сайн загвар дизайнтай вэбсайт бус ирээдүйд борлуулалтын сэжим авчрах маркетингийн үр ашигтай вэбсайт санал болгодог.
                                </p>

                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Section02;