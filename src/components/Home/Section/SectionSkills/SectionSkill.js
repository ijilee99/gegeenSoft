import React, { Component, Fragment } from 'react';
import About from '../../../../assets/img/desktop.gif';
import { Container, Col, Row } from 'reactstrap';
import './SectionSkill.css';

import SectionCarousel1 from './SectionCarousel/SectionCarousel/SectionCarousel1';

class SectionSkill extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                <div className="about-extra">
                    <Row>
                            <Col  sm="6">
                                <div class="wow fadeInUp">
                                    <img src={About} class="img-fluid" alt="" />
                                </div>
                                </Col>
                            <Col  sm="6">
                                <SectionCarousel1/>
                            </Col>
                    </Row>
                    </div>
                </Container>

            </Fragment>

        );
    }
}

export default SectionSkill;