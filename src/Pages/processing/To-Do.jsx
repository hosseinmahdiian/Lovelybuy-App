import React from "react";
import { PiShieldCheck } from "react-icons/pi";
import { RxCheck } from "react-icons/rx";
import Yogurt from "../../assets/images/yogurt.png";

const ToDo = ({ check }) => {
  return (
    <div>
      <div className="flex items-center h-16 justify-between w-11/12 mx-auto  my-2 ">
        <div className="flex items-center gap-4  ">
          <img src={Yogurt} alt="" className="w-16 h-16 border rounded-lg" />
          <div>
            <h2>ماست سون</h2>
            <p>12 عدد</p>
          </div>
        </div>
        <span> { !check ? <PiShieldCheck /> : <RxCheck className="text-green-500" />}</span>
      </div>
      <hr />
    </div>
  );
};

export default ToDo;
