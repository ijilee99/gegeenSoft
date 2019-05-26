import React, { Component } from 'react';
import './FooterItems.css';
import { Container, NavItem, NavLink, Row, Col, Nav } from 'reactstrap';
import FooterBg from '../../../../assets/img/domain-bg1.png';

class Footer extends Component {
    render() {
        return (

            <footer className="footer-section" style={{ background: `url(${FooterBg})`, backgroundSize:'cover' }}>
           
                <Container >
                    <Row>
                        <Col sm="8">
                            <div className="footer-menu">
                                <Nav>
                                    <NavItem>
                                        <NavLink href="/">Нүүр</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/About">Бидний тухай</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/service">Вэб сайт хийх үйлчилгээ</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/contact">Холбоо барих</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Col>
                        <Col sm="4">
                            <div class="footer-icon ">
               
                            <NavLink href="#"><i class="fab fa-facebook-square"></i></NavLink>
                            <NavLink href="#"><i class="fab fa-instagram"></i></NavLink>
                            <NavLink href="#"><i class="fab fa-twitter-square"></i></NavLink>
                            <NavLink href="#"><i class="fab fa-pinterest-square"></i></NavLink>
                         
                            </div>
                        </Col>
                        <div className="copyright">
                            Copyright &copy; All rights reserved | This template is made with
                        </div>
                    </Row>

                </Container>
            </footer>

        );
    }
}

export default Footer;

