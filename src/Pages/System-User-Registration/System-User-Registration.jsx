import React, { useReducer } from "react";
import Layout from "../../Layout/Layout";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

const SystemUserRegistration = () => {
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
    <Layout>
      <div className={`${reducer.page1 ? `bolck` : `hidden`}`}>
        <Page1 />
      </div>
      <div className={`${reducer.page2 ? `bolck` : `hidden`}`}>
        <Page2 />
      </div>
      {/* ============================================================================== */}
      <div className="h-20 bg-white  bottom-0 w-[400px] fixed border-t">
        <div className="flex justify-between    mx-5 items-center h-20   ">
          <span
            className={`${reducer.page2 && `opacity-20`}`}
            onClick={() => {
              if (reducer.page1) {
                dispach({ type: "page1" });
                dispach({ type: "page2" });
              }
            }}
          >
            <MdKeyboardArrowRight />
          </span>
          <span
            className={`${reducer.page1 && `hidden`}`}
            onClick={() => {
              if (reducer.page2) {
                dispach({ type: "page1" });
                dispach({ type: "page2" });
              }
            }}
          >
            <MdKeyboardArrowLeft />
          </span>
          <NavLink to={-1} className={`${!reducer.page1 && `hidden`}`}>
            <MdKeyboardArrowLeft />
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default SystemUserRegistration;
