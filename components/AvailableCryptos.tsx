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

const AvailableCryptos = () => {
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
    <div>
      {coins ? (
        <div className="grid grid-cols-3 gap-2">
          {coins.map((coin: CoinData) => (
            <div className="" key={coin.id}>
              <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
                <figure>
                  <img src={coin.image} alt="logo" className={"w-7 h-7"} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{coin.name}</h2>

                  <div className="text-right">
                    <span className="badge badge-secondary badge-outline">
                      ${coin.current_price}
                    </span>
                  </div>
                  <div>
                    <LineChart
                      coinId={coin.id}
                      percentage_change={coin.price_change_percentage_24h}
                    />
                    {/* <p className="text-right">
                      24h: {coin.price_change_percentage_24h}%
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>not loaded</div>
      )}
    </div>
  );
};

export default AvailableCryptos;
