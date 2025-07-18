import React from "react";
import SummaryCards from "../view/SummaryCards";
import Charts from "../view/Charts";
import { DataTable } from "../view/DataTable";

const FilesDashboardContainer = () => {
  return (
    <>
      <SummaryCards />
      <Charts />
      <DataTable />
    </>
  );
};

export default FilesDashboardContainer;
