"use client";

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const labels = [
  "09/07/2025",
  "10/07/2025",
  "11/07/2025",
  "12/07/2025",
  "13/07/2025",
  "14/07/2025",
];

const data = {
  labels,
  datasets: [
    {
      label: "Sales Files",
      data: [320, 280, 300, 250, 400, 360],
      backgroundColor: "#0085FF",
      borderRadius: 4,
      barThickness: 64,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#242424",
        font: {
          family: "Poppins",
          weight: "400",
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: { display: false, drawBorder: false },
      ticks: {
        color: "#242424",
        font: {
          family: "Poppins",
          weight: "400",
        },
      },
    },
  },
};

const SalesGraphChart = () => {
  return (
    <div className="h-full bg-white rounded-[8px] border border-[#EDECE9]">
      <p className="p-4 text-[20px] text-[#242424] font-medium font-[Poppins] leading-[100%]">Sales Graph</p>
      <div className="border-b border-[#EDECE9]"></div>
      <div className="h-[388px] p-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesGraphChart;
