// ...
import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";

// Endpoints
const endpoints = {
  ping: "/ping",
  coins: {
    id: "/coins/{id}", // get current data for a coin.
    id_list: "/coins/list", // list all supported coins id
    market: "/coins/markets", // obtain all the coins market data (price, market cap, volume)
    market_chart: "/coins/{id}/market_chart", // get historical market data include price, market cap, and 24h volume
  },
};

const structureUrl = (endpoint: string, params?: object): string => {
  let url = `${baseUrl}${endpoint}`;

  if (params) {
    const queryString = new URLSearchParams(params).toString();
    url += `?${queryString}`;
  }

  console.log(endpoint, params, url);
  return url;
};

// Check API status
export const ping = async () => {
  try {
    const response = await axios.get(`${structureUrl(endpoints.ping)}`);

    console.log(`CoinGecko APIs: `, response.data);

    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

export const fetchCoinData = async () => {
  try {
    const filter = {
      vs_currency: "usd",
      ids: "ripple, bitcoin",
      page: "1",
      per_page: "10",
      order: "market_cap_desc",
    };

    const response = await axios.get(
      `${structureUrl(endpoints.coins.market, filter)}`
    );

    console.log(`Coins: `, response.data);

    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};
