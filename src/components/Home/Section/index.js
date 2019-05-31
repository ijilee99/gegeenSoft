import React from 'react';
import SectionItem from './SectionItem/SectionItem';
import SectionSkill from './SectionSkills/SectionSkill';
import Section02 from './section02/Section02';
import Section03 from './Section3/Section3';

const index = () => {
    return (
        <div>
            <Section02/>
             <Section03/> 
           <SectionItem/> 
           <SectionSkill/>
        </div>
    );
};

export default index;