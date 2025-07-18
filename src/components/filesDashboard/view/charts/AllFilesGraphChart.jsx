import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const labels = Array(7).fill("06/01/25");

const data = {
  labels,
  datasets: [
    {
      label: "Total Sales Files",
      data: [500, 245, 330, 470, 310, 250, 290],
      backgroundColor: "#0080FF",
      borderRadius: 4,
      barThickness: 30,
    },
    {
      label: "Total Inventory Files",
      data: [225, 65, 185, 75, 225, 185, 185],
      backgroundColor: "#4DB8FF",
      borderRadius: 4,
      barThickness: 30,
    },
    {
      label: "Total Invalid Files",
      data: [100, null, null, null, null, null, null],
      backgroundColor: "#B3E0FF",
      borderRadius: 4,
      barThickness: 30,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 10,
        color: "#333",
        font: {
          size: 14,
          family: "Poppins",
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#666",
        font: {
          family: "Poppins",
        },
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: "#666",
        font: {
          family: "Poppins",
        },
        beginAtZero: true,
      },
    },
  },
};

const AllFilesGraphChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        All Files Graph
      </h2>
      <div className="h-[350px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AllFilesGraphChart;
