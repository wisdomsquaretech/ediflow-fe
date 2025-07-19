import React from "react";
import Image from "next/image";
import closeIcon from "@/assets/images/header-icons/closeIcon.svg";

const EditLineNumberModal = ({ editLineNumberModal, handleClose, lineNumber }) => {

  if (!editLineNumberModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="bg-white shadow-xl w-[650px] p-[32px] rounded-[8px] relative flex flex-col gap-8 items-start justify-start">
        <div className="w-full flex justify-between items-center">
          <p className="text-[#242424] text-[24px] font-medium font-[Poppins] leading-[136%]">Edit Line Number</p>
          <button onClick={handleClose} className="rounded-[4px] border border-[#C4D4EC] hover:bg-gray-100 transition cursor-pointer">
            <Image src={closeIcon} alt="CloseIcon" />
          </button>
        </div>
        <div className="w-full flex items-center gap-1">
          <p className="text[#242424] text-[20px] font-normal font-[Poppins] leading-[24px]">Current Value</p>
          <p className="text[#242424] text-[20px] font-semibold font-[Poppins] leading-[24px]">‘21’</p>
        </div>
        <div className="w-full flex flex-col gap-1 justify-start items-start">
          <p className="pl-2 text-[#676767] text-[18px] font-normal font-[Poppins] leading-[24px] align-middle">
            New Value
          </p>
          <input defaultValue={lineNumber} type="number" className="w-full py-3 px-4 rounded-[8px] border border-[#C4D4EC]" />
        </div>
        <div className="w-full flex gap-4 items-center">
          <button onClick={handleClose} className="p-3 w-full bg-[#FF1F58] rounded-[8px] flex justify-center items-center text-center cursor-pointer text-[#FFFFFF] text-[18px] font-normal font-[Poppins] leading-[24px]">
            Ignore
          </button>
          <button onClick={handleClose} className="p-3 w-full bg-[#0085FF] rounded-[8px] flex justify-center items-center text-center cursor-pointer text-[#FFFFFF] text-[18px] font-normal font-[Poppins] leading-[24px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLineNumberModal;
