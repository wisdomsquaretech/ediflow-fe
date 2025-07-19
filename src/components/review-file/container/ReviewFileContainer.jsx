"use client";

import { useState } from "react";
import ActionHeader from "../view/ActionHeader";
import DataTable from "../view/DataTable";

const ReviewFileContainer = () => {
  const [isRejected, setIsRejected] = useState(false);

  return (
    <div className="p-4">
      <ActionHeader isRejected={isRejected} setIsRejected={setIsRejected} />
      <DataTable isRejected={isRejected} />
    </div>
  );
};

export default ReviewFileContainer;
