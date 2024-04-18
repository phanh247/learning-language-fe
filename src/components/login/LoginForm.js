import React, { useState, useContext } from "react";
import "../login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useCookies } from "react-cookie";
import AuthContext from "../context/AuthProvider";

import { Alert, Stack } from "@mui/material";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const isPhoneNumberFormat = (email) => /^[0-9]{10}$/i.test(email);
const isNumeric = (email) => /^[0-9]+$/.test(email);

const LOGIN_URL = "/auth/login";

const LoginForm = () => {
  //Inputs
  const [user, setUser] = useContext(AuthContext);
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const [dataResponse, setDataResponse] = useState([]);
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [rememberMe, setRememberMe] = useState();

  // Inputs Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColor = isHovered ? "#3150aa" : "black";

  async function loginProcess() {
    await axios
      .post(
        LOGIN_URL,
        {
          email: emailInput,
          password: passwordInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setDataResponse(response.data);
        if (
          response.data.statusCode === "BAD_REQUEST" ||
          response.data.statusCode === "FORBIDDEN"
        ) {
          setFormValid(response.data.message);
        } else {
          setSuccess(response.data.token);
          setCookie("accessToken", response.data.token);
          setCookie("refreshToken", response.data.refreshToken);
          setUser({
            userName: "UserName",
            isAuthenticated: true,
            role: "ADMIN",
          });
          navigate("/user");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Label for Checkbox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Validation for onBlur Email
  const handleEmail = () => {
    if (isNumeric(emailInput)) {
      if (!isPhoneNumberFormat(emailInput)) {
        setEmailError(true);
        return;
      }
    } else if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    if (!passwordInput) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(null);
    //First of all Check for Errors

    // If Email error is true
    if (emailError || !emailInput) {
      if (!emailInput) {
        setFormValid("Email is mandatory");
        return;
      }
      if (emailError) {
        setFormValid("Email or phone number is invalid");
        return;
      }
    }

    // If Password error is true
    if (passwordError || !passwordInput) {
      setFormValid("Password is mandatory");
      return;
    }
    setFormValid(null);
    loginProcess();
  };
  return (
    <div className="login flex items-center justify-between h-screen">
      <div className="login__form-container flex flex-col justify-between py-[7%] px[3%] my-0 mx-auto h-full">
        {/* Login form */}
        <div className="login__form">
          <h1 className="text-3xl mb-14">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              id=""
              placeholder="username/email/phone number"
              className="login__text-input"
              error={emailError}
              value={emailInput}
              onBlur={handleEmail}
              onChange={(event) => {
                setEmailInput(event.target.value);
              }}
            />

            <input
              type="password"
              name=""
              id=""
              placeholder="password"
              className="login__text-input"
              error={passwordError}
              value={passwordInput}
              onBlur={handlePassword}
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
            />

            <div className="login__sub-input flex justify-between items-center mb-[30px]">
              <div className="login__sub-input-item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer mr-1"
                  {...label}
                  size="small"
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <label htmlFor="" className="cursor-pointer">
                  Remember
                </label>
              </div>
              <div
                className="login__sub-input-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ color: textColor }}
              >
                <Link to="/password">Forgot your password</Link>
              </div>
            </div>

            <button
              type="submit"
              className="login-btn bg-[#eed43d] rounded-[5px] c-shadow font-bold text-lg py-[10px] px-[30px]"
            >
              SIGN IN
            </button>
          </form>
          <br />
          <p>
            Do you have an account ?
            <Link
              to="/signup"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ color: textColor }}
            >
              Sign up now
            </Link>
          </p>
        </div>
        {formValid && (
          <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
            <Alert severity="error" size="small">
              {formValid}
            </Alert>
          </Stack>
        )}

        {/* Login by other account */}
        <div className="login__social-account flex justify-start items-center">
          <p className="">Login with: </p>
          <ul className="login__social-acc-list flex ml-3">
            <li className="login__social-acc p-3">
              <a href="" className="login__social-acc-link">
                <img
                  src={
                    "https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415320/Phanh/facebook-icon_gtufeq.svg"
                  }
                  alt=""
                  className="w-10 h-10"
                />
              </a>
            </li>
            <li className="login__social-acc p-3">
              <a href="" className="login__social-acc-link">
                <img
                  src={
                    "https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415330/Phanh/linkedin-icon_oehtag.svg"
                  }
                  alt=""
                  className="w-10 h-10"
                />
              </a>
            </li>
            <li className="login__social-acc p-3">
              <a href="" className="login__social-acc-link">
                <img
                  src={
                    "https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415323/Phanh/gmail-icon_asz6vc.svg"
                  }
                  alt=""
                  className="w-10 h-10"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="login__img relative w-[60%] h-full bg-no-repeat bg-center"></div>
    </div>
  );
};

export default LoginForm;
