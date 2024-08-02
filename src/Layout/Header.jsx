import React from "react";
import { LuPhoneCall } from "react-icons/lu";

import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex fixed w-[400px]  top-0  z-10  border-b  justify-between px-3   bg-white p-3 ">
      <div>
        {/* logo */}
        <img src={logo} alt="" className="  w-[140px] h-11 pl-[27px]" />
      </div>
      <div className="flex">
        {/* //bookmark */}

        <span>
          <LuPhoneCall className="m-[13px] h-6 w-6" />
        </span>
      </div>
    </div>
  );
};

export default Header;
