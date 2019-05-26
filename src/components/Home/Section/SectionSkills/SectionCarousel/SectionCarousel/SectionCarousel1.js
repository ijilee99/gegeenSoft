import React, { Component } from 'react';
import './SectionCarousel1.css';
import review from '../../../../../../assets/img/avator01.jpg'

class SectionCarousel1 extends Component {
    render() {
        return (
            <div>
                <div  data-flickity='{ "autoPlay": 1500 }'>
                    <div className="carousel-cell ">
                        <div className="ti-content">
                            <p>Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iacu-lis.Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. iaculis.</p>
                        </div>
                        <div className="ti-author-pic set-bg"  
                        style={{
                                    background: `url(${review})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}></div>
                        <div className="ti-author">
                            <h6>Michael Smith</h6>
                            <span>Client</span>
                        </div>
                    </div>
                    <div className="carousel-cell ">
                        <div className="ti-content">
                            <p>Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iacu-lis.Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. iaculis.</p>
                        </div>
                        <div className="ti-author-pic set-bg" style={{
                                    background: `url(${review})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}></div>
                        <div className="ti-author">
                            <h6>Michael Smith</h6>
                            <span>Client</span>
                        </div>
                    </div>
                    <div className="carousel-cell ">
                        <div className="ti-content">
                            <p>Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iacu-lis.Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. iaculis.</p>
                        </div>
                        <div className="ti-author-pic set-bg" style={{
                                    background: `url(${review})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}></div>
                        <div className="ti-author">
                            <h6>Michael Smith</h6>
                            <span>Client</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionCarousel1;