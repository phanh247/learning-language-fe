import React from 'react';
import HomepageNavbar from '../navbar/HomepageNavbar';
import Header from './Header';
import CourseSelection from './CourseSelection';
import PopularCourse from './PopularCourse';
import Statistics from './Statistics';


const MainHomepage = () => {
    return (
        <div className='main-homepage bg-[#faf2ec]'>
            <HomepageNavbar />
            <Header />
            <Statistics />
            <CourseSelection />
            <PopularCourse />
        </div>
    );
};

export default MainHomepage;