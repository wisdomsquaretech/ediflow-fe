// import React from "react";

// const salesData = [
//   { id: 1, productId: "3349666007921", store: "0888", sales: 3000, avgSales: 2000, inventory: 3888 },
//   { id: 2, productId: "3349666007921", store: "0432", sales: 500, avgSales: 800, inventory: 4555 },
//   { id: 3, productId: "3349666007921", store: "0008", sales: 6000, avgSales: 3000, inventory: 6000 },
//   { id: 4, productId: "3349666007921", store: "0568", sales: 200, avgSales: 1000, inventory: 4000 },
//   { id: 5, productId: "3349666007921", store: "0698", sales: 12222, avgSales: 5000, inventory: 15000 },
// ];

// const SalesDataTable = () => {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow-sm">
//       <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales-Inventory</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full border-separate border-spacing-y-2">
//           <thead>
//             <tr className="bg-[#F7F7F7] text-left text-sm text-gray-600 font-medium flex justify-between w-full h-[59.01px] rounded-[8px] border-[0.5px] px-[16.01px] py-[12px] opacity-100">
//               <th className="px-4 py-2 rounded-l-xl font-poppins font-medium text-[18.01px] leading-[100%] tracking-[0] text-center">Sr</th>
//               <th className="px-4 py-2 font-poppins font-medium text-[18.01px] leading-[100%] tracking-[0] text-center">Product ID</th>
//               <th className="px-4 py-2 font-poppins font-medium text-[18.01px] leading-[100%] tracking-[0] text-center">Store</th>
//               <th className="px-4 py-2 font-poppins font-medium text-[18.01px] leading-[100%] tracking-[0] text-center">Sales</th>
//               <th className="px-4 py-2 font-poppins font-medium text-[18.01px] leading-[100%] tracking-[0] text-center">Avg. Sales</th>
//               <th className="px-4 py-2 font-poppins font-medium text-[18.01px] leading-[100%] tracking-[0] text-center rounded-r-xl">Inventory</th>
//             </tr>
//           </thead>
//           <tbody>
//             {salesData.map((item, index) => (
//               <tr
//                 key={item.id}
//                 className="bg-white text-sm text-gray-800 rounded-xl shadow-sm"
//               >
//                 <td className="px-4 py-2">{index + 1}</td>
//                 <td className="px-4 py-2">{item.productId}</td>
//                 <td className="px-4 py-2">{item.store}</td>
//                 <td className="px-4 py-2">{item.sales}</td>
//                 <td className="px-4 py-2">{item.avgSales}</td>
//                 <td className="px-4 py-2">{item.inventory}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SalesDataTable;
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="w-full bg-white p-6">
      <h2 className="text-[14px] lg:text-[20px] font-semibold mb-6 text-gray-900">
        Sales-Inventory
      </h2>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#EDECE9] hover:bg-[#EDECE9]">
              <TableHead className="font-medium text-[#242424] py-4 text-[18px] text-center">Sr</TableHead>
              <TableHead className="font-medium text-[#242424] py-4 text-[18px] text-center">Product ID</TableHead>
              <TableHead className="font-medium text-[#242424] py-4 text-[18px] text-center">Store</TableHead>
              <TableHead className="font-medium text-[#242424] py-4 text-[18px] text-center">Sales</TableHead>
              <TableHead className="font-medium text-[#242424] py-4 text-[18px] text-center">Avg. Sales</TableHead>
              <TableHead className="font-medium text-[#242424] py-4 text-[18px] text-center">Inventory</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fileData.map((file, index) => (
              <TableRow key={index} className="border-b border-[#E5E5E5]">
                <TableCell className="py-4 text-[18px] text-[#242424] text-center">{file.sr}</TableCell>
                <TableCell className="py-4 text-[18px] text-[#242424] text-center">{file.productId}</TableCell>
                <TableCell className="py-4 text-[18px] text-[#242424] text-center">{file.store}</TableCell>
                <TableCell className="py-4 text-[18px] text-[#242424] text-center">{file.sales}</TableCell>
                <TableCell className="py-4 text-[18px] text-[#242424] text-center">{file.avgSales}</TableCell>
                <TableCell className="py-4 text-[18px] text-[#242424] text-center">{file.inventory}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}