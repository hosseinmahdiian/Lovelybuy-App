import React, { useContext } from "react";
import Acconut from "./Account";
import MainPage from "./MainPage";
import Layout from "../Layout/Layout";
import { reducerContext } from "../Context/Context";

const Home = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    
      <Layout>
        <MainPage />
      </Layout>
    
  );
};

export default Home;
