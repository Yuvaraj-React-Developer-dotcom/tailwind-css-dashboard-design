import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
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
  const data = {
    labels: ["Opened", "Read", "Deleted", "Unopened"],
    datasets: [
      {
        data: [4, 8, 12, 16],
        backgroundColor: ["#FFB742", "#FF6529", "#CCCCCC", "#12EDED"],

        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="h-[30vh] flex justify-center">
      <Pie options={options} data={data} width={"30vw"} height={"30vh"} />
    </div>
  );
};

export default PieChart;
