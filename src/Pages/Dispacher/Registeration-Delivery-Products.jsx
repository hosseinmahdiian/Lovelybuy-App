import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Counter from "../../Components/Counter";

const RegisterationDeliveryProducts = () => {
  return (
    <div className="mt-5 w-11/12 h-3/4 rounded-lg bg-white mx-auto">
      <ReactSketchCanvas
        width="100%"
        height="100%"
        canvasColor="transparent"
        strokeColor="#000"
        strokeWidth="4px"
      />

      <Counter />
    </div>
  );
};

export default RegisterationDeliveryProducts;
