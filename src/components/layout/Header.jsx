"use client";

import Image from "next/image";
import uplaodIcon from "../../assets/images/header-icons/Uplaod-Icon.svg";
import calenderIcon from "../../assets/images/header-icons/calender-icon.svg";
import leftArrowIcon from "../../assets/images/header-icons/left-arrow-icon.svg";
import notificationIcon from "../../assets/images/header-icons/notification-Icon.svg";

const Header = ({ setIsSidebarOpen }) => {
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

        <div className="flex gap-4 items-center ml-auto lg:ml-0">
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

          <button className="hidden lg:flex py-[11px] px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] gap-2 justify-center items-center cursor-pointer">
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

          <button className="p-[11px] bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] flex justify-center cursor-pointer">
            <Image
              src={notificationIcon}
              width={24}
              height={24}
              alt="notificationIcon"
              className="object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
