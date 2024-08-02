import React, { useState } from "react";
import { MainData } from "../Constant/DataDets";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  const [data, setData] = useState(MainData);

  return (
    <div className="mb-28 mt-16 pt-4">
      {data.map((item, index) => (
        // console.log(`${item.name}.jsx`)
        <NavLink
          to={`/${item.name}`}
          key={index}
          name={item.name}
          className="w-11/12 mx-auto border rounded-lg flex justify-between items-center py-4 pr-3 my-2 bg-white "
        >
          <h2>{item.title}</h2>
          <span className="w-8 h-8  py-2">
            <MdOutlineArrowBackIos />
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default MainPage;
