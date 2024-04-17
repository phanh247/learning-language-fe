import React from 'react';

const Footer = () => {
    return (
        <div className='footer bg-[#667abe]'>
            <div className="footer__container">
                <div className="footer__item">
                    <h4 className='footer__title'>About us</h4>
                    <ul className="footer-list">
                        <li className="footer__list-item">
                            About us
                        </li>
                        <li className="footer__list-item">
                            Privacy Policy
                        </li>
                        <li className="footer__list-item">
                            Terms of Services
                        </li>
                        <li className="footer__list-item">
                            
                        </li>
                    </ul>  
                </div>

                <div className="footer__item">
                    <h4 className='footer__title'>For Students</h4>
                    <ul className="footer-list">
                        <li className="footer__list-item">
                            Pricing
                        </li>
                        <li className="footer__list-item">
                            Free Trial
                        </li>
                        <li className="footer__list-item">
                            Courses
                        </li>
                        <li className="footer__list-item">
                            Community
                        </li>
                    </ul>  
                </div>

                <div className="footer__item">
                    <h4 className='footer__title'>For Teachers</h4>
                    <ul className="footer-list">
                        <li className="footer__list-item">
                            Privacy Policy
                        </li>
                        <li className="footer__list-item">
                            Terms of Services
                        </li>
                    </ul>  
                </div>
                <div className="footer__item">
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;