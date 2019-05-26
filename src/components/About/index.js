import React from 'react';
import Header from './Header/Header';
import Section01 from './Section01/Section01';
import Section2 from './Section2/Section2';
import OurTeam from './OurTeam/OurTeam';



const index = () => {
    return (
        <div>
            <Header/>
            <Section01/>
            <Section2/>
            <OurTeam/>
        </div>
    );
};

export default index;