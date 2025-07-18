import React from "react";
import SaleSummaryCards from "../view/SaleSummaryCards";
import Charts from "../view/Charts";
import { SaleDataTable } from "../view/SaleDataTable";

const SalesDashboardContainer = () => {
  return (
    <div>
      <SaleSummaryCards />
      <Charts />
      <SaleDataTable />
    </div>
  );
};

export default SalesDashboardContainer;
