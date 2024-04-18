import React from 'react';

const Category = () => {
    return (
        <div className='category px-[7%] py-[5%]'>
            <h2 className='category__title text-3xl mb-20 font-bold'><span className='text-[#667abe]'>Top</span> categories on our website</h2>

            <div className="category__grid-wrapper grid grid-cols-4 gap-x-3 justify-items-center">
                <div className="category__grid-item cursor-pointer">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415330/Phanh/business_qlmxhh.svg'} alt="" className="course-selection__img w-2/3 rounded-full my-0 mx-auto c-shadow" />
                    <h4 className='category__name uppercase font-bold mt-3'>Work</h4>          
                </div> 
                <div className="category__grid-item cursor-pointer">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415341/Phanh/study-abroad_yymlqy.svg'} alt="" className="course-selection__img w-2/3 rounded-full my-0 mx-auto c-shadow" />
                    <h4 className='category__name uppercase font-bold mt-3'>Study Abroad</h4>          
                </div> 
                <div className="category__grid-item cursor-pointer">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415342/Phanh/travel_s8beyp.svg'} alt="" className="course-selection__img w-2/3 rounded-full my-0 mx-auto c-shadow" />
                    <h4 className='category__name uppercase font-bold mt-3'>Travel</h4>          
                </div> 
                <div className="category__grid-item cursor-pointer">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415331/Phanh/culture_o9mi0g.svg'} alt="" className="course-selection__img w-2/3 rounded-full my-0 mx-auto c-shadow" />
                    <h4 className='category__name uppercase font-bold mt-3'>Explore Culture</h4>          
                </div> 
            </div>
        </div>
    );
};

export default Category;