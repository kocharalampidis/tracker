import { useEffect, useState } from "react";
import { IoLogoUsd } from "react-icons/io";
import { fetchCoinData } from "../apis/coingecko";

const AvailableCryptos = () => {
  const [data, setData] = useState();
  const [flag, setfFlag] = useState(false);

  const getCoins = async () => {
    const response = await fetchCoinData();
    setData(response);
    console.log(response);
    return response;
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div>
      {data ? (
        <div className="">
          {data.map((item: any) => (
            <div className="" key={item.id}>
              <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
                <figure>
                  <img src={item.image} alt="logo" width="36px" height="25px" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="text-right">
                    <span className="">${item.current_price}</span>
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
