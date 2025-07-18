import AllFilesGraphChart from "./charts/AllFilesGraphChart";
import FileDistributionChart from "./charts/FileDistributionChart";

const Charts = () => {
  return (
    <div className="w-full px-4 grid grid-cols-1 lg:grid-cols-[436px_1fr] gap-4">
      <div>
        <FileDistributionChart />
      </div>
      <div>
        <AllFilesGraphChart />
      </div>
    </div>
  );
};

export default Charts;
