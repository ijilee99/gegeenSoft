import React from 'react';
import './style.css';




const SectionIcon = ({
    icon: Icon,
    iconProps,
    title,
    subtitle
}) => {

    return (
   
            <div className="us-content">
                <div className="us-icon">
                    <Icon  {...iconProps} />
                </div>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
      
    );
};




export default SectionIcon;
