import React from 'react';

import '../login/Login.css';
import FacebookLogo from '../../images/facebook-icon.svg';
import LinkedInLogo from '../../images/linkedin-icon.svg';
import GmailLogo from '../../images/gmail-icon.svg';


const LoginForm = () => {
    return (
        <div className='login flex items-center justify-between h-screen'>
            <div className="login__form-container flex flex-col justify-between py-[7%] px[3%] my-0 mx-auto h-full">

                {/* Login form */}
                <div className="login__form">
                    <h1 className='text-3xl mb-14'>LOGIN</h1>
                    <form action="">
                        <input type="text" name="" id="" placeholder='username/email/phone number' className='login__text-input' />
                        
                        <input type="password" name="" id="" placeholder='password' className='login__text-input' />

                        <div className="login__sub-input flex justify-between items-center mb-[30px]">
                            <div className="login__sub-input-item">
                                <input type="checkbox" name="" id="" className='cursor-pointer mr-1' />
                                <label htmlFor="" className='cursor-pointer'>Remember</label>
                            </div>
                            <div className="login__sub-input-item">
                                <a href="">Forgot your passwordaa</a>
                            </div>
                        </div>

                        <button type='submit' className='login-btn bg-[#eed43d] rounded-[5px] c-shadow font-bold text-lg py-[10px] px-[30px]'>SIGN IN</button>
                    </form>
                </div>

                {/* Login by other account */}
                <div className="login__social-account flex justify-start items-center">
                    <p className=''>Login with: </p>
                    <ul className="login__social-acc-list flex ml-3">
                        <li className="login__social-acc p-3">
                            <a href="" className='login__social-acc-link'>
                                <img src={FacebookLogo} alt="" className='w-10 h-10' />
                            </a>
                        </li>
                        <li className="login__social-acc p-3">
                            <a href="" className="login__social-acc-link">
                                <img src={LinkedInLogo} alt="" className='w-10 h-10' />
                            </a>
                        </li>
                        <li className="login__social-acc p-3">
                            <a href="" className="login__social-acc-link">
                                <img src={GmailLogo} alt="" className='w-10 h-10' />
                            </a>
                        </li>
                    </ul>   
                </div>

            </div>
            
            <div className="login__img relative w-[60%] h-full bg-no-repeat bg-center">
                    
            </div>
        </div>
    );
};

export default LoginForm;