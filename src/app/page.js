import { AllFileTable } from "@/components/layout/AllFileTable";
import FilesDashboard from "@/components/layout/FilesDashboard";

export default function Home() {
  return (
    <div className="">
    <FilesDashboard/>
    <AllFileTable/>
    </div>
  );
}
