import React from "react";
import { FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Counter from "../../Components/Counter";
import User from "./User";

const Users = () => {
  return (
    <div className="mt-6">
      <div className="flex gap-3 items-center w-full mx-3">
        <div className="relative  !w-9/12 ">
          <input
            className="peer border-2 rounded-2xl outline-gray-300 h-16  !w-full"
            placeholder=" "
            id="name"
          />
          <label
            htmlFor="name"
            className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            جستجوی نام یا کدملی
          </label>
        </div>
        <NavLink
          className="w-16 h-16 bg-white  border-2 rounded-2xl p-5"
          to="/System-User-Registration/1"
        >
          <FiPlus className="text-xl" />
        </NavLink>
      </div>

      <div className="child:mb-5 ">
        <NavLink to="/System-User-Registration/1">
          <User />
        </NavLink>
        <NavLink to="/System-User-Registration/1">
          <User />
        </NavLink>
      </div>

      <Counter />
    </div>
  );
};

export default Users;
