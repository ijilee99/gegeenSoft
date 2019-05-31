import React, { Component } from 'react';
import './FooterItems.css';
import { Container, NavItem, NavLink, Row, Col, Nav } from 'reactstrap';
import FooterBg from '../../../../assets/img/blog/footer.png';

class Footer extends Component {
    render() {
        return (

            <footer className="footer-section" style={{ background: `url(${FooterBg})`, backgroundSize:'cover' }}>
           
                <Container >
                    <Row>
                        <Col sm="8">
                            <div className="footer-menu">
                              © 2007-2017 Монгол Контент ХХК
                            </div>
                        </Col>
                        <Col sm="4">
                            <div className="footer-icon ">
               
                            <NavLink href="#"><i className="fab fa-facebook-square"></i></NavLink>
                            <NavLink href="#"><i className="fab fa-instagram"></i></NavLink>
                            <NavLink href="#"><i className="fab fa-twitter-square"></i></NavLink>
                            <NavLink href="#"><i className="fab fa-pinterest-square"></i></NavLink>
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

