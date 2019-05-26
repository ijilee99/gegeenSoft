import React, { Component, Fragment } from 'react';
import bg from '../../../assets/img/blog/bg2.jpg';
import rocket from '../../../assets/img/bg3.gif';
import './style.css';
import { Container, Col, Row } from 'reactstrap';


class index extends Component {
    render() {
        return (
            <Fragment>
                <section className="hero-section" style={{ background: `url(${bg})` }}>
                    <Container >
                        <div className="hero-content">
                            <Row>
                                <Col sm="6" className="text-left">
                                    <h1> ВЭБ ХӨГЖҮҮЛЭХ ҮЙЛЧИЛГЭЭ</h1>
                                    <h3>ВЭБСАЙТ бол ЗАРДАЛ бус ХӨРӨНГӨ ОРУУЛАЛТ юм. </h3>
                                </Col>

                            </Row>
                            <div className="hero-rocket">
                                <img src={rocket} alt="SliderAnime" />
                            </div>
                        </div>
                    </Container>
                </section>
            </Fragment >

        );
    }
}

export default index;