import React from "react";
import { RiChromeLine } from "react-icons/ri";
import Counter from "../../Components/Counter";
import { MdArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AddProdoct = () => {
  return (
    <>
      <div className="h-screen relative">
        <div className="   h-[calc(100vh+80px)]   w-full re child:mb-4 mt-8 ">
          <div className="relative mx-2  ">
            <input
              className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="name"
            />
            <label
              htmlFor="name"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              نام محصول
            </label>
          </div>
          <div className="relative mx-2  ">
            <input
              className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="code"
            />
            <label
              htmlFor="code"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              بارکد محصول
            </label>
          </div>
          <div className="relative mx-2  ">
            <input
              className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="pay"
            />
            <label
              htmlFor="pay"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              قیمت خرید
            </label>
          </div>
          <div className="relative mx-2  ">
            <input
              className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="pay-offer"
            />
            <label
              htmlFor="pay-offer"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              قیمت خط خورده
            </label>
          </div>
          <div className="relative mx-2  ">
            <input
              className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="sell"
            />
            <label
              htmlFor="sell"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              قیمت فروش
            </label>
          </div>
          <div className="relative mx-2  ">
            <input
              className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="count"
            />
            <label
              htmlFor="count"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              تعداد
            </label>
          </div>
          <div className="relative mx-2  ">
            <input
              className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="exp"
            />
            <label
              htmlFor="exp"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              تاریخ انقضا
            </label>
          </div>
          <div className="relative mx-2 flex justify-between  gap-4 items-center child:cursor-pointer">
            <input
              className="peer hidden  border-2 rounded-lg outline-gray-300 h-16 w-full "
              placeholder=" "
              id="main-image"
              type="file"
            />
            <label
              htmlFor="main-image"
              className="   border rounded-2xl w-10/12 h-16  bg-white py-4 px-2"
            >
              تصویر اصلی
            </label>
            <label
              htmlFor="images"
              className=" inline-block start-1 h-16 w-16 rounded-2xl IrHomama  border  bg-white px-2"
            >
              <RiChromeLine className=" text-3xl  mt-4 text-center mr-2 " />
            </label>
          </div>
          <div className="relative mx-2 flex justify-between  gap-4 items-center child:cursor-pointer">
            <input
              className={`peer hidden py-4 font-IrSans   border-2 rounded-2xl outline-gray-300 h-16 w-full `}
              placeholder=" "
              id="images"
              type="file"
              onChange={(e) => {
                console.log("file", e.target.files);
              }}
            />
            <label
              htmlFor="main-image"
              className="   border rounded-2xl w-10/12 h-16  bg-white py-4 px-2"
            >
              تصویر دیگر محصول
            </label>
            <label
              htmlFor="images"
              className=" inline-block start-1 h-16 w-16 rounded-2xl IrHomama  border  bg-white px-2"
            >
              <RiChromeLine className=" text-3xl  mt-4 text-center mr-2 " />
            </label>
          </div>

          <div className="mx-2">
            <NavLink className="flex  justify-between items-center w-full  border rounded-2xl  h-16  bg-white  py-4 px-3">
              <label htmlFor="main-image" className="   ">
                تصویر اصلی
              </label>
              <div>
                <MdArrowBackIos />
              </div>
            </NavLink>
          </div>
          <div className="mx-2">
            <select
              name=""
              id=""
              className="w-full  border rounded-2xl  h-16  bg-white  py-4 px-3"
            >
              <option value="">-------</option>
            </select>
          </div>

          <button className="w-full  h-16 bg-blue-500 block  mt-5 rounded-2xl text-white ">
            ذخیره اطلاعات
          </button>
        </div>
        <div className=" ">
          <Counter />
        </div>
      </div>
    </>
  );
};

export default AddProdoct;
