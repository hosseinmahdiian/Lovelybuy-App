import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { NavLink } from "react-router-dom";
import Counter from "../../Components/Counter";
import { FiMaximize } from "react-icons/fi";
import { CategoryData, itemsData, slideDadta } from "../../Constant/DataSets";
import Slide from "./slide";
import Item from "./Item";
import Category from "./Category";
import Product from "./product";

import Yogurt from "../../assets/images/yogurt.png";
const Charge = () => {
  const [slid, setSlid] = useState(slideDadta);
  const [selectSlide, setSelectSlide] = useState(slid[0]);
  const [item, setItem] = useState(itemsData);
  const [selectItem, setSelectItem] = useState(item[0]);

  const [category, setData] = useState(CategoryData);
  const [selectCategory, setSelectCategory] = useState(category[0]);

  const clickCtegoryhandler = (e) => {
    category.map((item) => {
      if (item.name == e.target.id) {
        setSelectCategory(() => item);
        // console.log(item.name,select.name);
      }
    });
  };
  const clickItemhandler = (e) => {
    item.map((item) => {
      if (item.name == e.target.id) {
        setSelectItem(() => item);
      }
    });
  };

  const clickSlidehandler = (e) => {
    slid.map((item) => {
      if (item.name == e.target.id) {
        setSelectSlide(item);
      }
    });
  };
  return (
    <div className="relative h-screen ">
      <div className="h-[calc(100vh-100px)] overflow-y-auto ">
        <div className="flex items-center mt-3   mx-2 gap-2">
          <div className="relative   w-11/12  ">
            <input
              className="peer border border-black border-opacity-5 rounded-2xl outline-gray-300 h-16 w-full "
              placeholder=" "
              id="search"
            />
            <label
              htmlFor="search"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              جستجو با نام یا بارکد
            </label>
          </div>
          <NavLink className="border border-black border-opacity-5 rounded-2xl bg-white h-16 w-2/12 text-center pt-2.5 text-2xl font-bold ">
            <FiMaximize className="inline" />
          </NavLink>
        </div>
        {/* slider baner*/}
        <div className="flex mx-3 py-3 gap-3 overflow-x-scroll items-center">
          {slid.map(
            (item) =>
              !!item.name && (
                <span
                  key={item.name}
                  name={item.name}
                  onClick={clickSlidehandler}
                >
                  <Slide item={item} select={selectSlide} />
                </span>
              )
          )}
        </div>
        {/* slider for category */}

        <div className="flex mx-3 py-3 gap-3  items-center ">
          {category.map((item, index) => (
            <span key={index} onClick={clickCtegoryhandler}>
              <Category item={item} select={selectCategory} />
            </span>
          ))}
        </div>
        {/* slide for item */}
        <div className="flex mx-3 py-3 gap-3  items-center">
          {item.map((item, index) => (
            <span onClick={clickItemhandler} key={index}>
              <Item item={item} select={selectItem} className=" mb-5" />
            </span>
          ))}
        </div>

        <div>
          <NavLink>
            <Product name="ماست" id={45821645} image={Yogurt} />
          </NavLink>

          <NavLink>
            <Product name="ماست" id={45821645} image={Yogurt} />
          </NavLink>
        </div>
      </div>
      <Counter />
    </div>
  );
};

export default Charge;
