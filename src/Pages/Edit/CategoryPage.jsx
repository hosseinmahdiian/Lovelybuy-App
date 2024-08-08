import React, { useReducer } from "react";
import Counter from "../../Components/Counter";

const CategoryPage = () => {
  const init = {
    glacery: false,
    digital: false,
    selected: "",
  };

  const reducerHandler = (state, action) => {
    switch (action.type) {
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
  //   console.log(reducer.selected);
  return (
    <div className=" mt-6">
      <div className="flex gap-2 child:p-2 child:border child:rounded-3xl mt-4 child:bg-white ">
        <h3
          className={`
                ${reducer?.selected == "glacery" ? `!bg-black !text-white` : ``}
              `}
          name="glacery"
          onClick={() => {
            dispach({ type: "glacery" });
          }}
        >
          سوپر مارکت
        </h3>
        <h3
          className={`${
            reducer?.selected == "digital" ? `!bg-black !text-white` : ``
          }`}
          name="digital"
          onClick={() => {
            dispach({ type: "digital" });
          }}
        >
          کالای دیجیتال
        </h3>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="1" />
          <label htmlFor="1">سوپر مارکت</label>
        </div>
        <div className="mr-5">
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="" id="2" />
            <label htmlFor="2">لبنیات</label>
          </div>

          <div className="flex gap-3 items-center">
            <input type="checkbox" name="" id="3" />
            <label htmlFor="3">نوشیدنی</label>
          </div>
          <div className="mr-5">
            <div className="flex gap-3 items-center">
              <input type="checkbox" name="n" id="4" />
              <label htmlFor="4">گرم</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" name="n" id="5" />
              <label htmlFor="5">سرد</label>
            </div>
          </div>
        </div>
      </div>
      <button className="w-full  h-16 bg-blue-500 block  mt-5 rounded-2xl text-white ">
        ذخیره اطلاعات
      </button>

      <Counter />
    </div>
  );
};

export default CategoryPage;
