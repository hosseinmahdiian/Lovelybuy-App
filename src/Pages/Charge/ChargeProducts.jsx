import React from "react";
import Counter from "../../Components/Counter";

const ChargeProducts = () => {
  return (
    <div className="child:child:mb-5 mt-5 relative h-screen ">
      <div className="h-[calc(100vh+80px)]">
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
            قیمت خرید
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
            قیمت خط خورده
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
            قیمت فروش
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
            تعداد
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
            تاریخ انقضا
          </label>
        </div>
        <button className="w-full !mb-[1000000000000000000000px] h-16 bg-blue-500 block  mt-5 rounded-2xl text-white ">
          ذخیره اطلاعات
        </button>
      </div>

      <Counter />
    </div>
  );
};

export default ChargeProducts;
