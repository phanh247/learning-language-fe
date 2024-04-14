import React from 'react';
import HomepageNavbar from '../navbar/HomepageNavbar';
import Header from './Header';
import CourseSelection from './CourseSelection';


const MainHomepage = () => {
    return (
        <div className='main-homepage bg-[#faf2ec]'>
            <HomepageNavbar />
            <Header />
            <CourseSelection />
        </div>
    );
};

export default MainHomepage;