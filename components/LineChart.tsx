import React, { useEffect, useState } from "react";
import { fetchCharts } from "../apis/coingecko";

import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface Props {
  coinId: string;
}

const LineChart = ({ coinId }: Props) => {
  const [chart, setChart] = useState<any>({});

  const getMarketCharts = async () => {
    setChart(await fetchCharts(coinId));
  };

  const data = {
    labels: chart?.labels,
    datasets: [
      {
        pointRadius: 0,
        // label: "# of Votes",
        data: chart?.prices,
        // backgroundColor: [
        //   "#007D9C",
        //   "#244D70",
        //   "#D123B3",
        //   "#F7E018",
        //   "#fff",
        //   "#FE452A",
        // ],
        // borderColor: [
        //   "rgba(255,99,132,1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        // borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },

    // Modify the axis by adding scales
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: false,
        },

        // to remove the x-axis grid
        grid: {
          display: false,
        },
      },

      // to remove the y-axis labels
      y: {
        ticks: {
          display: true,
        },

        // to remove the y-axis grid
        grid: {
          display: false,
        },
      },
    },
  };

  useEffect(() => {
    getMarketCharts();
  }, []);

  return (
    <div>
      {chart ? (
        <div style={{ textAlign: "center" }}>
          <Line data={data} options={options} />
        </div>
      ) : (
        <div>spinner</div>
      )}
    </div>
  );
};

export default LineChart;
