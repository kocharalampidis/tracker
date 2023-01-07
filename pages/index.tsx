import axios from "axios";
import { useEffect, useState } from "react";
import { ping, fetchCoinData } from "../apis/coingecko";
import Layout from "../components/Layout";

//const API_URL = "https://coingecko.p.rapidapi.com/coins/markets";

const Home = () => {
  return (
    <>
      <Layout />{" "}
      <div>
        Ping the APIs <button onClick={() => ping()}> ping !</button>
      </div>
      <div>
        Get the coins ! <button onClick={() => fetchCoinData()}> Get </button>
      </div>
    </>
  );
};

export default Home;
