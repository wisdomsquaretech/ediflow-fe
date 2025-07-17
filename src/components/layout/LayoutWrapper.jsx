import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F9F9F9]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 custom-scrollbar overflow-y-auto transition-all duration-300 lg:ml-[341px] mt-[80px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
