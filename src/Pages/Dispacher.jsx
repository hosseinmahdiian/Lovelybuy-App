import React, { useReducer } from "react";
import Layout from "../Layout/Layout";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Dispacher = () => {
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
      <section className=" max-h-screen  w-full mb-96"></section>
      {/* ---------------------------------------------------------------------------------------------------------------------- */}
      <div className="h-20 bg-white  -bottom-4 w-[400px] fixed border-t">
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

export default Dispacher;
