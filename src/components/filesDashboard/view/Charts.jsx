import FileDistributionChart from "./charts/FileDistributionChart";

const Charts = () => {
  return (
    <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <FileDistributionChart />
      {/* <AllFilesGraphChart /> */}
    </div>
  );
};

export default Charts;
