import { useEffect, useState } from "react";
import AvailableCryptos from "../components/AvailableCryptos";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import LineChart from "../components/LineChart";
import Chart from "chart.js/auto";

const Home = () => {
  useEffect(() => {
    // pingCoingecko();
    // fetchCoinData()
  }, []);

  return (
    <div className="">
      <Layout />{" "}
      <div>
        <AvailableCryptos />
      </div>
      <div>{/* <LineChart /> */}</div>
      <Footer />
    </div>
  );
};

export default Home;
