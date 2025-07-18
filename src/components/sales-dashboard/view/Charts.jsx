import NumberChart from "./chart/NumberChart";
import SalesGraphChart from "./chart/SalesGraphChart";

const Charts = () => {
  return (
    <div className="mb-4 w-full px-4 grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch">
      <div className="h-full">
        <NumberChart />
      </div>
      <div className="h-full">
        <SalesGraphChart />
      </div>
    </div>
  );
};

export default Charts;
