import { useEffect, useState } from "react";
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
        <div>
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
        </div>
      ) : (
        <div>not loaded</div>
      )}
    </div>
  );
};

export default AvailableCryptos;
