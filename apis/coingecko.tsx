// ...
import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";

export const coingeckoApi = axios.create({
  baseURL: baseUrl,
});

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

// Cryptocurrency portfolio
export const crypto_watchlist = {
  avax: "avalanche-2",
  // btc: "bitcoin",
  // dot: "polkadot",
  // eth: "ethereum",
  // flare: "flare-networks",
  // gala: "gala",
  // mana: "decentraland",
  // nexo: "nexo",
  // pyr: "vulcan-forged",
  // usdt: "tether",
  // xrp: "ripple",
  // sha: "safe-haven",
};

// Fiat currencies
export const currencies = { usd: "usd", euro: "eur" };

// Structures url by concat. based url, endpoints and params
const urlBuilder = (endpoint: string, params?: any): string => {
  let url = `${baseUrl}${endpoint}`;

  if (params) {
    const queryString = new URLSearchParams(params);
    url += `?${queryString}`;
  }

  console.log(endpoint, params, url);
  return url;
};

// Check API status
export const pingCoingecko = async () => {
  try {
    const response = await axios.get(`${urlBuilder(endpoints.ping)}`);

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
      ids: Object.values(crypto_watchlist).join(","),
      page: "1",
      per_page: "20",
      order: "market_cap_desc",
    };

    const response = await axios.get(
      `${urlBuilder(endpoints.coins.market, filter)}`
    );

    console.log(`Coins: `, response.data[0].current_price.toFixed(4));

    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

export const fetchCharts = async (coinId: string, days: string) => {
  try {
    const filter = {
      id: "ripple",
      vs_currency: "usd",
      days: "1",
      interval: "",
    };

    const response = await axios.get(
      // `${urlBuilder(endpoints.coins.market_chart, filter)}`
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${filter.vs_currency}&days=${filter.days}`
    );

    const chartData = {
      labels: response.data.market_caps.flatMap((num: any) => num[0]),
      prices: response.data.prices.flatMap((num: any) => num[1]),
    };

    return chartData;
  } catch (errors) {
    console.error(errors);
  }
};
