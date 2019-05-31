import React from 'react';
import PageTop from '../../../assets/img/blog/about.png';
import './Header.css';
import {Container} from 'reactstrap';


const Header = () => {
    return (
        <section class="page-top-section set-bg"  style={{ background: `url(${PageTop})` }}>
            <Container>
                <h2>БИДНИЙ ТУХАЙ</h2>
            
            </Container>
        </section>
    );
};

export default Header;