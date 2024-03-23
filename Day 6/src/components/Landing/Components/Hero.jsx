import React from "react";
import { landing_1 } from "../../../assets"; // Assuming you have an image for senior care
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24" id="hero">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-10 md:px-0">
        <div className="flex flex-col justify-center gap-4">
          <p className="py-2 text-2xl text-[#20B486] font-medium">
            CARE FOR SENIOR CITIZENS
          </p>
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            Access <span className="text-[#20B486]">100+</span> Quality Senior
            Care Services from <span className="text-[#20B486]">300</span>{" "}
            Trusted Caregivers
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Providing compassionate care for your loved ones.
          </p>
        </div>

        <img
          src={landing_1}
          className="md:order-last order-first"
          alt="Senior Care"
        />
      </div>
    </div>
  );
};

export default Hero;
