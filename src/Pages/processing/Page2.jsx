import React from "react";
import Yogurt from "../../assets/images/yogurt.png";
import { PiShieldCheck } from "react-icons/pi";
import { RxCheck } from "react-icons/rx";

const Page2 = () => {
  return (
    <>
      {/* <div className="gap-4  mb-4"> */}
      <div className="mx-2  ">
        <h2>نیاز به اقدام</h2>
        <div className="bg-white p-2 rounded-lg mt-3">
          <div className="flex items-center h-16 justify-between w-11/12 mx-auto  my-2 ">
            <div className="flex items-center gap-4  ">
              <img
                src={Yogurt}
                alt=""
                className="w-16 h-16 border rounded-lg"
              />
              <div>
                <h2>ماست سون</h2>
                <p>12 عدد</p>
              </div>
            </div>
            <span>
              <PiShieldCheck />
            </span>
          </div>
          <hr />
          <div className="flex items-center h-16 justify-between w-11/12 mx-auto  my-2">
            <div className="flex items-center gap-4">
              <img
                src={Yogurt}
                alt=""
                className="w-16 h-16 border rounded-lg"
              />
              <div>
                <h2>ماست سون</h2>
                <p>12 عدد</p>
              </div>
            </div>
            <span>
              <PiShieldCheck />
            </span>
          </div>
        </div>
      </div>
      <div className="mx-2  my-5 ">
        <h2>انجام شده</h2>
        <div className="bg-white p-2 rounded-lg mt-3">
          <div className="flex items-center h-16 justify-between w-11/12 mx-auto   my-2 ">
            <div className="flex items-center gap-4">
              <img
                src={Yogurt}
                alt=""
                className="w-16 h-16 border rounded-lg"
              />
              <div>
                <h2>ماست سون</h2>
                <p>12 عدد</p>
              </div>
            </div>
            <span>
              <RxCheck className="text-green-500" />
            </span>
          </div>
          <hr />
          <div className="flex items-center h-16 justify-between w-11/12 mx-auto  my-2">
            <div className="flex items-center gap-4">
              <img
                src={Yogurt}
                alt=""
                className="w-16 h-16 border rounded-lg"
              />
              <div>
                <h2>ماست سون</h2>
                <p>12 عدد</p>
              </div>
            </div>
            <span>
              <RxCheck className="text-green-500" />
              
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Page2;
