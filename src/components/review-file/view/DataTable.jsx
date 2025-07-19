import SwapArrow from "@/assets/images/fileDashboard/SwapArrow";

const sampleFiles = [
  {
    sr: "1",
    productId: "3349666007921",
    store: "0888",
    sales: "3000",
    avgSales: "2000",
  },
  {
    sr: "2",
    productId: "3349666007921",
    store: "0432",
    sales: "500",
    avgSales: "800",
  },
  {
    sr: "3",
    productId: "3349666007921",
    store: "0008",
    sales: "6000",
    avgSales: "3000",
  },
  {
    sr: "4",
    productId: "3349666007921",
    store: "0568",
    sales: "200",
    avgSales: "1000",
  },
  {
    sr: "5",
    productId: "3349666007921",
    store: "0698",
    sales: "12222",
    avgSales: "5000",
  },
];

const DataTable = () => {
  const fileData = sampleFiles;

  return (
    <div className="mt-4 flex flex-col gap-2 justify-start">
      <p className="pl-4 text[#242424] text-[20.01px] font-medium font-[Poppins] leading-[136%] align-middle">
        File Details
      </p>
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
                  <div className="w-full bg-white border border-[#EDECE9] rounded-[8px] grid grid-cols-5 text-center">
                    <div className="py-[14.5px] text-[#242424] font-[poppins] font-normal text-[18px] leading-[100%] tracking-[0%]">
                      {file?.sr}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                      {file?.productId}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                      {file?.store}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                      {file?.sales}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                      {file?.avgSales}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
