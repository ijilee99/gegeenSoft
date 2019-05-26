import React from 'react';
import './style.css';




const IconWidget = ({

    icon: Icon,
    iconProps,
    title,
    subtitle
}) => {

    return (
   
            <div >
                <div className="ft-icon">
                  <Icon size={50} {...iconProps} />
                </div>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
      
    );
};


IconWidget.defaultProps = {
    bgColor: 'primary',
    icon: 'span',
    iconProps: { size: 50 },
};

export default IconWidget;
