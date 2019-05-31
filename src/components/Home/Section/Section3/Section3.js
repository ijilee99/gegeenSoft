import React from 'react';
import SectionTitle from '../../../../assets/img/section-title-icon.png';
import './Section.css';
import Pepol from '../../../../assets/img/blog/section.png';
import Icon1 from '../../../../assets/img/icons/01.png';
import Icon2 from '../../../../assets/img/icons/02.png';
import Icon3 from '../../../../assets/img/icons/03.png';
import Icon4 from '../../../../assets/img/icons/04.png';
import { Container, Row, Col } from 'reactstrap';



const Section3 =() => {
    return (
        <section className="section-margin">
            <Container >
                <div className="section-title">
                    <img src={SectionTitle} alt="#" />
                    <h2> Хэнд илүү тохиромтой вэ ?</h2>
                </div>
                <Row>
                    <Col lg="6">
                        <Row className="offer-single-wrapper">
                            <Col md="6" className="offer-single">
                                <div className="offer-single__content text-center">
                                    <img src={Icon1} alt="" />
                                    <h4>Хуучирсан</h4>
                                    <p>Вэбсайтаа шинэчлэхийг хүсэж байгаа ч хэрхэн, яаж, хаанаас эхлэхээ мэдэхгүй байгаа бол бидэнд хандаарай.<br/><br/><br/></p>
                                </div>
                            </Col>

                            <Col md="6" className="offer-single">
                                <div className=" offer-single__content text-center">
                                    <img src={Icon2} alt="" />
                                    <h4>Гар утас дэмждэггүй</h4>
                                    <p>Вэбсайт тань гар утсанд дээр тохиромжгүй байгаа бол та хэрэглэгчдийн тодорхой хувиа тогтмол алдаж байгаагаа мэдэх үү?.<br /></p>
                                </div>
                            </Col>


                            <Col md="6 " className="offer-single" >
                                <div className=" offer-single__content text-center">
                                    <img src={Icon3} alt="" />
                                    <h4>Борлуулалтын сэжимгүй</h4>
                                    <p>Орчин үеийн маркетинг, борлуулалт нь вэбээр дамжуулан борлуулалтын сэжмийг худалдан авалт рүү чиглүүлэхэд анхаарч байна. Та үүнээс хоцрохыг хүсэхгүй байх.</p>
                                </div>
                            </Col>

                            <Col md="6" className="offer-single" >
                                <div className="offer-single__content text-center">
                                    <img src={Icon4} alt="" />
                                    <h4>Удирдахад төвөгтэй</h4>
                                    <p>Вэбсайтаа шинэчлэхийг хүсэж байгаа ч ямар нэгэн програмистын ур чадвар мэдлэг байхгүйгээс үүдэн асуудал гарч байна уу?<br /><br /><br /></p>
                                </div>
                            </Col>

                        </Row>

                    </Col>
                    <Col lg="6">
                        <div className="offer-single__img">
                            <img className="img-fluid" src={Pepol} alt="" />
                        </div>
                    </Col>

                </Row>

            </Container>

        </section>
    );
};

export default Section3;