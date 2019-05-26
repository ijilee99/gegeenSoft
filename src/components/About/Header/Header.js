import React from 'react';
import PageTop from '../../../assets/img/page-top-bg1.png';
import './style.css';
import {Container} from 'reactstrap';


const Header = () => {
    return (
        <section class="page-top-section set-bg"  style={{ background: `url(${PageTop})` }}>
            <Container>
                <h2 style={{marginBottom:'30px'}}>БИДНИЙ ТУХАЙ</h2>
            </Container>
        </section>
    );
};

export default Header;