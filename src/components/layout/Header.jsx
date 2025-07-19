"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import uplaodIcon from "@/assets/images/header-icons/Uplaod-Icon.svg";
import calenderIcon from "@/assets/images/header-icons/calender-icon.svg";
import leftArrowIcon from "@/assets/images/header-icons/left-arrow-icon.svg";
import notificationIcon from "@/assets/images/header-icons/notification-Icon.svg";
import NotificationGroup from "@/assets/images/header-icons/Group.svg";
import { FileUploadComponent } from "../modal/UploadFileModal";

const Header = ({ setIsSidebarOpen }) => {
  const [openNotification, setOpenNotification] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef?.current && !menuRef?.current?.contains(e?.target)) {
        setOpenNotification(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full fixed top-0 right-0 z-40">
      <div className="w-full h-[80px] bg-[#FFFFFF] p-4 flex gap-4 items-center lg:ml-[341px]">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="sidebar-toggle p-2 bg-gray-100 rounded lg:hidden"
        >
          <div className="w-5 h-0.5 bg-black mb-1" />
          <div className="w-5 h-0.5 bg-black mb-1" />
          <div className="w-5 h-0.5 bg-black" />
        </button>
        <div className="hidden lg:block py-[13px] px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9]">
          <p className=" text-start text-[20px] text-[#242424] font-semibold font-[Poppins] leading-[100%] align-middle">
            Belk’s Files Dashboard
          </p>
        </div>
        <div className="flex gap-4 items-center ml-auto lg:ml-0 relative">
          <button className="hidden lg:flex py-[11px] px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] gap-4 justify-between items-center cursor-pointer">
            <div className="flex gap-4 justify-center items-center">
              <Image
                src={calenderIcon}
                width={24}
                height={24}
                alt="calenderIcon"
                className="object-contain"
              />
              <p className="text-[18px] text-[#BDBDBD] font-normal font-[Poppins] leading-[24px] align-middle">
                Select a date or range
              </p>
            </div>
            <Image
              src={leftArrowIcon}
              width={24}
              height={24}
              alt="leftArrowIcon"
              className="object-contain"
            />
          </button>
          <button
            onClick={() => setOpenUploadModal(true)}
            className="hidden lg:flex py-[11px] px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] gap-2 justify-center items-center cursor-pointer"
          >
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
          {/* Notification Button */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpenNotification((prev) => !prev)}
              className={`p-[11px] rounded-[8px] border flex justify-center cursor-pointer transition-colors duration-200 ${
                openNotification
                  ? "bg-[#242424] border-[#242424]"
                  : "bg-white border-[#EDECE9]"
              }`}
            >
              <Image
                src={notificationIcon}
                width={24}
                height={24}
                alt="notificationIcon"
                className={`object-contain transition duration-200 ${
                  openNotification ? "invert" : ""
                }`}
              />
            </button>
            {openNotification && (
              <div className="absolute right-0 top-[65px] w-[504px] h-[596px] max-h-max p-[16px] gap-[16px] opacity-100 bg-[#F9F9F9] border-[1px] border-[#EDECE9] rounded-[8px] shadow-[#0000001A] z-50">
                <div className="mb-4 flex justify-between items-center font-[poppins] border-[#EDECE9]">
                  <div className="flex items-start gap-1">
                    <h3 className="text-[20px] align-middle font-semibold text-[#242424]">
                      Notifications
                    </h3>
                    <span className="text-[#FF1F58] text-[24px] -mt-2">•</span>
                  </div>
                  <p className="text-[#676767] font-normal text-[14px] cursor-pointer hover:underline">
                    Clear all
                  </p>
                </div>
                <div className="flex flex-col gap-4 max-h-[500px] overflow-auto">
                  {[...Array(6)]?.map((_, i) => (
                    <div
                      key={i}
                      className="bg-white border border-[#EDECE9] rounded-[10px] p-4 flex flex-col gap-1"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src={NotificationGroup}
                            alt="notification"
                            className="w-[20px] h-[20px] mt-1"
                          />
                          <div className="flex flex-col gap-[10px] font-[poppins]">
                            <p className="font-poppins font-medium text-[16px] text-[#242424] leading-[136%] text-tracking-[0] align-middle ">
                              Upload Error
                            </p>
                            <p className="text-[#676767] font-poppins font-normal text-[14px] leading-[136%] tracking-[0] align-middle">
                              Vendor name 1 is not uploading since one month
                            </p>
                            <p className="text-[#0085FF] font-poppins font-normal text-[14px] leading-[136%] tracking-[0] align-middle cursor-pointer">
                              Contact
                            </p>
                          </div>
                        </div>
                        <p className="text-[#676767] text-[12px] whitespace-nowrap font-[poppins]">
                          {i === 0
                            ? "Just now"
                            : i === 1
                            ? "1 day ago"
                            : "1 week ago"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <FileUploadComponent
        isOpen={openUploadModal}
        onClose={() => setOpenUploadModal(false)}
      />
    </div>
  );
};

export default Header;
