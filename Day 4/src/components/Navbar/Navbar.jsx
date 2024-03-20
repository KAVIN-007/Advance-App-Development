import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close, avatar } from "../../assets";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => setToggle(!toggle);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/register/email");
  };
  const handleHomeClick = () => {
    if (location.pathname === "/user") {
      const bundlesSection = document.getElementById("bundles");
      bundlesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const heroSection = document.getElementById("hero");
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleBundlesClick = () => {
    if (location.pathname === "/user") {
      const bundlesSection = document.getElementById("bundles");
      bundlesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const heroSection = document.getElementById("bundles");
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleServicesClick = () => {
    if (location.pathname === "/user") {
      const bundlesSection = document.getElementById("categories");
      bundlesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const heroSection = document.getElementById("categories");
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleReviewsClick = () => {
    if (location.pathname === "/user") {
      const bundlesSection = document.getElementById("feedbacks");
      bundlesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const heroSection = document.getElementById("feedbacks");
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full h-[80px] bg-white border-b z-50">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <span
          className="h-[25px] font-bold pb-12"
          style={{ color: "#20B486", fontSize: "35px", fontFamily: "inherit" }}
        >
          SeniorVerve
        </span>

        <div className="hidden md:flex items-center">
          <ul className="flex flex-row gap-12 font-poppins text-xl">
            <li
              className="hover:text-red-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={handleHomeClick}
            >
              Home
            </li>
            {location.pathname !== "/user" && (
              <li className="hover:text-red-500 hover:transform hover:scale-105">
                About
              </li>
            )}
            <li
              className="hover:text-red-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={handleBundlesClick}
            >
              Bundles
            </li>
            <li
              className="hover:text-red-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={handleServicesClick}
            >
              Services
            </li>
            <li
              className="hover:text-red-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={handleReviewsClick}
            >
              Reviews
            </li>
          </ul>
        </div>

        {location.pathname === "/" && (
          <div className="hidden md:flex">
            <Link to="/login">
              <button className="flex justify-between items-center  bg-transparent  px-6 gap-2 pt-2">
                <img src={lock} />
                Login
              </button>
            </Link>
            <Link to="/register/email">
              <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
                Sign Up For Free
              </button>
            </Link>
          </div>
        )}

        {location.pathname === "/user" && (
          <div className="hidden md:flex items-center">
            <img src={avatar} className="w-12 h-12 rounded-full" alt="Avatar" />
          </div> 
        )}

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li
            className="p-4 hover:text-red-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={handleHomeClick}
          >
            Home
          </li>

          {location.pathname !== "/user" && (
            <>
              <li className="p-4 hover:text-red-500 hover:transform hover:scale-105">
                About
              </li>
            </>
          )}
          <li
            className="p-4 hover:text-red-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={handleBundlesClick}
          >
            Bundles
          </li>
          <li
            className="p-4 hover:text-red-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={handleServicesClick}
          >
            Service
          </li>
          <li
            className="p-4 hover:text-red-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={handleReviewsClick}
          >
            Reviews
          </li>
          {location.pathname === "/" && (
            <div className="flex flex-col my-4 gap-4">
              <button
                onClick={handleLogin}
                className="border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4 hover:bg-[#20B486] hover:text-white transition-colors duration-300"
              >
                <img src={lock} />
                Login
              </button>
              <button
                onClick={handleSignup}
                className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold hover:bg-opacity-80 transition duration-300"
              >
                Sign Up For Free
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
