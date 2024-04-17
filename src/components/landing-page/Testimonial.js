import React from 'react';
import Student1 from '../../images/girl-1.svg';
import Student2 from '../../images/girl-2.svg';
import Student3 from '../../images/man.svg';

const Testimonial = () => {
    return (
        <div className='testimonial px-[7%] py-[5%]'>
            <h2 className='testimonial__title text-3xl mb-20 font-bold'><span className='text-[#667abe]'>Reviews</span> from our students</h2>

            <div className="testimonial__container grid grid-cols-3 gap-x-3 justify-items-center">
                
                <div className="testimonial__item c-shadow p-5 w-[80%] rounded-xl text-left">
                    <div className="testimonial__comment-container">
                        <p className="testimonial__comment">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo beatae, itaque maiores veritatis exercitationem aliquid nesciunt placeat, earum dignissimos vitae pariatur!</p>
                    </div>
                    
                    <div className="testimonial__author-info-container flex justify-start items-center mt-5">
                        <img src={Student1} alt="" className="testimonial__img w-1/4 rounded-full" />
                        <div className="testimonial__author-info ml-5">
                            <h4 className="testimonial__author-name font-bold mb-1">Sophie, 25</h4>
                            <span className="testimonial__author-location text-sm">U.S.A</span>
                        </div>
                    </div>
                </div>
                
                <div className="testimonial__item c-shadow p-5 w-[80%] rounded-xl text-left">
                    <div className="testimonial__comment-container">
                        <p className="testimonial__comment">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo beatae, itaque maiores veritatis exercitationem aliquid nesciunt placeat, earum dignissimos vitae pariatur!</p>
                    </div>
                    
                    <div className="testimonial__author-info-container flex justify-start items-center mt-5">
                        <img src={Student2} alt="" className="testimonial__img w-1/4 rounded-full" />
                        <div className="testimonial__author-info ml-5">
                            <h4 className="testimonial__author-name font-bold mb-1">Juliette, 14</h4>
                            <span className="testimonial__author-location text-sm">France</span>
                        </div>
                    </div>
                </div>

                <div className="testimonial__item c-shadow p-5 w-[80%] rounded-xl text-left">
                    <div className="testimonial__comment-container">
                        <p className="testimonial__comment">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo beatae, itaque maiores veritatis exercitationem aliquid nesciunt placeat, earum dignissimos vitae pariatur!</p>
                    </div>
                    
                    <div className="testimonial__author-info-container flex justify-start items-center mt-5">
                        <img src={Student3} alt="" className="testimonial__img w-1/4 rounded-full" />
                        <div className="testimonial__author-info ml-5">
                            <h4 className="testimonial__author-name font-bold mb-1">Henry, 30</h4>
                            <span className="testimonial__author-location text-sm">Mexico</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;