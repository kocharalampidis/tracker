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
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
