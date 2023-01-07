import { NextPage } from "next";
import AvailableCryptos from "../components/AvailableCryptos";
import Layout from "../components/Layout";

const Cryptos: NextPage = () => {
  return (
    <>
      <Layout />
      <div>
        <AvailableCryptos />
      </div>
    </>
  );
};

export default Cryptos;
