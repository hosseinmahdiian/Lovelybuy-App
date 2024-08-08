import React from "react";
import Counter from "../../Components/Counter";

const EditUser = () => {
  return (
    <div className="mt-6 child:mb-5">
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
          نام
        </label>
      </div>
      {/*  */}
      <div className="relative mx-2  ">
        <input
          className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
          placeholder=" "
          id="lastName"
        />
        <label
          htmlFor="lastName"
          className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          نام خانوادگی{" "}
        </label>
      </div>
      {/*  */}
      <div className="relative mx-2   ">
        <input
          className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
          placeholder=" "
          id="phone"
        />
        <label
          htmlFor="phone"
          className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          تلفن{" "}
        </label>
      </div>
      {/*  */}
      <div className="relative mx-2  ">
        <input
          className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
          placeholder=" "
          id="personId"
        />
        <label
          htmlFor="personId"
          className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          کدملی{" "}
        </label>
      </div>
      {/*  */}{" "}
      <div className="relative mx-2  !mb-0 ">
        <input
          className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
          placeholder=" "
          id="pass"
        />
        <label
          htmlFor="pass"
          className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          رمزعبور{" "}
        </label>
      </div>
      {/* =============================================================== */}
      <div
        className={`
            pt-5  w-11/12 mx-auto  font-IrSans  relative `}
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
      </div>
      {/* =============================================================== */}
      <button className="w-full  h-16 bg-blue-500 block  mt-5 rounded-2xl text-white ">
        ذخیره اطلاعات
      </button>
      <Counter />
    </div>
  );
};

export default EditUser;
