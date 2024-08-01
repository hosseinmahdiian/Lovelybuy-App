import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import logo from "../assets/images/logo.png";
import { reducerContext } from "../Context/Context";

const Acconut = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div className="  h-full bg-white border mx-auto relative ont-IrSans ">
      <div className={`${reduce.acconut ? `hidden` : `block`}`}>
        <h1 className="font-IrSana text-red-600 text-center py-4 border-b">
          ورود به فروشگاه
        </h1>

        <img src={logo} alt="" className="mx-auto mb-20 mt-10 " />

        <div className=" ">
          <div className="relative  w-3/4 mx-auto ">
            <input
              className="peer border-2 rounded-lg outline-gray-300 h-10 w-full "
              placeholder=" "
              id="user"
            />
            <label
              htmlFor="user"
              className="absolute start-1 IrHomama top-1.5 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
            >
              نام کابری
            </label>
          </div>

          <div className="relative w-3/4 mx-auto h-10 mt-5">
            <input
              className="peer border-2 rounded-lg outline-gray-300 h-10 w-full"
              placeholder=" "
              id="pass"
            />
            <label
              htmlFor="pass"
              className="absolute font-IrHomama start-1 top-1.5 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
            >
              رمز عبور
            </label>
          </div>

          <button
            // onClick={() => {
            //   dispach({ type: "acconut" });
            // }}
            className="w-3/4 h-10 bg-blue-500 block mx-auto mt-5 rounded-lg text-white "
          >
            ورود به فروشگاه
          </button>
          <a
            href=""
            className="font-IrSans py-3 mx-auto text-blue-500 block w-fit "
          >
            نیاز به کمک دارم
          </a>
        </div>

        <div className="flex gap-1 items-center absolute bottom-3 right-3 whitespace-nowrap justify-center">
          <span>
            <IoInformationCircleOutline />
          </span>
          <p className=" mx-auto">
            باورد به فذوشگاه
            <a href="" className="text-blue-500 inline-block mx-2">
              قوانین و مقررات
            </a>
            آن را می پذیرم
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acconut;
