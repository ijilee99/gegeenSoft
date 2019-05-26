import React from 'react';
import './FooterItem.css';


const FooterItem = (props) => (
    
        <li   style={{display:'inlien'}}>
            <a 
            style={{
                display:'inlineBlock',
                fontsize:'14',
                color:'#fff',
                paddingRight:'12px'
            }}
            href={props.link} >{props.children}</a>
        </li>


);

export default FooterItem;