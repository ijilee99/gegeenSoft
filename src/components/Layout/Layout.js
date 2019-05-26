import React from 'react';
import FooterItems from '../Navbar_footer/FooterItem/FooterItems/FooterItems';
import NavigationItems from '../../components/Navbar_footer/NavigationItem/NavigationItems';



const Layout = (props) => {
    return (
        <div>
            <NavigationItems />
            {props.children}
            <FooterItems />
        </div>
    );
};

export default Layout;