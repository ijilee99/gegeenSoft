import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from '../../../assets/img/logo.png';
import { Container } from 'reactstrap';
import './NavigationItems.css';



export default class NavigationItems extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="header"  class="fixed-top">
          <Navbar light expand="md">
            <NavbarBrand href="/" className="site-logo"><img src={Logo} /></NavbarBrand>
            <NavbarToggler  onClick={this.toggle} />
            <Collapse className="nav-warp navbar" isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto main-menu" navbar>
                <NavItem >
                  <NavLink href="/" >Нүүр</NavLink>
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
            </Collapse>
          </Navbar>
      </div>
    );
  }
}
