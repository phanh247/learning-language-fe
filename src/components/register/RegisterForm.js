import React from 'react';

const RegisterForm = () => {
    return (
        <div className='register-form bg-white rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] p-10'>
            <div className="register-form__main">
                <h1 className='register-form__title font-bold text-3xl text-left mb-10'>Create An Account</h1>
                <form action="" className='text-left'>
                    <label htmlFor="" className='block font-bold text-base mt-5'>Email address</label>
                    <input type="email" name="" id="" placeholder='Enter email' className='block p-3 border rounded-xl w-full mt-2' />

                    <label htmlFor="" className='block font-bold text-base mt-5'>Password</label>
                    <input type="password" name="" id="" placeholder='Enter password' className='block p-3 border rounded-xl w-full mt-2' />

                    <input type="checkbox" name="" id="" className='mt-5 mr-1 w-[15px] h-[15px]'/>
                    <label htmlFor="" className='text-sm text-gray-600'>I agree to the platforms <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></label>

                    <button className='block mt-10 bg-[#eed43d] w-full rounded-xl p-3 text-lg font-bold'>Continue</button>
                </form>
            </div>

            <div className="separate-line mt-10 relative">
                <hr />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5'>or</div>
            </div>

            <div className="register-form__footer mt-10">
                <div className="register-form__footer-item">
                    <p>Already have an account? Log in</p>
                </div>
                <div className="register-form__footer-item mt-5 flex">
                    <button className='p-3 border w-full mr-5 rounded-lg border-[#667abe] font-bold'><i class="fa-brands fa-google gmail-icon"></i> Sign up with Google</button>
                    <button className='p-3 border w-full ml-5 rounded-lg border-[#667abe] font-bold'><i class="fa-brands fa-facebook text-[#3150aa]"></i> Sign up with Facebook</button>
                </div>
            </div>

        </div>
    );
};

export default RegisterForm;