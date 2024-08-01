import React, { useContext } from "react";
import Acconut from "./Account";
import MainPage from "./MainPage";
import Layout from "./Layout/Layout";
import { reducerContext } from "../Context/Context";

const Home = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div className="w-[400px] max-h-[1000px] min-h-[600px] h-[900px] mx-auto">
      <div className={`${!reduce.acconut ?`block`:`hidden`} h-full`}>
        <Acconut />
      </div>
      <div className={`${reduce.acconut ?`block`:`hidden`} h-full`}>
        <Layout>
          <MainPage />
        </Layout>
      </div>
    </div>
  );
};

export default Home;
