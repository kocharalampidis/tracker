import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchCoinData } from "../apis/coingecko";

const AvailableCryptos = () => {
  const [data, setData] = useState();

  const getCoins = async () => {
    const response = await fetchCoinData();
    setData(response);
    return response;
  };

  useEffect(() => {
    // setInterval(() => {
    getCoins();
    // }, 20000);
  }, []);

  return (
    <div>
      {data ? (
        <div className="grid grid-cols-3 gap-2">
          {data.map((item: any) => (
            <div className="" key={item.id}>
              <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
                <figure>
                  <Image src={item.image} alt="logo" width={30} height={25} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>24h: {item.price_change_percentage_24h}%</p>
                  <div className="text-right">
                    <span className="badge badge-secondary badge-outline">
                      ${item.current_price}
                    </span>
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
{
  /* <div>
          <div className="row">
            {data.map((item, index) => (
              <div className="col-3" key={index}>
                <div className="card">
                  <img src={item.image} alt="logo" width="25px" height="25px" />
                  <div className="card-body bg-light">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.symbol}</p>
                    <p className="card-text">${item.current_price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */
}
