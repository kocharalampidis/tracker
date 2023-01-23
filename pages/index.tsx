import { useEffect, useState } from "react";
import AvailableCryptos from "../components/AvailableCryptos";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

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
      <Footer />
    </div>
  );
};

export default Home;
