import React, { useEffect, useState } from 'react';
import HomepageNavbar from '../navbar/HomepageNavbar';
import Header from './Header';
import CourseSelection from './CourseSelection';
import PopularCourse from './PopularCourse';
import Statistics from './Statistics';
import Category from './Category';
import Testimonial from './Testimonial';


const MainHomepage = () => {

    return (
        <div  className='main-homepage bg-[#faf2ec]'>
            <HomepageNavbar />
            <Header />
            <Statistics />
            <CourseSelection />
            <PopularCourse />
            <Category />
            <Testimonial />
        </div>
    );
};

export default MainHomepage;