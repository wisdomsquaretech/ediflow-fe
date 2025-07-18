"use client";

export function SaleDataTable({ files }) {
  const sampleFiles = [
    { sr: "1", productId: "3349666007921", store: "0888", sales: "3000", avgSales: "2000", inventory: "3888" },
    { sr: "2", productId: "3349666007921", store: "0432", sales: "500", avgSales: "800", inventory: "4555" },
    { sr: "3", productId: "3349666007921", store: "0008", sales: "6000", avgSales: "3000", inventory: "6000" },
    { sr: "4", productId: "3349666007921", store: "0568", sales: "200", avgSales: "1000", inventory: "4000" },
    { sr: "5", productId: "3349666007921", store: "0698", sales: "12222", avgSales: "5000", inventory: "15000" },
  ];

  const fileData = files || sampleFiles;

  return (
    <div className="w-full bg-white p-4">
      <h2 className="text-[14px] lg:text-[20px] font-medium font-[poppins] mb-6 text-[#242424]">
        Sales-Inventory
      </h2>

      <div className="border rounded-lg overflow-hidden p-4">
        <table className="w-full table-fixed border-separate border-spacing-y-4">
          <thead>
            <tr className="bg-[#F4F4F4] font-[poppins] p-4">
              <th className="font-medium font-[poppins] leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px] rounded-l-xl">
                Sr
              </th>
              <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px] ">
                Product ID
              </th>
              <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px] ">
                Store
              </th>
              <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px] ">
                Sales
              </th>
              <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px] ">
                Avg. Sales
              </th>
              <th className="font-[poppins] font-medium leading-[100%] tracking-[0%] text-center text-[#242424] py-4 text-[18.01px]  rounded-r-xl">
                Inventory
              </th>
            </tr>
          </thead>

          <tbody>
            {fileData.map((file, index) => (
              <tr key={index} className="font-[poppins]">
                <td colSpan={6}>
                  <div className="w-full bg-white border border-[#EDECE9] rounded-[8px] grid grid-cols-6 text-center">
                    <div className="py-[14.5px] text-[#242424] rounded-l-[8px] font-[poppins] font-normal text-[18px] leading-[100%] tracking-[0%]">
                      {file.sr}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                      {file.productId}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                      {file.store}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                      {file.sales}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424]">
                      {file.avgSales}
                    </div>
                    <div className="py-[14.5px] text-[18px] font-[poppins] leading-[100%] tracking-[0%] font-normal text-[#242424] rounded-r-[8px]">
                      {file.inventory}
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
}
