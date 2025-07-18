// "use client";

// import Image from "next/image";
// import uplaodIcon from "../../assets/images/header-icons/Uplaod-Icon.svg";
// import calenderIcon from "../../assets/images/header-icons/calender-icon.svg";
// import leftArrowIcon from "../../assets/images/header-icons/left-arrow-icon.svg";
// import notificationIcon from "../../assets/images/header-icons/notification-Icon.svg";
// import { useEffect, useRef, useState } from "react";
// import NotificationGroup from "../../assets/images/header-icons/Group.svg";

// const Header = ({ setIsSidebarOpen }) => {

//     const [openNotification, setOpenNotification] = useState(null);
//     const menuRef = useRef({});

//     useEffect(() => {
//       const handleClickOutside = (e) => {
//         if (
//           openNotification !== null &&
//           menuRef.current[openNotification] &&
//           !menuRef.current[openNotification].contains(e.target)
//         ) {
//           setOpenNotification(null);
//         }
//       };
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [openNotification]);

//   return (
//     <div className="w-full fixed top-0 right-0 z-40">
//       <div className="w-full h-[80px] bg-[#FFFFFF] p-4 flex gap-4 items-center lg:ml-[341px]">
//         <button
//           onClick={() => setIsSidebarOpen((prev) => !prev)}
//           className="sidebar-toggle p-2 bg-gray-100 rounded lg:hidden"
//         >
//           <div className="w-5 h-0.5 bg-black mb-1" />
//           <div className="w-5 h-0.5 bg-black mb-1" />
//           <div className="w-5 h-0.5 bg-black" />
//         </button>

//         <div className="hidden lg:block py-[13px] px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9]">
//           <p className=" text-start text-[20px] text-[#242424] font-semibold font-[Poppins] leading-[100%] align-middle">
//             Belk’s Files Dashboard
//           </p>
//         </div>

//         <div className="flex gap-4 items-center ml-auto lg:ml-0">
//           <button className="hidden lg:flex py-[11px] px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] gap-4 justify-between items-center cursor-pointer">
//             <div className="flex gap-4 justify-center items-center">
//               <Image
//                 src={calenderIcon}
//                 width={24}
//                 height={24}
//                 alt="calenderIcon"
//                 className="object-contain"
//               />
//               <p className="text-[18px] text-[#BDBDBD] font-normal font-[Poppins] leading-[24px] align-middle">
//                 Select a date or range
//               </p>
//             </div>
//             <Image
//               src={leftArrowIcon}
//               width={24}
//               height={24}
//               alt="leftArrowIcon"
//               className="object-contain"
//             />
//           </button>

//           <button className="hidden lg:flex py-[11px] px-4 bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] gap-2 justify-center items-center cursor-pointer">
//             <Image
//               src={uplaodIcon}
//               width={24}
//               height={24}
//               alt="uplaodIcon"
//               className="object-contain"
//             />
//             <p className="text-[18px] text-[#242424] font-normal font-[Poppins] leading-[20px] align-middle">
//               Upload File
//             </p>
//           </button>

//            {/* Notification Button */}
//           <button
//         onClick={() => setOpenNotification((prev) => !prev)}
//           className="p-[11px] bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] flex justify-center cursor-pointer">
//             <Image
//               src={notificationIcon}
//               width={24}
//               height={24}
//               alt="notificationIcon"
//               className="object-contain"
//             />
//           </button>
//           {openNotification && (
//               <div className="absolute right-0 top-[60px] w-[400px] bg-white border border-[#EDECE9] rounded-[12px] shadow-lg z-50">
//                 <div className="p-4 flex justify-between items-center border-b border-[#EDECE9]">
//                   <h3 className="text-[18px] font-semibold text-[#242424] font-[Poppins]">
//                     Notifications <span className="text-[#FF1F58] text-[20px]">•</span>
//                   </h3>
//                   <p className="text-[#BDBDBD] text-[14px] cursor-pointer hover:underline">Clear all</p>
//                 </div>
//                 <div className="p-2 flex flex-col gap-3 max-h-[400px] overflow-auto">
//                   {[...Array(3)].map((_, i) => (
//                     <div key={i} className="bg-white border border-[#EDECE9] rounded-[10px] p-4 flex flex-col gap-1 shadow-sm">
//                       <div className="flex justify-between items-start">
//                         <p className="text-[#242424] font-semibold text-[16px]">Upload Error</p>
//                         <p className="text-[#BDBDBD] text-[14px]">
//                           {i === 0 ? "Just now" : i === 1 ? "1 day ago" : "1 week ago"}
//                         </p>
//                       </div>
//                       <p className="text-[#6B7280] text-[14px] leading-snug">
//                         Vendor name 1 is not uploading since one month
//                       </p>
//                       <p className="text-[#007BFF] text-[14px] font-medium cursor-pointer">Contact</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import uplaodIcon from "../../assets/images/header-icons/Uplaod-Icon.svg";
import calenderIcon from "../../assets/images/header-icons/calender-icon.svg";
import leftArrowIcon from "../../assets/images/header-icons/left-arrow-icon.svg";
import notificationIcon from "../../assets/images/header-icons/notification-Icon.svg";
import NotificationGroup from "../../assets/images/header-icons/Group.svg";
const Header = ({ setIsSidebarOpen }) => {
  const [openNotification, setOpenNotification] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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

          {/* Notification Button */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpenNotification((prev) => !prev)}
              className="p-[11px] bg-[#FFFFFF] rounded-[8px] border border-[#EDECE9] flex justify-center cursor-pointer"
            >
              <Image
                src={notificationIcon}
                width={24}
                height={24}
                alt="notificationIcon"
                className="object-contain"
              />
            </button>

            {openNotification && (
              <div className="absolute right-0 top-[60px] w-[400px] bg-[#F9F9F9] border-[1px] border-[#EDECE9] rounded-[8px] shadow-[#0000001A] z-50">
                <div className="p-4 flex justify-between items-center border-b border-[#EDECE9]">
                  <h3 className="text-[20px] align-middle font-semibold text-[#242424]">
                    Notifications{" "}
                    <span className="text-[#FF1F58] text-[20px]">•</span>
                  </h3>
                  <p className="text-[#676767] font-normal text-[14px] cursor-pointer hover:underline">
                    Clear all
                  </p>
                </div>
                <div className="p-2 flex flex-col gap-4 max-h-[400px] overflow-auto">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white border border-[#EDECE9] rounded-[10px] p-4 flex flex-col gap-1"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src={NotificationGroup}
                            alt="notification group icon"
                            className="w-[20px] h-[20px]"
                          />
                          <p className="text-[#242424] font-medium text-[16px]">
                            Upload Error
                          </p>
                        </div>

                        <p className="text-[#676767] text-[12px] whitespace-nowrap">
                          {i === 0
                            ? "Just now"
                            : i === 1
                            ? "1 day ago"
                            : "1 week ago"}
                        </p>
                      </div>

                      <p className="text-[#676767] text-[14px] leading-snug mt-1">
                        Vendor name 1 is not uploading since one month
                      </p>

                      <p className="text-[#0085FF] text-[14px] font-normal cursor-pointer mt-1">
                        Contact
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
