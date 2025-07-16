'use client';

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/images/logo/PUIG-Logo.svg";
import filesDashboardMenuIcon from "../../assets/images/sidebar-icons/FilesDashboard_Menu_Icon.svg";
import salesDashboardMenuIcon from "../../assets/images/sidebar-icons/SalesDashboard_Menu_Icon.svg";

const navigation = [
  {
    name: "Files Dashboard",
    route: "/",
    icon: filesDashboardMenuIcon,
  },
  {
    name: "Sales Dashboard",
    route: "/sales-dashboard",
    icon: salesDashboardMenuIcon,
  },
];

const Sidebar = () => {

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="lg:flex lg:flex-col lg:inset-y-0 lg:z-40 transition-all duration-300 lg:w-[341px] fixed">
      <div className="p-6 bg-[#242424] flex grow flex-col justify-between items-start">
        <div className="w-[293px] flex flex-col gap-6 justify-start items-start">
          <button className="w-full cursor-pointer">
              <Image src={logo} width={176} height={44} alt="Logo" className="object-contain" />
          </button>
          <div className="w-full flex flex-col gap-3 items-start">
            {navigation?.map((item, index) => (
            <button key={index} onClick={() => router?.push(item?.route)} className={`w-full p-4 ${item?.route === pathname ? "bg-[#D0CAC2] rounded-[8px]" : "bg-transparent"} flex gap-3 justify-start items-center cursor-pointer`}>
              <Image src={item?.icon} width={24} height={24} alt="menuIcon" className={`object-contain`} />
              <p className={`text-[18px] ${item?.route === pathname ? "text-[#000000]" : "text-[#FFFFFF]"} font-medium font-[Poppins] leading-[24px] align-middle`}>{item?.name}</p>
            </button>
            ))}
          </div>
        </div>
         <div className="w-[293px] flex flex-col gap-6 justify-start items-start">
          <button className="cursor-pointer">
              <Image src={logo} width={70} height={70} alt="Logo" className="object-contain" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
