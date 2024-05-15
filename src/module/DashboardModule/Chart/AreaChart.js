import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  scales,
  elements,
} from "chart.js";
import { Line } from "react-chartjs-2";

const AreaChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: false,
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
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 1",
        data: [100, 125, 150, 180, 175, 200, 225, 250, 275, 300],
        backgroundColor: "#6BD098",
        borderWidth: 0,
        pointRadius: 0,
      },
      {
        fill: true,
        label: "Dataset 2",
        data: [200, 225, 250, 280, 275, 300, 325, 350, 375, 400],
        backgroundColor: "#F17E5D",
        borderWidth: 0,
        pointRadius: 0,
      },
      {
        fill: true,
        label: "Dataset 3",
        data: [300, 325, 350, 380, 375, 400, 425, 450, 475, 500],
        backgroundColor: "#FCC468",
        borderWidth: 0,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="h-[40vh] w-[100%] canvas-control">
      <Line options={options} data={data} width={"100%"} height={"40vh"} />
    </div>
  );
};

export default AreaChart;
