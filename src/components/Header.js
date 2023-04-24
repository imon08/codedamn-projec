import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [value, setValue] = useState("Courses ∨");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="h-5 w-ful flex">
      <div>codedamn</div>
      <div>
        <div className="border-2 border-gray-100">
          <BsSearch />
          <input type="text" placeholder="Search" />
          <div>
            <select value={value} onChange={handleChange}>
              <option value="fruit">Course A</option>
              <option value="vegetable">Course B</option>
              <option value="meat">Course C</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
