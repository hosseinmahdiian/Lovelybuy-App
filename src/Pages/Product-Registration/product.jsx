import React from "react";
import { RxCheck } from "react-icons/rx";

const Product = ({ name, image, id }) => {
  return (
    <div className="bg-white p-2 rounded-lg mt-3 border-b">
      <div className="flex items-center h-16 justify-between w-11/12 mx-auto   my-2 ">
        <div className="flex items-center gap-4">
          <img src={image} alt="" className="w-16 h-16 border rounded-lg" />
          <div>
            <h2> {name}</h2>
            <p>{id}</p>
          </div>
        </div>
        <span className="text-red-500 text-center font-bold">شارژ</span>
      </div>
    </div>
  );
};

export default Product;
