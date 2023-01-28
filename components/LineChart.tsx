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

  const data: any = {
    labels: chart?.labels,
    datasets: [
      {
        pointRadius: 0,
        label: `24h: ${percentage_change.toFixed(4)}%`,
        data: chart?.prices,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "end",
        labels: {
          boxWidth: 0,
          color: `${percentage_change > 0 ? "#02cc49" : "#a10000"}`,
          font: {
            size: 14,
          },
        },
      },
    },

    // Modify the axis by adding scales
    scales: {
      x: {
        ticks: {
          display: false,
        },

        grid: {
          display: false,
        },
      },

      y: {
        ticks: {
          display: true,
        },

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
          <Line data={data} options={options} width={"3px"} height={"1.5px"} />
        </div>
      ) : (
        <div>
          <progress className="progress w-56"> Loading...</progress>
        </div>
      )}
    </div>
  );
};

export default LineChart;
