import React, { useEffect, useState } from "react";
import { fetchCharts } from "../apis/coingecko";

import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface Props {
  coinId: string;
  percentage_change: number;
}

const LineChart = ({ coinId, percentage_change }: Props) => {
  const [chart, setChart] = useState<any>({});

  const getMarketCharts = async () => {
    setChart(await fetchCharts(coinId));
  };

  const data = {
    labels: chart?.labels,
    datasets: [
      {
        pointRadius: 0,
        label: `24h: ${percentage_change}%`,
        data: chart?.prices,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "end",
        labels: {
          boxWidth: 0,
          color: "#3e4247",
        },
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
          <Line data={data} options={options} width={0.3} height={0.3} />
        </div>
      ) : (
        <div>spinner</div>
      )}
    </div>
  );
};

export default LineChart;
