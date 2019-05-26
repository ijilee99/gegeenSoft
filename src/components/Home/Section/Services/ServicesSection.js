import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'reactstrap';
import './ServicesSection.css';
import SectionTitle from '../../../../assets/img/section-title-icon.png';


class ServicesSection extends Component {

    render() {
        return (
            <div>
                <section id="section" className="section-bg">
                    <Container>
                        <div className="section-title">
                            <img src={SectionTitle} alt="#" />
                            <p>Хамгийн шилдэг технологийн</p>
                            <h2>ХЭНД ИЛҮҮ ТОХИРОМЖТОЙ ВЭ?</h2>
                        </div>
                        <Row>
                            <Col sm="6" >

                                <Card className="box" >
                                    <div className="icon">
                                        <i class="fa fa-history" style={{ color: '#ff689b' }}></i>
                                    </div>
                                    <h4 className="title">Хуучирсан </h4>
                                    <p className="description">Вэбсайтаа шинэчлэхийг хүсэж байгаа ч хэрхэн, яаж, хаанаас эхлэхээ мэдэхгүй байгаа бол бидэнд хандаарай.</p>
                                </Card>
                            </Col>
                            <Col sm="6">

                                <Card className="box">
                                    <div className="icon">

                                        <i class="fa fa-globe" style={{ color: ' #e9bf06' }}></i>
                                    </div>
                                    <h4 className="title">Гар утас дэмждэггүй</h4>
                                    <p className="description">Вэбсайт тань гар утсанд дээр тохиромжгүй байгаа бол та хэрэглэгчдийн тодорхой хувиа тогтмол алдаж байгаагаа мэдэх үү?.</p>

                                </Card>
                            </Col>
                            <Col sm="6">

                                <Card className="box">
                                    <div className="icon">
                                        <i className="fab fa-slideshare" style={{ color: '#3fcdc7' }}></i>
                                    </div>
                                    <h4 className="title">Борлуулалтын сэжимгүй</h4>
                                    <p className="description">Орчин үеийн маркетинг, борлуулалт нь вэбээр дамжуулан борлуулалтын сэжмийг худалдан авалт рүү чиглүүлэхэд анхаарч байна. Та үүнээс хоцрохыг хүсэхгүй байх</p>

                                </Card>
                            </Col>
                            <Col sm="6">

                                <Card className="box">
                                    <div className="icon">
                                        <i class="fas fa-user-shield" style={{ color: '#41cf2e' }}></i>
                                    </div>
                                    <h4 className="title">Удирдахад төвөгтэй</h4>
                                    <p className="description">Вэбсайтаа шинэчлэхийг хүсэж байгаа ч ямар нэгэн програмистын ур чадвар мэдлэг байхгүйгээс үүдэн асуудал гарч байна уу?.</p>
                                </Card>
                            </Col>
                            <Col sm="6">

                                <Card className="box">
                                    <div className="icon">
                                        <i class="fa fa-edit" style={{ color: '#d6ff22' }}></i>
                                    </div>
                                    <h4 className="title">Special Title Treatment</h4>
                                    <p className="description"> With supporting text below as a natural lead-in to additional content.</p>

                                </Card>
                            </Col>
                            <Col sm="6">

                                <Card className="box">
                                    <div className="icon">
                                        <i class="fa fa-store" style={{ color: '#4680ff' }}></i>
                                    </div>
                                    <h4 className="title">Special Title Treatment</h4>
                                    <p className="description">With supporting text below as a natural lead-in to additional content.</p>

                                </Card>
                            </Col>

                        </Row>
                    </Container>

                </section>

            </div>
        );
    }
}

export default ServicesSection;