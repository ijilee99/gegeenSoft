import React, { Component, Fragment } from 'react';
import rocket from '../../../assets/img/blog/hudluud.png';
import './style.css';
import {  Button, Container, Row, Col } from 'reactstrap';


class index extends Component {
    render() {
        return (
            <Fragment>
                <section className="slider-bg" >
                     <Container >
                            <Row>
                             <Col lg="8" md="6" sm="6">
                                    <div className="hero-content">
                                        <h1>ВЭБ ХӨГЖҮҮЛЭХ <br />ҮЙЛЧИЛГЭЭ!</h1>
                                        <p>ВЭБСАЙТ бол ЗАРДАЛ бус ХӨРӨНГӨ <br />ОРУУЛАЛТ юм.</p>
                                        <p className="button-style">
                                            <Button>Дэлгэрэнгүй</Button>
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="6">
                                    <div className="hero-rocket">
                                        <img src={rocket} />
                                    </div>
                                </Col>
                            </Row>
                        </Container> 
                </section>
            </Fragment >
        );
    }
}

export default index;