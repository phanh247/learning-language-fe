import React, { useState } from "react";
import axios from "../utils/axios";
import { Link, useNavigate } from "react-router-dom";

// Material UI Imports
import { Alert, Stack } from "@mui/material";
import HoverEffect from "../utils/HoverEffect";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isValidPasword = (password) => /^(?=.*[a-z]).{8,}$/i.test(password);

const RegisterForm = () => {
  async function registerProcess() {
    await axios
      .post(
        "/register",
        {
          email: emailInput,
          password: passwordInput,
          fullName: fullNameInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setData(response.data);
        console.log(response);
        if (
          response.data.statusCode === "BAD_REQUEST" ||
          response.data.statusCode === 400
        ) {
          setFormValid(response.data.message);
        } else {
          setSuccess(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Inputs
  const [data, setData] = useState([]);
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [confirmPasswordInput, setConfirmPasswordInput] = useState();
  const [fullNameInput, setFullNameInput] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [labelColor, setLabelColor] = useState("black");

  // Inputs Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const textColor = isHovered ? "#3150aa" : "black";

  // Validation for onBlur First Name
  const handleFullName = () => {
    if (!fullNameInput) {
      setFullNameError(true);
      return;
    }
    setFullNameError(false);
  };

  // Validation for onBlur Email
  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  // Validation for onBlur passowrd
  const handlePassword = () => {
    if (!isValidPasword(passwordInput)) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  // Validation for onBlur confirm Password
  const handleConfirmPassword = () => {
    if (passwordInput !== confirmPasswordInput) {
      setConfirmPasswordError(true);
      return;
    }

    setConfirmPasswordError(false);
  };

  //handle Submittion
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(null);
    //First of all Check for Errors

    // IF fullName error is true
    if (fullNameError || !fullNameInput) {
      setFormValid("Full Name can not be blank");
      return;
    }

    // If Email error is true
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid");
      return;
    }

    // If Password error is true
    if (passwordError || !passwordInput) {
      setFormValid("Password must be minimum 8 characters long");
      return;
    }

    //  If Confirm Password error is true
    if (confirmPasswordError || !confirmPasswordInput) {
      setFormValid("Confirm password does not match");
      return;
    }

    // If checkbox is not checked, change label color to indicate it
    if (!isChecked) {
      setLabelColor("red");
      setTimeout(() => {
        setLabelColor("black"); // Revert label color back to black after 2 seconds
      }, 2000);
      return;
    }

    setFormValid(null);
    registerProcess();
  };
  return (
    <div className="register-form bg-white rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] p-10">
      <div className="register-form__main">
        <h1 className="register-form__title font-bold text-3xl text-left mb-10">
          Create An Account
        </h1>
        <form className="text-left" onSubmit={handleSubmit}>
          <label htmlFor="" className="block font-bold text-base mt-5">
            Full Name
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter email"
            className="block p-3 border rounded-xl w-full mt-2"
            error={fullNameError}
            label="First Name"
            variant="standard"
            sx={{ width: "80%" }}
            size="small"
            value={fullNameInput}
            InputProps={{}}
            onChange={(event) => {
              setFullNameInput(event.target.value);
            }}
            onBlur={handleFullName}
          />

          <label htmlFor="" className="block font-bold text-base mt-5">
            Email address
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter email"
            className="block p-3 border rounded-xl w-full mt-2"
            error={emailError}
            value={emailInput}
            onBlur={handleEmail}
            onChange={(event) => {
              setEmailInput(event.target.value);
            }}
          />

          <label htmlFor="" className="block font-bold text-base mt-5">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter password"
            className="block p-3 border rounded-xl w-full mt-2"
            error={passwordError}
            value={passwordInput}
            onBlur={handlePassword}
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
          />

          <label htmlFor="" className="block font-bold text-base mt-5">
            Confirm Password
          </label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter confirm password"
            className="block p-3 border rounded-xl w-full mt-2"
            error={confirmPasswordError}
            value={confirmPasswordInput}
            InputProps={{}}
            onBlur={handleConfirmPassword}
            onChange={(event) => {
              setConfirmPasswordInput(event.target.value);
            }}
          />

          <input
            type="checkbox"
            name=""
            id=""
            className="mt-5 mr-1 w-[15px] h-[15px]"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor=""
            className="text-sm text-gray-600"
            style={{ color: labelColor }}
          >
            I agree to the platforms <a href="">Terms of Service</a> and{" "}
            <a href="">Privacy Policy</a>
          </label>
          {formValid && (
            <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
              <Alert severity="error" size="small">
                {formValid}
              </Alert>
            </Stack>
          )}
          {success && (
            <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
              <Alert severity="success" size="small">
                {success}
              </Alert>
            </Stack>
          )}

          <button className="block mt-10 bg-[#eed43d] w-full rounded-xl p-3 text-lg font-bold">
            Continue
          </button>
        </form>
      </div>

      <div className="separate-line mt-10 relative">
        <hr />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5">
          or
        </div>
      </div>

      <div className="register-form__footer mt-10">
        <div className="register-form__footer-item">
          <p>
            Already have an account?
            <HoverEffect hoverColor="blue">
              <Link to="/login">Log in</Link>
            </HoverEffect>
          </p>
        </div>
        <div className="register-form__footer-item mt-5 flex">
          <HoverEffect hoverColor="blue">
            <button className="p-3 border w-full mr-5 rounded-lg border-[#667abe] font-bold">
              <i class="fa-brands fa-google gmail-icon"></i> Sign up with Google
            </button>
          </HoverEffect>
          <HoverEffect hoverColor="blue">
            <button className="p-3 border w-full ml-5 rounded-lg border-[#667abe] font-bold">
              <i class="fa-brands fa-facebook text-[#3150aa]"></i> Sign up with
              Facebook
            </button>
          </HoverEffect>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
