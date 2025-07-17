"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".sidebar") &&
        !e.target.closest(".sidebar-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F9F9F9]">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-1">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main
          className={`flex-1 custom-scrollbar overflow-y-auto transition-all duration-300 mt-[80px] ${
            isSidebarOpen ? "ml-[270px]" : "ml-0"
          } lg:ml-[341px]`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
