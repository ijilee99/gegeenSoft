import React from 'react';
import PageTop from '../../../assets/img/blog/about.png';
import './style.css';
import {Container} from 'reactstrap';


const Header = () => {
    return (
        <section class="page-top-header "  style={{ background: `url(${PageTop})` }}>
            <Container>
                <h2 style={{marginBottom:'30px'}}>БИДНИЙ ТУХАЙ</h2>
            </Container>
        </section>
    );
};

export default Header;