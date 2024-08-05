import React from "react";
import { CiSettings } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

const Page1 = () => {
  return (
    <div className=" mt-24">
      <div className="flex gap-3 items-center w-full mx-3">
        <div className="relative  !w-9/12 ">
          <input
            className="peer border-2 rounded-2xl outline-gray-300 h-16  !w-full"
            placeholder=" "
            id="name"
          />
          <label
            htmlFor="name"
            className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            جستجوی نام یا کدملی{" "}
          </label>
        </div>
        <span className="w-16 h-16 bg-white  border-2 rounded-2xl p-5">
          <FiPlus className="text-xl" />
        </span>
      </div>
      {/*  */}
      <div
        className={`
            pt-5  w-11/12 mx-auto  font-IrSans  relative `}
      >
        <select
          name=""
          id=""
          className=" w-full p-2 block  mx-auto h-12 rounded-lg  "
        >
          <option value="">----------</option>
          <option value="">بیمارستان عشایر</option>
          <option value=""> دانشگاه علوم پزشکی لرستان</option>
        </select>
      </div>

      {/* ================================= */}
      <div className="mx-3 mt-3">
        <div className="flex gap-3 items-center   ">
          <div className=" bg-white -0 h-16 rounded-xl w-11/12">
            <div className=" mx-2  ">
              <div className="flex  gap-4 justify-around ">
                <h2>4060405531</h2>
                <h2>اشکان حسنوند</h2>
              </div>
              <div className="flex  gap-4 justify-around ">
                <h2>5531</h2>
                <h2>09216919291</h2>
              </div>
            </div>
          </div>
          <span className="w-16 h-16 bg-white  border-2 rounded-2xl p-5">
            <CiSettings className="text-xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page1;
