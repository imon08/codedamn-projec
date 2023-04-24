import React, { useState } from "react";
import { AiOutlineChrome } from "react-icons/ai";

const Profile = () => {
  const [tab, setTab] = useState("profile");

  const handleChange = (value) => {
    setTab(value);
  };
  return (
    <div
      value="profile"
      onClick={() => handleChange("profile")}
      className="w-[20%] mt-14 m-4 rounded-xl py-3 bg-gray-100"
    >
      <div className="h-10 flex items-center gap-1 text-sm font-bold text-gray-500 cursor-pointer">
        <div className="w-1 h-[60%] rounded-r-lg bg-black"></div>
        <AiOutlineChrome />
        Profile
      </div>
      <div
        value="socials"
        onClick={() => handleChange("socials")}
        className="h-10 flex items-center gap-1 pl-2 text-sm font-bold text-gray-500 cursor-pointer"
      >
        <AiOutlineChrome />
        Socials
      </div>
      <div
        value="portfolio"
        onClick={() => handleChange("portfolio")}
        className="h-10 flex items-center gap-1 pl-2 text-sm font-bold text-gray-500 cursor-pointer"
      >
        <AiOutlineChrome />
        Portfolio
      </div>
      <div
        value="resume"
        onClick={() => handleChange("resume")}
        className="h-10 flex items-center gap-1 pl-2 text-sm font-bold text-gray-500 cursor-pointer"
      >
        <AiOutlineChrome />
        Resume
      </div>
    </div>
  );
};

export default Profile;