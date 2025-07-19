"use client"

import { useState } from "react";
import SwapArrow from "@/assets/images/fileDashboard/SwapArrow";
import EditIcon from "@/assets/images/review-file/EditIcon";
import EditLineNumberModal from "@/components/modals/EditLineNumberModal";

const sampleFiles = [
  {
    sr: "1",
    productId: "3349666007921",
    anomaly: "06/21/2025",
    lineNumber: "36",
    status: "open",
  },
  {
    sr: "2",
    productId: "3349666007921",
    anomaly: "06/22/2025",
    lineNumber: "59",
    status: "open",
  },
  {
    sr: "3",
    productId: "3349666007921",
    anomaly: "06/23/2025",
    lineNumber: "21",
    status: "open",
  },
  {
    sr: "4",
    productId: "3349666007921",
    anomaly: "06/24/2025",
    lineNumber: "104",
    status: "close",
  },
  {
    sr: "5",
    productId: "3349666007921",
    anomaly: "06/25/2025",
    lineNumber: "21",
    status: "close",
  },
  {
    sr: "6",
    productId: "3349666007921",
    anomaly: "06/25/2025",
    lineNumber: "54",
    status: "open",
  },
  {
    sr: "7",
    productId: "3349666007921",
    anomaly: "06/25/2025",
    lineNumber: "65",
    status: "close",
  },
  {
    sr: "8",
    productId: "3349666007921",
    anomaly: "06/25/2025",
    lineNumber: "86",
    status: "open",
  },
  {
    sr: "9",
    productId: "3349666007921",
    anomaly: "06/25/2025",
    lineNumber: "45",
    status: "close",
  },
];

const DataTable = ({ isRejected }) => {
  const [editLineNumberModal, setEditLineNumberModal] = useState(false);
  const [lineNumber, setLineNumber] = useState("");

  const fileData = sampleFiles;

  const handleOpen = (value) => {
    setLineNumber(value);
    setEditLineNumberModal(true);
  };

  const handleClose = () => {
    setLineNumber("");
    setEditLineNumberModal(false);
  };

  return (
    <>
      <div className="mt-4 flex flex-col gap-2 justify-start">
        <p className="pl-4 text[#242424] text-[20.01px] font-medium font-[Poppins] leading-[136%] align-middle">File Details</p>
        <div className="p-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] overflow-hidden">
          <table className="w-full table-fixed border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-[#F4F4F4] font-[poppins] p-4">
                <th className="rounded-l-xl">
                  <div className="py-4 flex gap-1 justify-center items-center">
                    <p className="font-medium font-[poppins] leading-[100%] tracking-[0%] text-center text-[#242424] text-[18.01px]">
                      Sr No
                    </p>
                    <SwapArrow />
                  </div>
                </th>
                <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px]">
                  Product ID
                </th>
                <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px]">
                  Anomaly
                </th>
                <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px]">
                  Line Number
                </th>
                <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px] rounded-r-xl">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {fileData?.map((file, index) => (
                <tr key={index} className="font-[poppins]">
                  <td colSpan={5}>
                    <div className="w-full bg-white border border-[#EDECE9] rounded-[8px] grid grid-cols-5 text-center items-center">
                      <div className="py-[14.5px] text-[#242424] font-[poppins] font-normal text-[18px] leading-[100%] tracking-[0%]">
                        {file?.sr}
                      </div>
                      <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                        {file?.productId}
                      </div>
                      <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                        {file?.anomaly}
                      </div>
                      <div className="py-[14.5px] flex justify-center">
                        {!isRejected ? (
                          <div className="w-[150px] flex items-center bg-[#FFFFFF] rounded-[4px] border border-[#C4D4EC]">
                            <p className="w-full px-5 text-center text-[18px] text-[#242424] font-normal font-[poppins] leading-[100%] tracking-[0%]">
                              {file?.lineNumber}
                            </p>
                            <button onClick={() => handleOpen(file?.lineNumber)} className="p-2 bg-[#F9F9F9] border-l border-[#C4D4EC] flex justify-center items-center cursor-pointer">
                              <EditIcon />
                            </button>
                          </div>
                        ) : (
                          <p className="w-[102px] px-5 py-2 rounded-[4px] border border-[#C4D4EC] flex items-center justify-center">
                            {file?.lineNumber}
                          </p>
                        )}
                      </div>
                      <div className="py-[14.5px] flex justify-center">
                        <p
                          className={`w-[40%] p-2 ${
                            file?.status === "open"
                              ? "bg-[#E6FBF0] text-[#0ADA6A] border border-[#0ADA6A]"
                              : "bg-[#DFDFDF] text-[#323336D4] border border-[#3D3D41BF]"
                          } rounded-[8px] flex justify-center items-center text-center text-[18px] font-normal font-[poppins] leading-[100%] tracking-[0%] capitalize`}
                        >
                          {file?.status}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <EditLineNumberModal editLineNumberModal={editLineNumberModal} handleClose={handleClose} lineNumber={lineNumber} />
    </>
  );
};

export default DataTable;
