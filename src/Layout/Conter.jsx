import React, { useContext } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiCategory, BiShoppingBag } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RiFilterLine, RiHome2Line } from "react-icons/ri";
// import { MobileOnlyView } from "react-device-detect";

const Conter = () => {
  return (
    <div>
      {/* <MobileOnlyView> */}
      <div className={`   relative  justify-center flex  `}>
        <div className="fixed  bottom-0 z-10 flex my-5 bg-slate-50   w-[400px] shadow-md  h-16 justify-around mx-auto border-2 font-IrSans text-[12px] border-black rounded-3xl items-center container child:text-center ">
          
          <span className=" ">
            <IoIosSearch className=" mx-auto text-2xl" />
          </span>

          <span>
            <BiShoppingBag className=" mx-auto text-2xl" />
          </span>

          <span>
            <RiFilterLine className=" mx-auto text-2xl" />
          </span>
          <span>
            <MdOutlinePersonOutline className=" mx-auto text-2xl" />
          </span>
        </div>
      </div>
      {/* </MobileOnlyView> */}
    </div>
  );
};

export default Conter;
