import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const LineChart = () => {
  const data = {
    labels: ["Go", "Python", "Kotlin", "JavaScript", "R", "Swift"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22, 20, 18, 18],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  //width={400} height={400}
  return (
    <div style={{ textAlign: "center" }}>
      <Line data={data} width={8} height={0.1} />
    </div>
  );
};

export default LineChart;
