import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Tesla Model S",
        data: [40, 60, 80, 100, 110, 120, 130, 140, 150, 180, 200, 220],
        borderColor: "#51CACF",
        backgroundColor: "#51CACF",
        pointRadius: 7,
      },
      {
        label: "BMW 5 Series",
        data: [60, 80, 100, 120, 140, 160, 170, 175, 180, 200, 220, 240],
        borderColor: "#FCCB67",
        backgroundColor: "#FCCB67",
        pointRadius: 7,
      },
    ],
  };
  return (
    <div className="h-[30vh] w-[100%] canvas-control">
      <Line options={options} data={data} width={"100%"} height={"30vh"} />
    </div>
  );
};

export default LineChart;
