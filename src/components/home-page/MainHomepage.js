import React from 'react';
import HomepageNavbar from '../navbar/HomepageNavbar';
import Header from './Header';
import CourseSelection from './CourseSelection';
import PopularCourse from './PopularCourse';


const MainHomepage = () => {
    return (
        <div className='main-homepage bg-[#faf2ec]'>
            <HomepageNavbar />
            <Header />
            <CourseSelection />
            <PopularCourse />
        </div>
    );
};

export default MainHomepage;