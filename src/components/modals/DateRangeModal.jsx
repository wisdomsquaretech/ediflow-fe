//  "use client";
// import React, { useState } from "react";

// const DateRangeModal = ({ isOpen, onClose }) => {

//   const [selectedRange, setSelectedRange] = useState("This week");
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   const [selectedMonth, setSelectedMonth] = useState("January");
//   const [selectedYear, setSelectedYear] = useState("2025");
//   const years = Array.from({ length: 10 }, (_, i) => 2025 - i);

//   const days = Array.from({ length: 31 }, (_, i) => i + 1);
//   const firstDay = new Date(selectedYear, months.indexOf(selectedMonth), 1).getDay();
//   const daysInMonth = new Date(selectedYear, months.indexOf(selectedMonth) + 1, 0).getDate();

//   const handleRangeChange = (e) => setSelectedRange(e.target.value);
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//     <div className="w-[350px] bg-white rounded-lg shadow-lg p-4">
//       <div className="flex justify-between items-center mb-2">
//         <h2 className="text-lg font-semibold text-gray-800">Select a date or range</h2>
//         <button  onClick={onClose}
//          className="text-gray-500 hover:text-gray-700">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//       <div className="flex items-center gap-2 mb-4">
//         <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m0 4h8m-8 0v10a2 2 0 002 2h4a2 2 0 002-2V7m-6 4h4m-6 0v6h4v-6" />
//         </svg>
//         <select
//           className="border rounded px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={selectedMonth}
//           onChange={(e) => setSelectedMonth(e.target.value)}
//         >
//           {months.map((month) => (
//             <option key={month} value={month}>{month}</option>
//           ))}
//         </select>
//         <select
//           className="border rounded px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={selectedYear}
//           onChange={(e) => setSelectedYear(e.target.value)}
//         >
//           {years.map((year) => (
//             <option key={year} value={year}>{year}</option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-7 gap-1 mb-4 text-center text-sm text-gray-700">
//         <div className="font-medium">S</div>
//         <div className="font-medium">M</div>
//         <div className="font-medium">T</div>
//         <div className="font-medium">W</div>
//         <div className="font-medium">T</div>
//         <div className="font-medium">F</div>
//         <div className="font-medium">S</div>
//         {Array.from({ length: firstDay }, (_, i) => (
//           <div key={`empty-${i}`} className="text-gray-300">-</div>
//         ))}
//         {days.slice(0, daysInMonth).map((day) => (
//           <div
//             key={day}
//             className={`p-1 rounded-full hover:bg-gray-200 cursor-pointer ${
//               day === new Date().getDate() && selectedMonth === months[new Date().getMonth()] && selectedYear === String(new Date().getFullYear())
//                 ? "bg-blue-500 text-white"
//                 : ""
//             }`}
//           >
//             {day}
//           </div>
//         ))}
//       </div>
//       <div className="space-y-2">
//         {["Today", "Yesterday", "This week", "Last week", "This month", "Last month", "This year", "Last year"].map((range) => (
//           <label key={range} className="flex items-center gap-2 text-sm text-gray-700">
//             <input
//               type="radio"
//               name="dateRange"
//               value={range}
//               checked={selectedRange === range}
//               onChange={handleRangeChange}
//               className="w-4 h-4 text-blue-600 focus:ring-blue-500"
//             />
//             {range}
//           </label>
//         ))}
//       </div>
//       <button className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
//         Apply
//       </button>
//     </div>
//     </div>
//   );
// };

// export default DateRangeModal;
"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import closeIcon from "@/assets/images/header-icons/dateRangeCloseIcon.svg";
import dateIcon from "@/assets/images/header-icons/dateIcon.svg";
import leftArrow from "@/assets/images/header-icons/arrow-left.svg";
import rightArrow from "@/assets/images/header-icons/arrow-right.svg";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const presetOptions = [
  "Today",
  "Yesterday",
  "This week",
  "Last week",
  "This month",
  "Last month",
  "This year",
  "Last year",
];

export const DateRangeModal = ({ isOpen, onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedPreset, setSelectedPreset] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const navigateMonth = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="flex items-center justify-center text-[#242424] font-[Poppins] font-normal text-[18px] leading-[24px] text-center align-middle"
        >
          -
        </div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate === day;
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`h-10 w-10 rounded flex items-center justify-center font-[Poppins] font-normal text-[18px] leading-[24px] text-center align-middle ${
            isSelected
              ? "bg-[#E9E9E9] text-black"
              : "hover:bg-gray-100 text-[#1C1C1C]"
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  if (!isOpen) return null;

  return (
    <Drawer direction="right" open={isOpen} onClose={onClose}>
      <DrawerContent className="mx-auto w-[500px] rounded-l-[16px] p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="tracking-[0] text-right text-[#242424] font-[Poppins] font-medium text-[22px] leading-[34px] align-middle">
            Select a date or range
          </h2>
          <DrawerClose asChild>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="p-0"
            >
              <Image src={closeIcon} alt="Close" width={40} height={40} />
            </Button>
          </DrawerClose>
        </div>

        {/* Calendar Header */}
        <div className="border-[1px] rounded-[8px] py-[12px] px-[15px] ">
        <div className="flex items-center justify-between px-2 mb-4 border-b-[1px] border-[#EDECE9]">
          <div className="flex items-center gap-2 ">
            <Image src={dateIcon} alt="Date icon" width={24} height={24} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateMonth("prev")}
              className="p-1"
            >
              <Image src={leftArrow} alt="Prev" width={24} height={24} />
            </Button>
            <span className="w-[100px] font-[Poppins] font-normal text-[18px] leading-[24px] tracking-[0] text-center align-middle">
              {months[currentMonth]}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateMonth("next")}
              className="p-1"
            >
              <Image src={rightArrow} alt="Next" width={24} height={24} />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentYear(currentYear - 1)}
              className="p-1"
            >
              <Image src={leftArrow} alt="Prev Year" width={24} height={24} />
            </Button>
            <span className="w-[50px] font-[Poppins] font-normal text-[18px] leading-[24px] tracking-[0] text-center align-middle">
              {currentYear}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentYear(currentYear + 1)}
              className="p-1"
            >
              <Image src={rightArrow} alt="Next Year" width={24} height={24} />
            </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center align-middle">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-[#676767] font-[Poppins] font-normal text-[18px] leading-[24px] text-center align-middle border-b-[1px] border-[#EDECE9]"
            >
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
        </div>

        {/* Presets */}
        <div className="mb-6">
          <RadioGroup value={selectedPreset} onValueChange={setSelectedPreset}>
            {presetOptions.map((option) => (
              <div
                key={option}
                className="flex items-center justify-between py-[10px] border-b border-[#F0F0F0]"
              >
                <label
                  htmlFor={option}
                  className="text-[#242424] cursor-pointer font-[Poppins] font-normal text-[18px] leading-[24px] text-right align-middle"
                >
                  {option}
                </label>
                <RadioGroupItem value={option} id={option} />
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Apply Button */}
        <Button className="w-full bg-[#0085FF] py-4 hover:bg-[#006AE6] text-white h-10 rounded-[8px] font-[Poppins] font-medium text-[18px] leading-[20px] text-center align-middle cursor-pointer">
          Apply
        </Button>
      </DrawerContent>
    </Drawer>
  );
};
