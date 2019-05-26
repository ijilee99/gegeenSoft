import React, { Component } from 'react';
import './SectionCarousel3.css';
import carousel1 from '../../../../../../assets/img/carousel/bzp-web-screenshot.jpg';
import carousel2 from '../../../../../../assets/img/carousel/datacare.jpg';
import carousel3 from '../../../../../../assets/img/carousel/maxgroup.jpg';


class SectionCarousel3 extends Component {
    render() {
        return (
            <div className="carousel" data-flickity='{ "wrapAround":true, "autoPlay": true, "resize": false, "selectedAttraction": 0.01, "friction": 0.15, "pageDots": false  }'>
                <div className="scrolltoi">
                    <img src={carousel1} alt="orange" width="100%" />
                </div>
                <div className="scrolltoi">
                    <img src={carousel2} alt="sanlhuu" width="100%" />
                </div>
                <div className="scrolltoi">
                    <img src={carousel3} alt="fdasf" width="100%" />
                </div>
            </div>
        );
    }
}

export default SectionCarousel3;