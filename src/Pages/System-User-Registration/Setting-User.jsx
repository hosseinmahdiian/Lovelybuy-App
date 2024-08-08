import React from "react";
import Counter from "../../Components/Counter";
import ItemSettingUser from "./Item-Setting-User";

const SettingUser = () => {
  return (
    <div className="mt-6">
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      
      <button className="w-full  h-16 bg-blue-500 block  mt-5 rounded-2xl text-white ">
        ذخیره اطلاعات
      </button>

      <Counter />
    </div>
  );
};

export default SettingUser;
