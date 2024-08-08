import React, { useReducer } from "react";
import Location from "./Location";
import ToDos from "./To-Dos";
import Printer from "./BillPrinter";
import Layout from "../../Layout/Layout";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Counter from "../../Components/Counter";

const Processing = () => {
  return (
    <>
      <div className="relative mt-6">
        <Location />
        <Location />

        <Counter />
      </div>
    </>
  );
};

export default Processing;
