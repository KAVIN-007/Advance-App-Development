import React from "react";
import CategoryCard from "../../Landing/Components/CategoryCard";
import { BsPeopleFill } from "react-icons/bs";
import { MdLocalLaundryService } from "react-icons/md";
import { MdFlashOn } from "react-icons/md";
import { MdCommute } from "react-icons/md";
import { MdBuild } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";

import { AiFillRobot } from "react-icons/ai"; // Icon for "Servants"

const User_Categories = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24"  id="categories">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <h1 className="md:leading-[72px] text-3xl font-bold">
          Top Picks for<span className="text-[#20B486]"> Home Services</span>
        </h1>
        <p className="text-lg text-gray-600">
          We take pride in our dedication to excellence and our commitment to
          making a positive impact in the lives of seniors.
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-2 py-12 md:gap-4 gap-1">
          <CategoryCard
            icons={<BsPeopleFill size={30} />}
            title={"Care Assistant"}
          />
          <CategoryCard
            icons={<MdLocalLaundryService size={30} />}
            title={"Housekeeping"}
          />
          <CategoryCard icons={<MdFlashOn size={30} />} title={"Electrician"} />
          <CategoryCard icons={<MdCommute size={30} />} title={"Driver"} />
          <CategoryCard icons={<MdBuild size={30} />} title={"Plumber"} />
          <CategoryCard icons={<MdWatchLater size={30} />} title={"Watchman"} />
          <CategoryCard icons={<FaUserNurse size={30} />} title={"Nurse"} />
          <CategoryCard
            icons={<GiHealthCapsule size={30} />}
            title={"Health Assistant"}
          />
          <CategoryCard icons={<AiFillRobot size={30} />} title={"Servants"} />
        </div>
      </div>
    </div>
  );
};

export default User_Categories;
