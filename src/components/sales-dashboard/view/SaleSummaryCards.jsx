import Image from "next/image";
import fluentArrowUp from "@/assets/images/fileDashboard/fluentArrow_up.svg";
import fluentArrowDown from "@/assets/images/fileDashboard/fluentArrow_down.svg";

const StatCard = ({ title, value, change, isPositive }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-white h-[150px] flex flex-col opacity-100 gap-4 rounded-[8px] p-4 border border-solid">
        <h1 className="text-[#676767] font-normal text-base leading-[100%] tracking-[0%]">{title}</h1>
        <p className="font-poppins font-bold text-[36px] leading-[100%] tracking-[0%]">{value}</p>
        <div className="flex items-center gap-1">
          <Image src={isPositive ? fluentArrowUp : fluentArrowDown} alt={isPositive ? "up" : "down"} width={16} height={16} />
          <p className={`font-poppins text-base leading-[100%] tracking-[0%] text-[16px] ${isPositive ? "text-[#0ADA6A]" : "text-[#FF1F58]"}`}>
            {change}
            <span className="text-[#676767] font-normal text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">{" "}since last month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const cards = [
  { title: "Sales", value: 356, change: "+11.6%", isPositive: true },
  { title: "Inventory", value: 21, change: "-8.6%", isPositive: false },
  { title: "Revenue", value: 12, change: "+13.6%", isPositive: true },
  { title: "No of Products", value: 45, change: "-12.6%", isPositive: false },
  { title: "No of Stores", value: 391, change: "+16.8%", isPositive: true },
];

const SaleSummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
      {cards?.map((card, index) => (
        <StatCard
          key={index}
          title={card?.title}
          value={card?.value}
          change={card?.change}
          isPositive={card?.isPositive}
        />
      ))}
    </div>
  );
};

export default SaleSummaryCards;
