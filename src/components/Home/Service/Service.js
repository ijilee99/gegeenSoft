import React from 'react';
import back from '../../../assets/img/service/shape1.png';
import icon1 from '../../../assets/img/service/icon1.png';
import icon2 from '../../../assets/img/service/icon1.png';
import icon3 from '../../../assets/img/service/icon1.png';
import clr1 from '../../../assets/img/service/clr-icon1.png';
import clr2 from '../../../assets/img/service/clr-icon2.png';
import clr3 from '../../../assets/img/service/clr-icon3.png';
import {Container, Row, Col} from 'reactstrap';
import './Service.css';
import WidgetTitle from '../SectionServes/WidgetTitle/WidgetTitle';


const Service = () => {
    return (
        <section class="service-area section-gap">
            <Container >
                <WidgetTitle/>
                <Row >
                    <Col lg="4" sm="6" md="6" >
                        <div className="single-service ">
                            <div className="service-icon">
                              <img src={back}/>
                              <img className="s-icon" src={icon1}/>
                              <img className="clr-icon" src={clr1}/>
                        
                            </div>
                            <div className="service-content">
                                <h4>Веб сайт хийх үйлчилгээ</h4>
                                <p>Манай байгуулага бүх төрлийн вебсайт болон веб аппликешинг чанарын өндөр түвшинд таны хүссэн загвараар хийж гүйцэтгэж байна.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="4" sm="6" md="6">
                        <div className="single-service">
                            <div className="service-icon">
                            <img src={back}/>
                            <img className="s-icon" src={icon2}/>
                            <img  className="clr-icon" src={clr2}/>
                   
                            </div>
                            <div className="service-content">
                                <h4>График дизайны үйлчилгээ</h4>
                                <p>Бид таны захиалага хэрэгцээ шаардлагын дагуу бүх төрлийн график дизайны үйлчилгээг хийж гүйцэтгэж байна.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="4" sm="6" md="6">
                        <div className="single-service">
                            <div className="service-icon">
                            <img src={back}/>
                            <img className="s-icon" src={icon3}/>
                            <img className="clr-icon" src={clr3}/>
                           
                            </div>
                            <div className="service-content">
                                <h4> Мэдээлэл технологи аутсорсингийн үйлчилгээ</h4>
                                <p>Бид танай байгуулагын хэрэгцээ шаардлагын дагуу мэдээлэл технологийн цогц шийдэл бүхий Аутсорсингийн гэрээт үйлчилгээг санал болгож байна</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Service;