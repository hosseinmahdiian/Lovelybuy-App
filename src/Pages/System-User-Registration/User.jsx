import React from "react";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const User = () => {
  return (
    <div className="my-5">
      <div className="flex gap-3 items-center  border-b  ">
        <div className=" bg-white -0 h-16 rounded-xl w-11/12 ">
          <div className=" w-8/12 mx-2">
            <div className="flex  gap-4 justify-between ">
              <h2>اشکان حسنوند</h2>
              <h2>09216919291</h2>
            </div>
            <div className="flex  gap-4 justify-between ">
              <h2>4060405531</h2>
              <h2>5531</h2>
            </div>
          </div>
        </div>
          <NavLink
            className="w-16 h-16 bg-white   p-5"
            to="/System-User-Registration/Setting-User/1"
          >
            <CiSettings className="text-xl" />
          </NavLink>{" "}
      </div>
    </div>
  );
};

export default User;
