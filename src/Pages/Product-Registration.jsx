import React, { useReducer } from "react";
import Layout from "../Layout/Layout";
import { VscChromeRestore } from "react-icons/vsc";
import { RiChromeLine } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ProductRegistration = () => {
  const init = {
    page1: true,
    page2: false,
    glacery: false,
    digital: false,
    selected: "",
  };

  const reducerHandler = (state, action) => {
    switch (action.type) {
      case "page1":
        return {
          ...state,
          page1: !state.page1,
        };
      case "page2":
        return {
          ...state,
          page2: !state.page2,
        };
      case "glacery":
        return {
          ...state,
          selected: "glacery",
        };
      case "digital":
        return {
          ...state,
          selected: "digital",
        };
      default:
        break;
    }
  };

  const [reducer, dispach] = useReducer(reducerHandler, init);
  console.log(reducer.selected);
  return (
    <Layout>
      <section className=" max-h-screen  w-full mb-96">
        <div
          className={`${
            reducer.page1 ? `block` : `hidden`
          } mt-[75px] child:mb-5 font-IrSans pt-2`}
        >
          <div className="relative mx-2  ">
            <input
              className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="name"
            />
            <label
              htmlFor="name"
              className="absolute start-1 IrHomama top-4 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
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
              className="absolute start-1 IrHomama top-4 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
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
              className="absolute start-1 IrHomama top-4 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
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
              className="absolute start-1 IrHomama top-4 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
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
              className="absolute start-1 IrHomama top-4 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
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
              className="absolute start-1 IrHomama top-4 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
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
              className="absolute start-1 IrHomama top-4 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
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
          <button className="w-full   h-16 bg-blue-500 block  mt-5 rounded-2xl text-white ">
            ذخیره اطلاعات
          </button>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <div
          className={`${
            reducer.page2 ? `block` : `hidden`
          }  mt-16 pt-5  w-11/12 mx-auto  font-IrSans  relative `}
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

          <div className="flex gap-2 child:p-2 child:border child:rounded-3xl mt-4 child:bg-white ">
            <h3
              className={`
                ${reducer?.selected == "glacery" ? `!bg-black !text-white` : ``}
              `}
              name="glacery"
              onClick={() => {
                dispach({ type: "glacery" });
              }}
            >
              سوپر مارکت
            </h3>
            <h3
              className={`${
                reducer?.selected == "digital" ? `!bg-black !text-white` : ``
              }`}
              name="digital"
              onClick={() => {
                dispach({ type: "digital" });
              }}
            >
              کالای دیجیتال
            </h3>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" name="" id="1" />
              <label htmlFor="1">سوپر مارکت</label>
            </div>
            <div className="mr-5">
              <div className="flex gap-3 items-center">
                <input type="checkbox" name="" id="2" />
                <label htmlFor="2">لبنیات</label>
              </div>

              <div className="flex gap-3 items-center">
                <input type="checkbox" name="" id="3" />
                <label htmlFor="3">نوشیدنی</label>
              </div>
              <div className="mr-5">
                <div className="flex gap-3 items-center">
                  <input type="checkbox" name="n" id="4" />
                  <label htmlFor="4">گرم</label>
                </div>
                <div className="flex gap-3 items-center">
                  <input type="checkbox" name="n" id="5" />
                  <label htmlFor="5">سرد</label>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full  h-16 bg-blue-500 block  mt-5 rounded-2xl text-white ">
            ذخیره اطلاعات
          </button>
        </div>
      </section>
      {/* ---------------------------------------------------------------------------------------------------------------------- */}
      <div className="h-20 bg-white  bottom-0 w-[400px] fixed">
        <div className="flex justify-between    mx-5 items-center h-20   ">
          <span
            className={`${reducer.page2 && `opacity-20`}`}
            onClick={() => {
              if (!reducer.page2) {
                dispach({ type: "page1" });
                dispach({ type: "page2" });
              }
            }}
          >
            <MdKeyboardArrowRight />
          </span>
          <span
            className={`${!reducer.page2 && `hidden`}`}
            onClick={() => {
              dispach({ type: "page1" });
              dispach({ type: "page2" });
            }}
          >
            <MdKeyboardArrowLeft />
          </span>
          <NavLink to={-1} className={`${reducer.page2 && `hidden`}`}>
              <MdKeyboardArrowLeft />
            
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default ProductRegistration;
