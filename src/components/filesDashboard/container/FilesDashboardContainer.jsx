import React from "react";
import SummaryCards from "../view/SummaryCards";
import DataTable from "../view/DataTable";
import Charts from "../view/Charts";

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
