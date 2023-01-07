import axios from "axios";
import { useEffect, useState } from "react";
import { ping, fetchCoinData } from "../apis/coingecko";
import Layout from "./components/Layout";

//const API_URL = "https://coingecko.p.rapidapi.com/coins/markets";

const Home = () => {
  // const [coins, setCoins] = useState(null);
  //const options = {
  // method: "GET",
  // url: "https://coingecko.p.rapidapi.com/coins/markets",
  // params: {
  //   vs_currency: "usd",

  //   page: "1",
  //   per_page: "10",
  //   order: "market_cap_desc",
  // },
  // headers: {
  //   "X-RapidAPI-Key": "259c2ddf38msh4eda0a2aa6a1af2p12efd6jsn8ce5c2362177",
  //   "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  // },
  //};
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //     setCoins(response.data);
  //   }
  //   fetchData();
  // }, []);

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
