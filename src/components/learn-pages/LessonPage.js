import React from 'react';
import LearnPageNavbar from '../navbar/LearnPageNavbar';
import LearnPageSideNavbar from '../navbar/LearnPageSideNavbar';

const LessonPage = () => {
    return (
        <div className='lesson-page'>
            <LearnPageNavbar />
            
            <LearnPageSideNavbar />

        </div>
    );
};

export default LessonPage;