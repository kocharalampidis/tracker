import axios from "axios";
import { useEffect, useState } from "react";
import { pingCoingecko, fetchCoinData } from "../apis/coingecko";
import AvailableCryptos from "../components/AvailableCryptos";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

//const API_URL = "https://coingecko.p.rapidapi.com/coins/markets";

const Home = () => {
  useEffect(() => {
    // pingCoingecko();
    // fetchCoinData()
  }, []);

  return (
    <>
      <Layout />{" "}
      <div>
        <AvailableCryptos />
      </div>
      <Footer />
    </>
  );
};

export default Home;
