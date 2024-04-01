import { useEffect, useState } from "react";
import CryptoWatchList from "../components/CryptoWatchList";
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
        <CryptoWatchList />
      </div>
      <div className="mt-16">
        aaaaaa
        <Footer />
      </div>
    </div>
  );
};

export default Home;
