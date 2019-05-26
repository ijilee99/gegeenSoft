import React from 'react';
import Service1 from './Service/Service1/Service1';
import Header from './Header/Header';
import Service2 from './Service/Service2/Service2';
import Service3 from './Service/Service3/Service3';



const index = () => {
    return (
        <div>
            <Header/>
            <Service1/>
            <Service2/>
            <Service3/>
        </div>
    );
};

export default index;