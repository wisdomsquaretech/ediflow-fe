"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/images/logo/PUIG-Logo.svg";
import FilesDashboardMenuIcon from "@/assets/images/sidebar-icons/FilesDashboardMenuIcon";
import SalesDashboardMenuIcon from "@/assets/images/sidebar-icons/SalesDashboardMenuIcon";
import SettingsMenuIcon from "@/assets/images/sidebar-icons/SettingsMenuIcon";
import ProfileMenuIcon from "@/assets/images/sidebar-icons/ProfileMenuIcon";
import SidebarLeftArrowIcon from "@/assets/images/sidebar-icons/SidebarLeftArrowIcon";

const sidebarMenus = [
  {
    name: "Files Dashboard",
    route: "/",
    icon: FilesDashboardMenuIcon,
  },
  {
    name: "Sales Dashboard",
    route: "/sales-dashboard",
    icon: SalesDashboardMenuIcon,
  },
];

const sidebarBottomMenus = [
  {
    name: "Settings",
    route: "/settings",
    icon: SettingsMenuIcon,
  },
  {
    name: "Belk",
    route: "/belk",
    icon: ProfileMenuIcon,
    hasSubMenu: true,
    subMenus: [
      { name: "Submenu 1", route: "/belk/sub1" },
      { name: "Submenu 2", route: "/belk/sub2" },
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <div className="lg:flex lg:flex-col lg:inset-y-0 lg:z-40 transition-all duration-300 lg:w-[341px] fixed">
      <div className="p-6 bg-[#242424] flex grow flex-col justify-between items-start">
        <div className="w-[293px] flex flex-col gap-6 justify-start items-start">
          <button className="w-full cursor-pointer">
            <Image
              src={logo}
              width={176}
              height={44}
              alt="Logo"
              className="object-contain"
            />
          </button>
          <div className="w-full flex flex-col gap-3 items-start">
            {sidebarMenus?.map((item, index) => {
              const isActive = item?.route === pathname;
              const IconComponent = item?.icon;

              return (
                <button
                  key={index}
                  onClick={() => router?.push(item?.route)}
                  className={`w-full p-4 ${
                    item?.route === pathname
                      ? "bg-[#D0CAC2] rounded-[8px]"
                      : "bg-transparent"
                  } flex gap-3 justify-start items-center cursor-pointer`}
                >
                  <IconComponent color={isActive ? "#000000" : "#FFFFFF"} />
                  <p
                    className={`${
                      item?.route === pathname
                        ? "text-[#000000]"
                        : "text-[#FFFFFF]"
                    } text-[18px] font-medium font-[Poppins] leading-[24px] align-middle`}
                  >
                    {item?.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-[293px] flex flex-col gap-3 justify-start items-start">
          {sidebarBottomMenus?.map((item, index) => {
            const isActive = item?.route === pathname;
            const IconComponent = item?.icon;
            const isBelk = item.name === "Belk";

            return (
              <div key={index} className="w-full relative">
                <button
                  onClick={() => {
                    if (isBelk) {
                      setOpenSubMenu((prev) => !prev);
                    } else {
                      router?.push(item?.route);
                    }
                  }}
                  className={`w-full p-4 ${
                    isActive ? "bg-[#D0CAC2] rounded-[8px]" : "bg-transparent"
                  } flex gap-3 justify-start items-center cursor-pointer`}
                >
                  <IconComponent color={isActive ? "#000000" : "#FFFFFF"} />
                  <div className="w-full flex justify-between items-center">
                    <p
                      className={`${
                        isActive ? "text-[#000000]" : "text-[#FFFFFF]"
                      } text-[18px] font-medium font-[Poppins] leading-[24px]`}
                    >
                      {item?.name}
                    </p>
                    {isBelk && (
                      <SidebarLeftArrowIcon
                        color={isActive ? "#000000" : "#FFFFFF"}
                        className={`transform transition-transform duration-300 ${
                          openSubMenu ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </div>
                </button>

                {/* Submenu Popup */}
                {isBelk && openSubMenu && (
                  <div className="absolute bottom-[60px] left-0 w-[293px] bg-white shadow-lg rounded-[8px] z-50">
                    {item?.subMenus?.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => {
                          setOpenSubMenu(false);
                          router.push(subItem.route);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 text-[#000] font-[Poppins] text-[16px]"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
