import React from "react";
import { achievement } from "../../../assets";
import { FiHeart, FiShoppingBag, FiUsers } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";


const Achievement = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0 gap-x-4">
        <div className="flex flex-col justify-center">
          <h1 className="py-3 text-3xl font-bold">
            Explore Our{" "}
            <span className="text-[#20B486]">Remarkable Achievements</span>
          </h1>
          <p className="text-lg text-gray-600">
            Discover the milestones we&apos;ve reached on our journey of
            excellence, shaped by dedication and innovation.
          </p>

          <div className="grid grid-cols-2 py-16 gap-y-4">
            <div className="py-6 flex">
              <div className="p-4 bg-[#E9F8F3] rounded-xl">
                <FiShoppingBag size={30} style={{ color: "#1A906B" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">300+</h1>
                <p className="text-[#6D737A]">Services Delivered</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFFAF5] rounded-xl">
                <FiUsers size={30} style={{ color: "#FFC27A" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">1,000+</h1>
                <p className="text-[#6D737A]">Talented Employees</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFEEF0] rounded-xl">
                <FiHeart size={30} style={{ color: "#ED4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">10,000+</h1>
                <p className="text-[#6D737A]">Strong Partnerships</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#F0F7FF] rounded-xl">
                <SlPeople size={30} style={{ color: "#0075FD" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">1,00,000+</h1>
                <p className="text-[#6D737A]">Satisfied Users</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={achievement}
          className="m-auto md:order-last order-first"
          alt="Achievement"
        />
      </div>
    </div>
  );
};

export default Achievement;
