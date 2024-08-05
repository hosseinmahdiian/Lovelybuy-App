import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Page3 = () => {
  return (
    <div>
      <div className="relative mx-2  ">
        <input
          className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
          placeholder=" "
          id="search"
        />
        <label
          htmlFor="search"
          className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          جستجو با نام یا کد ملی{" "}
        </label>
      </div>
      {/* ================================================================================= */}

      <div className="pt-5">
        <h2>نیار به اقدام</h2>
        <div className="  pt-4">
          <div className="flex gap-3 items-center mx-5 child:pt-4 child:pr-4  child:bg-white  child:rounded-lg child:h-12 child:w-2/12">
            <div className="!w-10/12 pr-3 !pt-2 ">محمد حسنوند</div>
            <span>
              <MdKeyboardArrowLeft />
            </span>
            <Link to="/Dispacher/1">
              <span>
                <BsThreeDotsVertical />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================================================================================ */}

      <div className="pt-5">
        <h2> تحویل شده</h2>
        <div className="  pt-4">
          <div className="flex gap-3 items-center mx-5 child:pt-4 child:pr-4  child:bg-white  child:rounded-lg child:h-12 child:w-2/12">
            <div className="!w-10/12 pr-3 !pt-2 ">محمد حسنوند</div>
            <span className="text-red-600 text-sm !text-center !pr-1 ">
              1456
            </span>
            <span>
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
