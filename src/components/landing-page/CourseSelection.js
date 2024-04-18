import React from 'react';
import './Homepage.css';


const CourseSelection = () => {
    return (
        <div className='course-selection px-[7%] py-[3%]'>
            <h2 className='course-selection__title text-3xl mb-20 font-bold'>Which <span className='text-[#667abe]'>language</span> do you want to learn?</h2>
            
            <div className="course-selection__grid-wrapper grid grid-cols-6 gap-x-2 gap-y-10">
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415319/Phanh/england-flag-round_fsemcb.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>English</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415346/Phanh/vietnam-flag-round_xhkve6.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Vietnamese</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415317/Phanh/china-flag-round_teaq0u.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Simplified Chinese</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415327/Phanh/japan-flag-round_jirwm3.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Japanese</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415328/Phanh/korea-flag-round_paaeza.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Korean</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415339/Phanh/taiwan-flag-round_uvkg8p.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Traditional Chinese</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415321/Phanh/germany-flag-round_jy5y7i.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>German</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415337/Phanh/spain-flag-round_vaqjc4.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Spanish</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415321/Phanh/france-flag-round_lcnpvw.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>French</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415325/Phanh/italy-flag-round_oaxu9u.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Italian</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415335/Phanh/rusia-flag-round_gn7unw.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Russian</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415320/Phanh/brazil-flag-round_ibcjrn.svg'} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Portuguese</span>
                </div>
                <div className="course-selection__grid-item">
                    
                </div>
            </div>
        </div>
    );
};

export default CourseSelection;