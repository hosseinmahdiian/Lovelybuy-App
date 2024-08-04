import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";

const DeliveryData = [
  { day: "satueday", title: "شنبه", date: "7مرداد", id: 1, select: false },
  {
    day: "sunday",
    title: "یکشنیه",
    date: "8مرداد",
    id: 2,
    select: true,
  },
  {
    day: "monday",
    title: "دوشنبه",
    date: "9مرداد",
    id: 3,
    select: false,
  },
  { day: "tuesday", title: "سه شنبه", date: "10مرداد", id: 4, select: false },
  {
    day: "wendesday",
    title: "چهار شنبه",
    date: "11مرداد",
    id: 5,
    select: false,
  },
  {
    day: "thursday",
    title: "پنجشنبه",
    date: "12مرداد",
    id: 6,
    select: false,
  },
  {
    day: "friday",
    title: "جمعه",
    date: "13مزداد",
    id: 7,
    select: false,
  },
];
const Page2 = () => {
  return (
    <>
      <div className="flex gap-4 overflow-x-scroll delivery mb-4">
        {DeliveryData.map((item) => (
          <div
            key={item.id}
            className="child:bg-white child:text-gray-300 child:rounded-xl "
          >
            <div
              className={` text-center w-20 h-20  pt-4 ${
                item.select == true
                  ? `border-red-600 border-2   !text-black`
                  : ``
              }`}
            >
              <div>{item.title}</div>
              <span className="block">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
        <div className="child:flex child:gap-4  py-3">
          <div>
            <LuCheckCircle />
            <label htmlFor="first-time">ساعت 7 تا 8</label>
          </div>

          <div>
            <FaRegCircle />
            <label htmlFor="scende-time">ساعت 13 تا 14</label>
          </div>

          <div>
            <FaRegCircle />
            <label htmlFor="laste-time">ساعت 19 تا 20</label>
          </div>
        </div>
    </>
  );
};

export default Page2;
