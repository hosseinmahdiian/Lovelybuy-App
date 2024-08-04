import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Page1 = () => {
  return (
    <div className="">
      <div className="mx-3 px-3 h-20  flex justify-between items-center rounded-2xl bg-white mb-4 ">
        <h2>بیمارستان عشایر</h2>
        <span>
          <MdOutlineArrowBackIos />
        </span>
      </div>
      {/* ----------------------------------------------- */}
      <div className="mx-3 px-3 h-20  flex justify-between items-center rounded-2xl bg-white ">
        <h2>بیمارستان عشایر</h2>
        <span>
          <MdOutlineArrowBackIos />
        </span>
      </div>
    </div>
  );
};

export default Page1;
