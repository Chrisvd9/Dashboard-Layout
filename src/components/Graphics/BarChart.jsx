import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ labels, datasets, options }) => {
  const chartData = {
    labels,
    datasets,
  };

  return (
    <>
      <Bar options={options} data={chartData} />
    </>
  );
};

export default BarChart;
