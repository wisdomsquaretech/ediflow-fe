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
  { name: "Files Dashboard", route: "/", icon: FilesDashboardMenuIcon },
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
    icon: ProfileMenuIcon,
    hasSubMenu: true,
    subMenus: [
      { name: "Belk", route: "/belk" },
      { name: "Data Armor", route: "/belk1" },
      { name: "Super 98", route: "/belk2" },
      { name: "Randon Master", route: "/belk3" },
      { name: "Super 24", route: "/belk4" },
      { name: "Popup", route: "/belk5" },
      { name: "master1", route: "/belk6" },
    ],
  },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleMenuClick = (route) => {
    setIsSidebarOpen(false);
    router?.push(route);
  };

  return (
    <div
      className={`sidebar fixed z-50 bg-[#242424] top-0 left-0 h-full transition-transform duration-300 w-[270px] lg:w-[341px] ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="p-6 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-6">
          <button onClick={() => handleMenuClick("/")} className="w-full">
            <Image src={logo} width={176} height={44} alt="Logo" />
          </button>
          {sidebarMenus?.map((item, idx) => {
            const isActive = pathname === item?.route;
            const Icon = item?.icon;
            return (
              <button
                key={idx}
                onClick={() => handleMenuClick(item?.route)}
                className={`flex gap-3 p-4 w-full items-center rounded-[8px] ${
                  isActive ? "bg-[#D0CAC2]" : ""
                }`}
              >
                <Icon color={isActive ? "#000" : "#FFF"} />
                <p
                  className={`text-[18px] font-[Poppins] ${
                    isActive ? "text-[#000]" : "text-[#FFF]"
                  }`}
                >
                  {item?.name}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          {sidebarBottomMenus?.map((item, idx) => {
            const isActive = pathname === item?.route;
            const Icon = item?.icon;
            const isBelk = item?.name === "Belk";

            return (
              <div key={idx} className="w-full relative">
                <button
                  onClick={() => {
                    if (isBelk) setOpenSubMenu((prev) => !prev);
                    else handleMenuClick(item?.route);
                  }}
                  className={`w-full p-4 flex gap-3 items-center rounded-[8px] ${
                    isActive ? "bg-[#D0CAC2]" : ""
                  }`}
                >
                  <Icon color={isActive ? "#000" : "#FFF"} />
                  <div className="flex justify-between w-full items-center">
                    <p
                      className={`text-[18px] font-[Poppins] ${
                        isActive ? "text-[#000]" : "text-[#FFF]"
                      }`}
                    >
                      {item.name}
                    </p>
                    {isBelk && (
                      <SidebarLeftArrowIcon
                        className={`transform transition-transform ${
                          openSubMenu ? "rotate-90" : ""
                        }`}
                        color={isActive ? "#000" : "#FFF"}
                      />
                    )}
                  </div>
                </button>
                {isBelk && openSubMenu && (
                  <div className="absolute bottom-[60px] left-0 w-full bg-white shadow-lg rounded-[8px] z-50">
                    {item?.subMenus?.map((sub, subIdx) => (
                      <button
                        key={subIdx}
                        onClick={() => handleMenuClick(sub?.route)}
                        className={`w-full text-left px-4 py-3 font-[Poppins] text-[16px] ${
                          pathname === sub?.route
                            ? "text-blue-700"
                            : "text-[#000]"
                        }`}
                      >
                        {sub.name}
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
