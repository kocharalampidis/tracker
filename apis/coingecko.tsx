// ...
import axios from "axios";
import { crypto_watchlist, endpoints, currencies } from "./constants";

const baseUrl = "https://api.coingecko.com/api/v3";

export const coingeckoApi = axios.create({
  baseURL: baseUrl,
});

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
      vs_currency: currencies.usd,
      ids: Object.values(crypto_watchlist).join(","),
      page: "1",
      per_page: "20",
      order: "market_cap_desc",
    };

    const response = await axios.get(
      `${urlBuilder(endpoints.coins.market, filter)}`
    );

    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

export const fetchCharts = async (coinId: string, days: string) => {
  try {
    const filter = {
      id: coinId,
      vs_currency: currencies.usd,
      days: days || "1",
      interval: "",
    };

    const response = await axios.get(
      // `${urlBuilder(endpoints.coins.market_chart, filter)}`
      `https://api.coingecko.com/api/v3/coins/${filter.id}/market_chart?vs_currency=${filter.vs_currency}&days=${filter.days}`
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
