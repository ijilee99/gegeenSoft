import React, { Component } from 'react';
import mobile from '../../../../assets/img/pepol/mobile.jpg';
import { Container, Row, Col } from 'reactstrap';
import './Service2.css';


class Service2 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="service2">
                        <Row >
                            <Col sm="6" >
                                <div className="box-img">
                                    <img src={mobile} />
                                </div>

                            </Col>
                            <Col sm="6" >
                                <div className="section-title">
                                    <h3>Mobile app хөгжүүлэх үйлчилгээ</h3>
                                    <p> Санжесо ХХК нь 2014 оноос хойш мэдээлэл технологи, програм хангамжийн бүтээгдэхүүн, үйлчилгээг эрхлэн явуулж байна. 21-р зуунд техник технологийн асар хурдацтай шилжилт,           ялангуяа Мэдээлэл технологи, үүлэн тооцооллын шинэ эрин лүү бүхий л салбар түүний үйл ажиллагаа, шилжиж байгаатай холбоотойгоор Мэдээлэл технологийн зах зээлд өөрсдийн хувь нэмэрээ өргөхөөр хичээнгүйлэн гадаад,
                                        дотоодын байгуулага руу чиглэсэн мэдээлэл технологийн Аутсорсингийн үйлчилгээг чанартай, найдвартай, бүтээлчээр бий болгохыг эрхэм зорилгоо болгон ажилдаг билээ.
                                   </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Service2;