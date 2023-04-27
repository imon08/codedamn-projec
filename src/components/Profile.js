import React, { useState } from "react";
import { AiOutlineChrome } from "react-icons/ai";
import useHover from "../hooks/useHover";

const Profile = () => {
  const [tab, setTab] = useState("profile");
  const [hoverRef, isHovered] = useHover();

  const handleChange = (value) => {
    setTab(value);
  };

  const arr = ["Profile", "Socials", "Portfolio", "Resume"];

  return (
    <div className="w-[20%] mt-14 m-4 rounded-xl py-3 bg-gray-100">
      {arr.map((item) => {
        return (
          <div key={item} ref={hoverRef}>
            {isHovered ? (
              <div
                value="profile"
                onClick={() => handleChange(item)}
                className="h-10 pl-9 flex items-center gap-1 text-sm font-bold text-gray-500 cursor-pointer relative"
              >
                <AiOutlineChrome /> 😁
                {item}
                <div className="absolute w-2 h-full left-0 hover:bg-black" />
              </div>
            ) : (
              <div
                value="profile"
                onClick={() => handleChange(item)}
                className="h-10 pl-9 flex items-center gap-1 text-sm font-bold text-gray-500 cursor-pointer relative"
              >
                <AiOutlineChrome /> ☹️
                {item}
                <div className="absolute w-2 h-full left-0 hover:bg-black" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
