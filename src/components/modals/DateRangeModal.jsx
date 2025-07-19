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
