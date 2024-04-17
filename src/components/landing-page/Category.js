import React from 'react';
import Business from '../../images/business.svg';
import StudyAbroad from '../../images/study-abroad.svg';
import Travel from '../../images/travel.svg';
import Culture from '../../images/culture.svg';

const Category = () => {
    return (
        <div className='category px-[7%] py-[5%]'>
            <h2 className='category__title text-3xl mb-20 font-bold'><span className='text-[#667abe]'>Top</span> categories on our website</h2>

            <div className="category__grid-wrapper grid grid-cols-4 gap-x-3 justify-items-center">
                <div className="category__grid-item cursor-pointer">
                    <img src={Business} alt="" className="course-selection__img w-2/3 rounded-full my-0 mx-auto c-shadow" />
                    <h4 className='category__name uppercase font-bold mt-3'>Work</h4>          
                </div> 
                <div className="category__grid-item cursor-pointer">
                    <img src={StudyAbroad} alt="" className="course-selection__img w-2/3 rounded-full my-0 mx-auto c-shadow" />
                    <h4 className='category__name uppercase font-bold mt-3'>Study Abroad</h4>          
                </div> 
                <div className="category__grid-item cursor-pointer">
                    <img src={Travel} alt="" className="course-selection__img w-2/3 rounded-full my-0 mx-auto c-shadow" />
                    <h4 className='category__name uppercase font-bold mt-3'>Travel</h4>          
                </div> 
                <div className="category__grid-item cursor-pointer">
                    <img src={Culture} alt="" className="course-selection__img w-2/3 rounded-full my-0 mx-auto c-shadow" />
                    <h4 className='category__name uppercase font-bold mt-3'>Explore Culture</h4>          
                </div> 
            </div>
        </div>
    );
};

export default Category;