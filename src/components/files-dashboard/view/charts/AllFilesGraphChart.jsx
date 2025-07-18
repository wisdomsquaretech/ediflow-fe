import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const labels = [
  "06/01/25",
  "06/02/25",
  "06/03/25",
  "06/04/25",
  "06/05/25",
  "06/06/25",
  "06/07/25",
  "06/08/25",
  "06/09/25",
];

const data = {
  labels,
  datasets: [
    {
      label: "Total Sales Files",
      data: [500, 245, 330, 470, 310, 250, 290, 230, 200],
      backgroundColor: "#0085FF",
      borderRadius: 4,
      barThickness: 25,
    },
    {
      label: "Total Inventory Files",
      data: [225, 65, 185, 75, 225, 185, 185, 20, 330],
      backgroundColor: "#66B6FF",
      borderRadius: 4,
      barThickness: 25,
    },
    {
      label: "Total Invalid Files",
      data: [null, null, null, null, null, null, null, null, null],
      backgroundColor: "#BFE0FF",
      borderRadius: 4,
      barThickness: 25,
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
        boxWidth: 20,
        color: "#242424",
        font: {
          size: 14,
          family: "Poppins",
          weight: "400",
        },
        padding: 10,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#242424",
        font: {
          family: "Poppins",
          weight: "400",
        },
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: "#242424",
        font: {
          family: "Poppins",
          weight: "400",
        },
        beginAtZero: true,
      },
    },
  },
};

const AllFilesGraphChart = () => {
  return (
    <div className="h-full bg-white rounded-[8px] border border-[#EDECE9]">
      <p className="p-4 text-[20px] text-[#242424] font-medium font-[Poppins] leading-[100%]">
        All Files Graph
      </p>
      <div className="border border-[#EDECE9]"></div>
      <div className="h-[420px] p-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AllFilesGraphChart;
