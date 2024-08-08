import React, { useReducer } from "react";
import Layout from "../../Layout/Layout";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import User from "./User";
import EditUser from "./Edit-User";
import { FiPlus } from "react-icons/fi";
import Counter from "../../Components/Counter";

const BuyerUserRegistration = () => {
  const init = {
    page1: true,
    page2: false,
    page3: false,
    page4: false,
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
      case "page3":
        return {
          ...state,
          page3: !state.page3,
        };
      case "page4":
        return {
          ...state,
          page4: !state.page4,
        };

      default:
        break;
    }
  };

  const [reducer, dispach] = useReducer(reducerHandler, init);
  return (
    <>
      <div className="flex items-center  mx-3 mt-5">
        <div className="relative mx-2  w-10/12  ">
          <input
            className="peer border-2 rounded-2xl outline-gray-300 h-16 w-full "
            placeholder=" "
            id="search"
          />
          <label
            htmlFor="search"
            className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            جستجو با نام یا کد ملی{" "}
          </label>
        </div>
        <NavLink
          to="/Buyer-User-Registration/Edit-User/1"
          className="w-16 h-16 bg-white  border-2 rounded-2xl p-5"
        >
          <FiPlus className="text-xl" />
        </NavLink>
      </div>

      <div>
        <NavLink to="/Buyer-User-Registration/Edit-User/1">
          <User />
        </NavLink>
        <NavLink to="/Buyer-User-Registration/Edit-User/1">
          <User />
        </NavLink>
      </div>

      <Counter />
    </>
  );
};

export default BuyerUserRegistration;
