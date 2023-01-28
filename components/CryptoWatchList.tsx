import { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchCoinData } from "../apis/coingecko";
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

  const getCoins = async () => {
    const response = await fetchCoinData();
    setCoins(response);
  };

  useEffect(() => {
    // setInterval(() => {
    getCoins();
    // }, 20000);
  }, []);

  return (
    <div className="m-8">
      {coins ? (
        <div className="grid grid-cols-3 gap-2">
          {coins.map((coin: CoinData) => (
            <div className="mb-4" key={coin.id}>
              <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
                <figure>
                  <img src={coin.image} alt="logo" className={"w-7 h-7"} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{coin.name}</h2>

                  <div>
                    <LineChart
                      coinId={coin.id}
                      percentage_change={coin.price_change_percentage_24h}
                    />
                    <div className="text-right">
                      <span className="badge badge-secondary badge-outline">
                        ${coin.current_price.toFixed(4)}
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
  );
};

export default CryptoWatchList;
