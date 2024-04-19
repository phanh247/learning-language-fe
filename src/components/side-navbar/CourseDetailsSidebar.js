import React from 'react';

const CourseDetailsSidebar = () => {
    return (
        <div className='course-details-sidebar w-1/4'>
            <div className="course-details-sidebar__container border shadow-lg pb-10 rounded-xl overflow-hidden">
                <div className="course-details-sidebar__thumbnail mb-5">
                    <img src="https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713502375/Phanh/chinese-for-hsk-1-course_lglezi.svg" alt="" className='' />
                </div>

                <div className="course-details-sidebar__price px-5 text-left">
                    <span className="course-details-sidebar__discounted-price text-3xl font-bold mr-3">$99</span>
                    <span className='course-details-sidebar__old-price text-lg line-through'>$199</span>
                </div>
                
                <div className="course-details-sidebar__discount px-5 text-left">
                    <span className='course-details-sidebar__discount-info'>82% off</span>
                </div>

                <div className="course-details-sidebar__announce px-5 mb-5 text-left ">
                    <p><span className='text-[#cf142f] font-bold'><i class="fa-solid fa-clock"></i> 10 hours</span> left at this price!</p>
                </div>

                <div className="course-details-sidebar__buttons px-5 mt-5">
                    <div className="course-details-sidebar__button-item flex justify-between items-center">
                        <button className='button__add-to-cart w-3/4 border border-[#3150aa] p-2 rounded-md'>Add to cart</button>
                        <button className='button__favorite w-1/5 border border-[#3150aa] p-2 rounded-md'><i class="fa-regular fa-heart text-[#cf142f]"></i></button>
                    </div>
                    <div className="course-details-sidebar__button-item mt-2">
                        <button className='button__buy-now border w-full bg-[#eed43d] p-2 rounded-md shadow-lg text-lg font-bold text-[#667abe]'>Buy now</button>
                    </div>
                </div>

                <div className="course-details-sidebar__summary text-left mt-5 px-5">
                    <p className='font-bold mb-2'>This course includes:</p>
                    <ul className='course-details-sidebar__summary-list'>
                        <li className="course-details-sidebar__summary-item text-sm mb-1">
                            <i class="fa-solid fa-video mr-2"></i> 22 hours on-demand video
                        </li>
                        <li className="course-details-sidebar__summary-item text-sm mb-1">
                            <i class="fa-solid fa-pen mr-2"></i> 19 exercises
                        </li>
                        <li className="course-details-sidebar__summary-item text-sm mb-1">
                            <i class="fa-solid fa-book mr-2"></i> 15 reading articles
                        </li>
                        <li className="course-details-sidebar__summary-item text-sm mb-1">
                            <i class="fa-solid fa-mobile mr-2"></i> Access on mobile and TV
                        </li>
                        <li className="course-details-sidebar__summary-item text-sm mb-1">
                            <i class="fa-solid fa-infinity mr-2"></i> Full lifetime access
                        </li>
                        <li className="course-details-sidebar__summary-item text-sm">
                            <i class="fa-solid fa-certificate mr-2"></i> Certificate of completion
                        </li>
                    </ul>
                </div>

                <div className="course-details-sidebar__coupon px-5 mt-5">
                    <div className="course-details-sidebar__applied-coupon border border[#3150aa] border-dashed flex justify-between items-center">
                        <div className="course-details-sidebar__coupon-code text-left w-2/3 p-2">
                            <p className='text-xs'><span className='text-sm font-bold'>ST7MT41824</span> is applied</p>
                            <p className='text-xs'>iLinguist coupon</p>
                        </div>
                        <div className="course-details-sidebar__remove-btn w-1/3 p-2">
                            <button className="button__remove w-full text-right"><i class="fa-solid fa-xmark text-xl"></i></button>
                        </div>
                    </div>
                    <div className="course-details-sidebar__coupon-input mt-3">
                        <input type="text" name="" id="" placeholder='Enter Coupon' className='w-3/4 border border-[#667abe] p-2' />
                        <button className='w-1/4 border border-[#667abe] bg-[#667abe] p-2 font-bold'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsSidebar;