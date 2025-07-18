import AllFilesGraphChart from "./charts/AllFilesGraphChart";
import FileDistributionChart from "./charts/FileDistributionChart";

const Charts = () => {
  return (
    <div className="w-full px-4 grid grid-cols-1 xl:grid-cols-[436px_1fr] gap-4 items-stretch">
      <div className="h-full">
        <FileDistributionChart />
      </div>
      <div className="h-full">
        <AllFilesGraphChart />
      </div>
    </div>
  );
};

export default Charts;
