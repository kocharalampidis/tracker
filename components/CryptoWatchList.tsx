import { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchCoinData } from "../apis/coingecko";
import Filter from "./FIlter";
import LineChart from "./LineChart";

type CoinData = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

const CryptoWatchList: NextPage = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [options, setOptions] = useState<string>("1");
  const [percentage_change_days, setPercentage_change_days] = useState([
    "1h",
    "24h",
    "7d",
    "14d",
    "30d",
  ]);

  const getCoins = async () => {
    const response = await fetchCoinData();
    setCoins(response);
  };

  const percentage_change = (e: any) => {
    // Used to remove the hour/days indicator
    const substring: string = e.target.text.slice(0, -2);
    setOptions(substring);

    return substring;
  };

  useEffect(() => {
    // setInterval(() => {
    getCoins();
    // }, 20000);
  }, [percentage_change_days]);

  return (
    <>
      <div className="m-8">
        <div>
          {/* <Filter /> */}
          <div className="flex mb-2">
            <ul className="menu menu-vertical sm:menu-horizontal md:menu-horizontal lg:menu-horizontal w-56 bg-gray-800 text-primary-content p-1 cursor-pointer rounded-box">
              {percentage_change_days.map((item: string, index: number) => (
                <li key={index}>
                  <a
                    className="hover:bg-gray-700 active:bg-red-700"
                    onClick={percentage_change}
                  >
                    {item}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {coins ? (
          <div className="grid grid-cols-3 gap-2">
            {coins.map((coin: CoinData) => (
              <div className="mb-4" key={coin.id}>
                <div className="card card-compact bg-base-100 shadow-xl m-2">
                  <figure>
                    <img src={coin.image} alt="logo" className={"w-7 h-7"} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{coin.name}</h2>

                    <div>
                      <LineChart
                        coinId={coin.id}
                        percentage_change={coin.price_change_percentage_24h}
                        days={options}
                      />
                      <div className="text-right">
                        <span className="badge badge-secondary badge-outline">
                          ${coin.current_price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <progress className="progress w-56"> Loading...</progress>
          </div>
        )}
      </div>
    </>
  );
};

export default CryptoWatchList;
