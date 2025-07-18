"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FileDistributionChart = () => {
  const total = 264 + 127 + 45;

  const data = {
    labels: ["Total Sales", "Total Inventory", "Invalid"],
    datasets: [
      {
        data: [200, 100, 80],
        backgroundColor: ["#0085FF", "#66B6FF", "#BFE0FF"],
        borderWidth: 0,
        cutout: "48%",
        borderRadius: 8,
        spacing: 7,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-[436px] p-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9]">
      <p className="text-[20px] text-[#242424] font-medium font-[Poppins] leading-[100%] mb-3">File Distribution</p>

      <div className="relative w-full h-[304px] flex items-center justify-center">
        <Doughnut data={data} options={options} />

        <div className="absolute text-center">
          <p className="font-semibold text-[42.24px] text-center font-[Poppins] leading-[100%]">{total}</p>
          <p className="text-sm text-gray-600">Files</p>
        </div>
      </div>

      <div className="flex justify-between mt-3 text-sm font-medium text-gray-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#007BFF]"></span>
          <span>264 Files</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#66B2FF]"></span>
          <span>127 Files</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#CCE5FF]"></span>
          <span>45 Files</span>
        </div>
      </div>
    </div>
  );
};

export default FileDistributionChart;
