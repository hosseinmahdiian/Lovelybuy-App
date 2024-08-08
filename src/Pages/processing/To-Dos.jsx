import React from "react";
import Yogurt from "../../assets/images/yogurt.png";
import { PiShieldCheck } from "react-icons/pi";
import { RxCheck } from "react-icons/rx";
import ToDo from "./To-Do";
import Counter from "../../Components/Counter";

const ToDos = () => {
  return (
    <>
      {/* <div className="gap-4  mb-4"> */}
      <div className="mx-2 relative mt-5 ">
        <h2 className="my-5">نیاز به اقدام</h2>
        <div className="bg-white p-2 rounded-lg mt-3">
          <ToDo check={false} />
          <ToDo check={false} />
          <h2 className="my-5">انجام شده</h2>
          <ToDo check={true} />
          <ToDo check={true} />
        </div>
        <Counter />
      </div>
    </>
  );
};

export default ToDos;
