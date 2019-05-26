import React, { Component } from 'react';
import SectionTitle from '../../../../assets/img/section-title-icon.png';
import './SectionItem.css';
import { Container } from 'reactstrap';
import SectionCarousel3 from '../SectionSkills/SectionCarousel/SectionCarousel3/SectionCarousel3';



class SectionItem extends Component {
    render() {
        return (

            <section className="domain-search-section spad set-bg" >
                <Container>
                    <div className="section-title">
                        <img src={SectionTitle} alt="#" />
                        <div className="text-white">
                            <h2>БҮТЭЭЛҮҮД</h2>
                            <p>Вэбсайт бол танай байгууллагын нүүр царай, бизнесийн нэг салшгүй хэсэг.<br/> Бид 50+ байгууллагатай хамтран өөрсдийн мэдлэг, туршлага, ур чадвараа шингээн ажилласан байна..<br/> Та ч мөн бидэнтэй хамтран ажиллах бүрэн боломжтой.</p>
                        </div>
                    </div>
                </Container>

                <SectionCarousel3 />
            </section >



        );
    }
}

export default SectionItem;