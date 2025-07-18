"use client";

import { useState, useRef, useEffect  } from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import swapArrow from "@/assets/images/fileDashboard/swapArrow.svg";
import RejectIcon from "@/assets/images/fileDashboard/rejectIcon.svg";
import ReviewIcon from "@/assets/images/fileDashboard/reviewIcon.svg";
import DeleteIcon from "@/assets/images/fileDashboard/Delete_Icon.svg";

const sampleFiles = [
  {
    id: "1",
    fileName: "Aafes",
    fileType: "Sales",
    arrivalDate: "06/21/2025",
    weekRange: "Week 1",
    lastProcessDate: "06/21/2025",
    status: "Received",
  },
  {
    id: "2",
    fileName: "Blek",
    fileType: "Sales",
    arrivalDate: "06/20/2025",
    weekRange: "Week 1",
    lastProcessDate: "06/21/2025",
    status: "Invalid",
  },
  {
    id: "3",
    fileName: "JCPenny",
    fileType: "Inventory",
    arrivalDate: "06/22/2025",
    weekRange: "Week 1",
    lastProcessDate: "06/21/2025",
    status: "Delayed",
  },
  {
    id: "4",
    fileName: "Dillards",
    fileType: "Sales",
    arrivalDate: "06/20/2025",
    weekRange: "Week 1",
    lastProcessDate: "06/21/2025",
    status: "Processing",
  },
  {
    id: "5",
    fileName: "Macys",
    fileType: "Sales",
    arrivalDate: "06/20/2025",
    weekRange: "Week 1",
    lastProcessDate: "06/21/2025",
    status: "Rejected",
  },
  {
    id: "6",
    fileName: "Macys",
    fileType: "Sales",
    arrivalDate: "06/20/2025",
    weekRange: "Week 1",
    lastProcessDate: "06/21/2025",
    status: "Rejected",
  },
  {
    id: "7",
    fileName: "Macys",
    fileType: "Sales",
    arrivalDate: "06/20/2025",
    weekRange: "Week 1",
    lastProcessDate: "06/21/2025",
    status: "Rejected",
  },
  {
    id: "8",
    fileName: "Macys",
    fileType: "Sales",
    arrivalDate: "06/20/2025",
    weekRange: "Week 1",
    lastProcessDate: "06/21/2025",
    status: "Rejected",
  },
];

export function DataTable({ files }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef({});
  const clickedInsideButtonRef = useRef(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      setTimeout(() => {
        if (clickedInsideButtonRef.current) {
          clickedInsideButtonRef.current = false;
          return;
        }

        if (
          openMenuId !== null &&
          menuRef?.current[openMenuId] &&
          !menuRef?.current[openMenuId]?.contains(e?.target)
        ) {
          setOpenMenuId(null);
        }
      }, 0);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openMenuId])

  const fileData = files || sampleFiles;

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "received":
        return "bg-[#0ADA6A1A] w-[124px] h-[35px] text-[#0ADA6A] hover:bg-green-100";
      case "invalid":
        return "bg-[#FF1F581A] w-[124px] h-[35px] text-[#FF1F58] hover:bg-red-100";
      case "delayed":
        return "bg-[#FF7E081A] w-[124px] h-[35px] text-[#FF7E08] hover:bg-yellow-100";
      case "processing":
        return "bg-[#FF7E081A] w-[124px] h-[35px] text-[#FF7E08] hover:bg-orange-100";
      case "rejected":
        return "bg-[#FF1F581A] w-[124px] h-[35px] text-[#FF1F58] hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="w-full">
      <div className="p-4">
        <p className="mb-2 pl-2 text-[20px] text-[#242424] font-medium font-[Poppins] leading-[136%] align-middle">All Files</p>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#EDECE9] hover:bg-[#EDECE9]">
                <TableHead className="font-medium text-[#242424] py-4 text-[18px]">
                  <div className="flex text-[18px] items-center gap-2 ">
                    File Name
                    <Image
                      src={swapArrow}
                      className="h-5 w-5"
                      alt="swap Arrow"
                    />
                  </div>
                </TableHead>
                <TableHead className="font-medium text-[#242424] py-4 text-[18px] ">
                  File Type
                </TableHead>
                <TableHead className="font-medium text-[#242424] py-4 text-[18px]">
                  Arrival Date
                </TableHead>
                <TableHead className="font-medium text-[#242424] py-4 text-[18px]">
                  Week Range
                </TableHead>
                <TableHead className="font-medium text-[#242424] py-4 text-[18px]">
                  Last Process Date
                </TableHead>
                <TableHead className="font-medium text-[#242424] py-4 text-[18px]">
                  Status
                </TableHead>
                <TableHead className="font-medium text-[#242424] py-4 text-[18px] text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fileData?.map((file, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="py-4 text-[18px] text-[#242424]">
                    {file?.fileName}
                  </TableCell>
                  <TableCell className="py-4 text-[18px] text-[#242424]">
                    {file?.fileType}
                  </TableCell>
                  <TableCell className="py-4 text-[18px] text-[#242424]">
                    {file?.arrivalDate}
                  </TableCell>
                  <TableCell className="py-4 text-[18px] text-[#242424]">
                    {file?.weekRange}
                  </TableCell>
                  <TableCell className="py-4 text-[18px] text-[#242424]">
                    {file?.lastProcessDate}
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge variant="secondary" className={`${getStatusColor(file?.status)} border-0 text-[18px] font-normal px-3 py-1`}>
                      {file?.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 text-center relative">
                    <Button  variant="ghost" size="sm" className="h-8 w-8 p-0"
                     onClick={(e) => {
                      e?.stopPropagation();
                      e?.preventDefault();
                      clickedInsideButtonRef.current = true;
                      setOpenMenuId(openMenuId === file?.id ? null : file?.id);
                      }}
                    >
                      <MoreVertical className="h-6 w-6 text-[#242424]" />
                    </Button>
                    {openMenuId === file?.id && (
                      <div ref={(el) => (menuRef.current[file?.id] = el)} className="absolute top-18 right-14 z-50 w-[175px] rounded-[8px] bg-[#FFFFFF] border border-[#EDECE9] shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                        <div className="py-3 px-6 flex flex-col gap-4 justify-start items-start">
                          <button className="flex gap-2 justify-start items-center cursor-pointer">
                          <Image src={RejectIcon} alt="RejectIcon" height={24} width={24} />
                          <p className="text-[18px] text-[#242424] font-normal font-[Poppins] leading-[100%]">Reject</p>
                          </button>
                          <button className="flex gap-2 justify-start items-center cursor-pointer">
                          <Image src={ReviewIcon} alt="ReviewIcon" height={24} width={24} />
                          <p className="text-[18px] text-[#242424] font-normal font-[Poppins] leading-[100%]">Review</p>
                          </button>
                          <button className="flex gap-2 justify-start items-center cursor-pointer">
                          <Image src={DeleteIcon} alt="DeleteIcon" height={24} width={24} />
                          <p className="text-[18px] text-[#FF1F58] font-normal font-[Poppins] leading-[100%]">Delete</p>
                          </button>
                        </div>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
