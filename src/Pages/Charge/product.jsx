import React from "react";
import { RxCheck } from "react-icons/rx";
import Yogurt from "../../assets/images/yogurt.png";

const Product = ({ name, image, id }) => {
  return (
    <div className="bg-white p-2 rounded-lg mt-3 border-b">
      <div className="flex items-center h-28 justify-between w-11/12 mx-auto   my-2 ">
        <div>
          <div className="flex items-center gap-4">
            <img src={image} alt="" className="w-16 h-16 border rounded-lg" />
            <div>
              <h2> {name}</h2>
              <div className="flex w-full  justify-between ">
                <p>عدد</p>
                <p>انقضا</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  justify-between ">
              <p>خرید</p>
              <p>روی جلد</p>
            </div>
            <div className="flex  justify-between ">
              <p>فروش</p>
              <p>انبار</p>
            </div>
          </div>
        </div>
        <span className="text-center ">{id}</span>
      </div>
    </div>
  );
};

export default Product;
