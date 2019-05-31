
import React, { Component } from 'react';
import './Section2.css';
import { Container, Row, Col } from 'reactstrap';


import { SectionIcon } from './Icon';
import {SectionIsonData} from '../Section2/Demo/Taniltsuulga';

class Section2 extends Component {


  
    
    render() {
        return (
            <section className="section-padding" >
                <Container >
                    <Row>
                        <Col sm="12">
                            <div className="section-heading">
                                <h2>БИДНИЙ ҮЙЛЧИЛГЭЭ</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                      {SectionIsonData.map(
                          ({icon,title, subtitle} ,i) =>(
                              <Col xs="12" sm="4">
                               <SectionIcon 
                                 icon={icon}
                                 title={title}
                                 subtitle={subtitle}
                               />
                              </Col>
                          ))}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Section2;
