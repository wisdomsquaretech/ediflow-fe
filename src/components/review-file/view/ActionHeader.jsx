"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FilterIcon from "@/assets/images/review-file/FilterIcon";
import uplaodIcon from "@/assets/images/header-icons/Uplaod-Icon.svg";
import { FileUploadComponent } from "@/components/modals/UploadFileModal";

const filterOptions = ["Data Integrity", "Business Logic"];

const ActionHeader = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isRejected, setIsRejected] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);

  return (
    <>
      <div className="p-4 w-full bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] flex gap-4 justify-between items-center">
        <div className="w-full">
          <Select
            onValueChange={(value) => setSelectedFilter(value)}
            value={selectedFilter}
          >
            <SelectTrigger className="p-6 w-full bg-[#F4F4F4] rounded-[8px] border border-[#EDECE9] flex gap-1 justify-between items-center cursor-pointer">
              <div className="flex gap-4 items-center">
                <FilterIcon />
                <p className="text-[#242424] text-[18px] font-normal font-[Poppins] leading-[24px]">
                  {selectedFilter || "Anomalies Filter"}
                </p>
              </div>
            </SelectTrigger>
            <SelectContent className="w-full mt-[14px] border border-[#EDECE9] rounded-[8px] bg-white">
              {filterOptions?.map((option, index) => (
                <SelectItem
                  key={index}
                  value={option}
                  className="text-[#242424] text-[18px] font-normal font-[Poppins] px-6 py-3 cursor-pointer hover:bg-[#f4f4f4]"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {!isRejected ? (
          <div className="w-full flex gap-4 items-center">
            <button
              onClick={() => setIsRejected(true)}
              className="p-3 w-full bg-[#FF1F58] rounded-[8px] flex justify-center items-center text-center cursor-pointer text-[#FFFFFF] text-[18px] font-normal font-[Poppins] leading-[24px]"
            >
              Reject
            </button>
            <button className="p-3 w-full bg-[#0085FF] rounded-[8px] flex justify-center items-center text-center cursor-pointer text-[#FFFFFF] text-[18px] font-normal font-[Poppins] leading-[24px]">
              Submit/Reprocess
            </button>
          </div>
        ) : (
          <div className="w-full flex gap-4 items-center">
            <button className="py-3 px-4 w-full bg-[#FF1F581A] rounded-[8px] border border-[#FF1F58] flex justify-center items-center text-center cursor-pointer text-[#FF1F58] text-[18px] font-normal font-[Poppins] leading-[24px]">
              Rejected
            </button>
            <button onClick={() => setOpenUploadModal(true)} className="w-full flex py-[11px] px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] gap-2 justify-center items-center cursor-pointer">
              <Image
                src={uplaodIcon}
                width={24}
                height={24}
                alt="uplaodIcon"
                className="object-contain"
              />
              <p className="text-[18px] text-[#242424] font-normal font-[Poppins] leading-[20px] align-middle">
                Upload File
              </p>
            </button>
          </div>
        )}
      </div>
      <FileUploadComponent
        isOpen={openUploadModal}
        onClose={() => setOpenUploadModal(false)}
      />
    </>
  );
};

export default ActionHeader;
