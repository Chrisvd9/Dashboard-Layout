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
} from "chart.js";
import { Line } from "react-chartjs-2";

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

const AreaChart = ({
  labels = defaultLabels,
  datasets = defaultData.datasets,
  options = defaultOptions,
}) => {
  const chartData = {
    labels,
    datasets,
  };
  return <Line options={options} data={chartData} />;
};

export default AreaChart;
