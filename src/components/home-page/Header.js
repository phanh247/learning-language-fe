import React from 'react';
import '../home-page/Homepages.css';
import Image1 from '../../images/main-hp-img1.svg';

const Header = () => {
    return (
        <div className='header h-screen'>
            <div className="header__content-container flex justify-between items-center ">
                <div className="header__content w-[60%] text-left px-[7%]">
                    
                    <h1 className='header__title text-6xl mb-5 font-bold'>Learn new <br /><span className='text-[#eed43d]'>languages</span> and <br />move <span className='text-[#667abe]'>forward</span></h1>
                    
                    <p className='header__intro mb-5'>iLinguist, your personal gateway to mastering new languages in an engaging and intuitive way. our web app offers a unique blend of interactive lessons, AI-powered voice recognition exercises, and cultural immersion snippets that make learning not just educational but truly enhilarating.</p>

                    <div className="header__btn-container flex justify-between border-[#667abe] border-solid border-[1px] rounded-xl w-2/3 p-5">
                        
                        {/* Choose language */}
                        <div className="header__choose-language flex justify-between bg-[#ffdf00] rounded-xl w-3/4 px-5 py-2">

                            {/* User language */}
                            <div className="header__user-language mr-2 w-full">
                                <label for="country" class="block text-sm font-bold leading-6 text-gray-900">Your Language</label>
                                <div class="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6 bg-transparent cursor-pointer">
                                        <option>English</option>
                                        <option>Vietnamese</option>
                                    </select>
                                </div>
                            </div>
                            
                            {/* Separate line */}
                            <div className='header__separate-line border-black border-x-2'></div>
                            
                            {/* Choose language to learn */}
                            <div className="main-home-page__want-to-learn-language w-full ml-2">
                                <label for="country" class="block text-sm font-bold leading-6 text-gray-900">Want to learn</label>
                                <div class="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-[#3150aa] text-base sm:max-w-xs sm:text-sm sm:leading-6 bg-transparent cursor-pointer">
                                        <option>English</option>
                                        <option>Vietnamese</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className="header__go-btn bg-[#ffdf00] rounded-xl w-1/4 ml-3 relative">
                            <button className='w-full h-full rounded-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>GO</button>
                        </div>
                    </div>
                </div>

                <div className="header__image w-[40%]">
                    <img src={Image1} className='w-[90%]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;