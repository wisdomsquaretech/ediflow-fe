import Image from "next/image";
import uplaodIcon from "../../assets/images/header-icons/Uplaod-Icon.svg";
import calenderIcon from "../../assets/images/header-icons/calender-icon.svg";
import leftArrowIcon from "../../assets/images/header-icons/left-arrow-icon.svg";
import notificationIcon from "../../assets/images/header-icons/notification-Icon.svg";

const Header = () => {
  return (
    <div className="w-full fixed top-0 z-40">
      <div className="h-[80px] bg-[#FFFFFF] ml-[341px] p-4 flex gap-4 items-center">
        <div className="w-[740px] h-[48px] py-3 px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9]">
          <p className="w-full text-start text-[20px] text-[#242424] font-semibold font-[Poppins] leading-[100%] align-middle">Belk’s Files Dashboard</p>
        </div>
        <button className="w-[356px] h-[48px] py-3 px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] flex gap-4 justify-between items-center cursor-pointer">
          <div className="flex gap-4 justify-center items-center">
          <Image src={calenderIcon} width={24} height={24} alt="calenderIcon" className="object-contain" />
          <p className="text-[18px] text-[#BDBDBD] font-normal font-[Poppins] leading-[24px] align-middle">Select a date or range</p>
          </div>
          <Image src={leftArrowIcon} width={24} height={24} alt="leftArrowIcon" className="object-contain" />
        </button>
        <button className="w-auto h-[48px] py-3 px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] flex gap-2 justify-center items-center cursor-pointer">
          <Image src={uplaodIcon} width={24} height={24} alt="uplaodIcon" className="object-contain" />
          <p className="text-[18px] text-[#242424] font-normal font-[Poppins] leading-[20px] align-middle">Upload File</p>
        </button>
        <button className="w-[48px] h-[48px] p-3 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] cursor-pointer">
          <Image src={notificationIcon} width={24} height={24} alt="notificationIcon" className="object-contain" />
        </button>
      </div>
    </div>
  );
};

export default Header;
