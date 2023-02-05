export const percentage_change_days: string[] = ["1d", "7d", "14d", "30d"];

// Cryptocurrency portfolio
export const crypto_watchlist = {
  avax: "avalanche-2",
  // btc: "bitcoin",
  // dmtr: "dimitra",
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

// Endpoints
export const endpoints = {
  ping: "/ping",
  coins: {
    id: "/coins/{id}", // get current data for a coin.
    id_list: "/coins/list", // list all supported coins id
    market: "/coins/markets", // obtain all the coins market data (price, market cap, volume)
    market_chart: "/coins/{id}/market_chart", // get historical market data include price, market cap, and 24h volume
  },
};

// Fiat currencies
export const currencies = { usd: "usd", euro: "eur" };
