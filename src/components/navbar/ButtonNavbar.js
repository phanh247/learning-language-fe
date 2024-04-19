import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonNavbar = () => {
  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };
  const redirectSignUp = () => {
    navigate("/register");
  };
  return (
    <div className="bottom-navbar">
      <ul className="homepage-navbar__btn-list flex items-center">
        <li className="homepage-navbar__btn-item">
          <button
            className="homepage-navbar__login-btn border-solid border-[1px] border-[#667abe] py-[10px] px-[30px] rounded-[50px] my-0 mx-auto w-[120px]"
            onClick={redirectLogin}
          >
            Login
          </button>
        </li>
        <li className="homepage-navbar__btn-item">
          <button
            className="homepage-navbar__signup-btn bg-[#667abe] text-white py-[10px] px-[30px] rounded-[50px] my-0 mx-auto w-[120px]"
            onClick={redirectSignUp}
          >
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonNavbar;
