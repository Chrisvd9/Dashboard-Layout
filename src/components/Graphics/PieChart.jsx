import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, dataValues, backgroundColors, borderColors }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "%",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
