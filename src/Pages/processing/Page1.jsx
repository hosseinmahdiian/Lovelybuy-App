import React from "react";
import { FiPrinter } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Page1 = () => {
  return (
    <div className="">
      <div className="flex gap-3 items-center mx-4 mb-4 ">
        <h2 className="w-8/12  h-16 bg-white rounded-xl px-3 items-center flex">
          بیمارستان عشایر
        </h2>
        <span className="w-2/12  h-16 bg-white rounded-xl px-3 items-center flex ">
          <FiPrinter className="mx-auto" />
        </span>
        <span className="w-2/12  h-16 bg-white rounded-xl px-3 items-center flex ">
          <GiSettingsKnobs className="mx-auto" />
        </span>
      </div>
      {/* ----------------------------------------------- */}
      <div className="flex gap-3 items-center mx-4 mb-4 ">
        <h2 className="w-8/12  h-16 bg-white rounded-2xl px-3 items-center flex">
          بیمارستان عشایر
        </h2>
        <span className="w-2/12  h-16 bg-white rounded-2xl px-3 items-center flex ">
          <FiPrinter className="mx-auto" />
        </span>
        <span className="w-2/12  h-16 bg-white rounded-2xl px-3 items-center flex ">
          <GiSettingsKnobs className="mx-auto" />
        </span>
      </div>
    </div>
  );
};

export default Page1;
