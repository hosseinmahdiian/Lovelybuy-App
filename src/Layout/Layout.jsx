import React from "react";
import Header from "./Header";
import Conter from "./Conter";

const Layout = ({ children }) => {
  return (
    <div className="w-[400px]">
      <Header />
      <div className=" mt-20">{children}</div>
       <Conter />
    </div>
  );
};

export default Layout;
