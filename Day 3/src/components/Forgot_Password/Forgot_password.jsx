import React, { useState } from "react";
import cover from "../../assets/10.png";
// import ship from "../assets/boat.png";
import pfp from "../../assets/pfp.png";
import check from "../../assets/eye-check.png";
import uncheck from "../../assets/eye-uncheck.png";
import correct from "../../assets/correct.png";
import incorrect from "../../assets/incorrect.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Forgot_password() {
  // states for the fields
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  // states for the eyes
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // states for the errors
  const [inputErrors, setInputErrors] = useState({
    password: "",
    confirmPass: "",
    phoneFormat: "",
    passwordValidation: "",
  });

  // states for the toggles
  const [toggle, setToggle] = useState([
    {
      id: 1,
      url: incorrect,
      name: "Atleast 6 characters are present",
      error: "Please Include atleast 6 characters in your password",
    },
    {
      id: 2,
      url: incorrect,
      name: "Atleast 2 numbers are present",
      error: "Please Include atleast 2 numbers in your password",
    },
    {
      id: 3,
      url: incorrect,
      name: "Atleast 1 Symbol is present",
      error: "Please Include atleast 1 Symbol in your password",
    },
    {
      id: 4,
      url: incorrect,
      name: "Two password should match",
      error: "Confirm password and password should be same",
    },
  ]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value, confirmPass);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPass(e.target.value);
    validatePassword(password, e.target.value);
  };

  // here we will update the toggles based on the password
  const validatePassword = (pass, confirm) => {
    const numRegex = /\d/g;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/g;

    let updatedToggle = [...toggle];

    // Check password length
    updatedToggle[0].url = pass.length >= 6 ? correct : incorrect;

    // Check for at least 2 numbers
    updatedToggle[1].url =
      (pass.match(numRegex) || []).length >= 2 ? correct : incorrect;

    // Check for at least 1 symbol
    updatedToggle[2].url = symbolRegex.test(pass) ? correct : incorrect;

    // Check if passwords match
    updatedToggle[3].url = pass === confirm ? correct : incorrect;

    setToggle(updatedToggle);
  };

  // these two are there for the visible icons
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // here we map each toggle item to a div
  const renderToggleItems = () => {
    return toggle.map((item) => (
      <div className="w-full flex items-center" key={item.id}>
        <img src={item.url} alt="check" className="w-6 h-6 mr-2" />
        <p className="text-sm py-2">{item.name}</p>
      </div>
    ));
  };

  // here we handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // making sure that all previous errors are gone.
    errors.password = "";
    errors.confirmPass = "";
    errors.phoneFormat = "";
    errors.passwordValidation = "";

    // Check for empty fields
    if (!password.trim()) {
      errors.password = "Please enter your password.";
    }
    if (!confirmPass.trim()) {
      errors.confirmPass = "Please enter your password again.";
    }

    // Check if all password validation icons are correct
    const allIconsCorrect = toggle.every((item) => item.url === correct);
    const incorrectErrors = toggle
      .filter((item) => item.url === incorrect)
      .map((item) => item.error);
    if (!allIconsCorrect && incorrectErrors.length > 0) {
      errors.passwordValidation = incorrectErrors[0]; // Display the first password validation error
    }

    setInputErrors(errors);

    // If any required field is empty or the phone number format is incorrect, stop form submission
    if (Object.values(errors).some((error) => error)) {
      const firstError = Object.values(errors).find((error) => error);
      Swal.fire({
        title: "Error!",
        text: firstError,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Navigate to the landing page
    navigate("/");

    console.log("Password:", password);
  };

  return (
    <div className="w-full h-screen flex items-start">
      {/* Left side cover Image */}
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src={cover}
          alt="cover_image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actual Form */}
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col px-10 py-14 justify-between">
        <div className="flex flex-row justify-between items-start">
          <h1 className="text-5xl text-[#FF204E] font-lobster font-bold mb-8">
            SeniorVerve
          </h1>
          <img src={pfp} alt="ship" className="h-14 w-14" />
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-merriweather font-bold mb-4">
              Enter Your Password
            </h3>
            <p className="text-base mb-2">
              Greetings! Make Sure to remember your password this time.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <div className="relative">
                <div className="w-full flex flex-row">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    className={`w-full text-black px-4 py-4 my-2 bg-none border-b border-black outline-none focus:outline-none ${
                      inputErrors.password ? "border-red-500" : ""
                    }`}
                  />
                  <img
                    src={showPassword ? check : uncheck}
                    alt="eye"
                    className="absolute h-8 w-8 my-7 ml-10 right-12 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="w-full flex flex-row">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    onChange={handleConfirmPasswordChange}
                    className={`w-full text-black px-4 py-4 my-2 bg-none border-b border-black outline-none focus:outline-none ${
                      inputErrors.confirmPass ? "border-red-500" : ""
                    }`}
                  />
                  <img
                    src={showConfirmPassword ? check : uncheck}
                    alt="eye"
                    className="absolute h-8 w-8 my-7 ml-10 right-12 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </div>
              </div>
            </div>

            {/* Password Validation Icons */}
            <div className="w-full flex flex-col p-4 items-center justify-between">
              {renderToggleItems()}
            </div>

            <div className="w-full flex flex-col">
              <button
                type="submit"
                className="w-full text-2xl font-poppins text-white my-4 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
              >
                Change your password
              </button>
            </div>
          </form>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Came here by accident?{" "}
            <Link
              to="/login"
              className="font-semibold underline underline-offset-2 cursor-pointer pl-1"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forgot_password;
