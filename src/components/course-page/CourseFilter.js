import React from 'react';

const CourseFilter = () => {
    return (
        <div className='course-filter w-1/5 p-10 border-r h-screen'>
            <div className="course-filter__item mb-3 border">
                <button className='course-filter__toggle-filter-btn px-6 py-2'><i class="fa-solid fa-filter"></i> Filter</button> 
            </div>
            <div className="course-filter__item mb-5">
                <div className='border px-6 py-2'>
                    <label for="country" class="block text-sm font-bold text-left leading-6 text-gray-900">Sort by</label>
                    <div className="">
                        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6 bg-transparent cursor-pointer">
                            <option>Most popular</option>
                            <option>Newest</option>
                            <option>Highest rating</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="course-filter__item">
                <h3 className='course-filter__title text-left font-bold text-xl mb-3 mt-5'>Rating</h3>
                <div className="course-filter__input-selection">
                    <div className="course-filter__input-selection-item text-left flex items-center mb-3">
                        <input type="checkbox" name="" id="" className='mr-3 w-5 h-5' />
                        <label htmlFor="" className='text-[#fbdf00]'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </label>
                    </div>
                    
                    <div className="course-filter__input-selection-item text-left flex items-center mb-3">
                        <input type="checkbox" name="" id="" className='mr-3 w-5 h-5' />
                        <label htmlFor="" className='text-[#fbdf00]'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </label>
                    </div>

                    <div className="course-filter__input-selection-item text-left flex items-center">
                        <input type="checkbox" name="" id="" className='mr-3 w-5 h-5' />
                        <label htmlFor="" className='text-[#fbdf00]'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </label>
                    </div>
                </div>
            </div>
            <div className="course-filter__item">
            <h3 className='course-filter__title text-left font-bold text-xl mb-3 mt-5'>Levels</h3>
                <div className="course-filter__input-selection">
                    <div className="course-filter__input-selection-item text-left flex items-center mb-3">
                        <input type="checkbox" name="" id="" className='mr-3 w-5 h-5' />
                        <label htmlFor="" className=''>
                            All Levels
                        </label>
                    </div>
                    <div className="course-filter__input-selection-item text-left flex items-center mb-3">
                        <input type="checkbox" name="" id="" className='mr-3 w-5 h-5' />
                        <label htmlFor="" className=''>
                            Beginner (A1 - A2)
                        </label>
                    </div>
                    <div className="course-filter__input-selection-item text-left flex items-center mb-3">
                        <input type="checkbox" name="" id="" className='mr-3 w-5 h-5' />
                        <label htmlFor="" className=''>
                            Intermediate (B1 - B2)
                        </label>
                    </div>
                    <div className="course-filter__input-selection-item text-left flex items-center mb-3">
                        <input type="checkbox" name="" id="" className='mr-3 w-5 h-5' />
                        <label htmlFor="" className=''>
                            Advanced (C1 - C2)
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseFilter;