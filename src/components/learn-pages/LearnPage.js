import React from 'react';
import LearnPageNavbar from '../navbar/LearnPageNavbar';
import LearnPageSideNavbar from '../navbar/LearnPageSideNavbar';

const LearnPage = () => {
    return (
        <div className='lesson-page'>
            <LearnPageNavbar />
            
            <LearnPageSideNavbar />

        </div>
    );
};

export default LearnPage;