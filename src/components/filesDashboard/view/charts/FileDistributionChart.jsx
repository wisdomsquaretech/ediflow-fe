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
    <div className="w- p-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9]">
      <p className="text-[20px] text-[#242424] font-medium font-[Poppins] leading-[100%] mb-3">
        File Distribution
      </p>
      <div className="relative w-full h-[304px] flex items-center justify-center">
        <Doughnut data={data} options={options} />
        <div className="absolute text-center">
          <p className="font-semibold text-[42.24px] text-center font-[Poppins] leading-[100%]">
            {total}
          </p>
          <p className="font-semibold text-[23.76px] text-[#242424] leading-[100%] text-center font-[Poppins]">
            Files
          </p>
        </div>
      </div>
      <div className="mt-3 w-full flex justify-between items-center">
        <div className="flex flex-col gap-2 items-start">
          <p className="font-normal text-[16px] text-[#676767] leading-[100%] font-[Poppins]">
            Total Sales
          </p>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-[8px] bg-[#0085FF]"></div>
            <p className="font-bold text-[18px]text-[#242424] leading-[100%] text-right font-[Poppins]">
              264 Files
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="font-normal text-[16px] text-[#676767] leading-[100%] font-[Poppins]">
            Total Inventory
          </p>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-[8px] bg-[#66B6FF]"></div>
            <p className="font-bold text-[18px]text-[#242424] leading-[100%] text-right font-[Poppins]">
              127 Files
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="font-normal text-[16px] text-[#676767] leading-[100%] font-[Poppins]">
            Invalid
          </p>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-[8px] bg-[#BFE0FF]"></div>
            <p className="font-bold text-[18px]text-[#242424] leading-[100%] text-right font-[Poppins]">
              45 Files
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileDistributionChart;
