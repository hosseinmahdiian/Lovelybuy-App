import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

import Location from "./Location";
import Counter from "../../Components/Counter";

const Dispacher = () => {
 
  return (
    <>
      <div className=" mt-10">
        <NavLink to="/Dispacher/Loaction/1">
          <Location />
        </NavLink>
        <NavLink to="/Dispacher/Loaction/1">
          <Location />
        </NavLink>
      </div>

      <Counter />
    </>
  );
};

export default Dispacher;
