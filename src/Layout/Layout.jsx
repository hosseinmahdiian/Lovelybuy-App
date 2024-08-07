import React from "react";
import Header from "./Header";
import Conter from "./Conter";

const Layout = ({ children }) => {
  return (
    <div className="w-[400px] mx-auto   relative">
      <Header />
      <div className="w-[400px] ">{children}</div>
      {/* <Conter /> */}
    </div>
  );
};

export default Layout;
