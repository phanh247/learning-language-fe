import React from 'react';

const Footer = () => {
    return (
        <div className='footer bg-[#667abe] px-[7%] py-[5%] relative'>
            <div className="footer__container grid grid-cols-4 gap-x-3 justify-items-center text-left">
                <div className="footer__item">
                    <h4 className='footer__title font-bold mb-5'>About us</h4>
                    <ul className="footer-list">
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>About us</a>
                        </li>
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>Privacy Policy</a>
                        </li>
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>Terms of Services</a>
                        </li>
                    </ul>  
                </div>

                <div className="footer__item">
                    <h4 className='footer__title font-bold mb-5'>For Students</h4>
                    <ul className="footer-list">
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>Pricing</a>
                        </li>
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>Free Trial</a>
                        </li>
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>Courses</a>
                        </li>
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>Community</a>
                        </li>
                    </ul>  
                </div>

                <div className="footer__item">
                    <h4 className='footer__title font-bold mb-5'>For Teachers</h4>
                    <ul className="footer-list">
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>Teaching Privacy Policy</a>
                        </li>
                        <li className="footer__list-item mb-1">
                            <a href="" className='hover:underline'>Privacy Policy</a>
                        </li>
                    </ul>  
                </div>

                <div className="footer__item">
                    <h4 className='footer__title font-bold mb-5'>Contact Us</h4>
                    <ul className="footer-list flex justify-between items-center text-2xl text-[#fbdf00]">
                        <li className="footer__list-item mr-2">
                            <a href="">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li className="footer__list-item m-2">
                            <a href="">
                                <i class="fa-brands fa-google"></i>
                            </a>
                        </li>
                        <li className="footer__list-item m-2">
                            <a href="">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="footer__list-item m-2">
                            <a href="">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li className="footer__list-item ml-2">
                            <a href="">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                    </ul> 
                </div>
            </div>

            <div className="footer__copyright-container absolute bottom-2 left-1/2 -translate-x-1/2">
                <p className='footer__copyright'><i class="fa-solid fa-heart text-[#fbdf00] mr-2"></i> Copyright by Phanh, 2024<i class="fa-solid fa-heart text-[#fbdf00] ml-2"></i></p>
            </div>
        </div>
    );
};

export default Footer;