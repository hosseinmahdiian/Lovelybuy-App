import React  from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const User = () => {
  return (
    <>
     
         
        <div className="flex justify-between border rounded-xl bg-white items-center px-3 h-40 w-11/12 mt-4 mx-auto">
          <div>
            <div className="flex  gap-4 justify-between mb-3">
              <h2>4060405531</h2>
              <h2>اشکان حسنوند</h2>
            </div>
            <div className="flex  gap-4 justify-between mb-3">
              <h2>5531</h2>
              <h2>09216919291</h2>
            </div>
            <div className="flex  gap-4 text-gray-400">
              <p>کاربر:</p>
              <p>خریدار</p>
            </div>
            <div className="  text-gray-400">
              <p>بیمارستان عشایر</p>
            </div>
          </div>
          <div>
            <MdKeyboardArrowLeft className="text-2xl" />
          </div>
        </div>
      
    </>
  );
};

export default User;
