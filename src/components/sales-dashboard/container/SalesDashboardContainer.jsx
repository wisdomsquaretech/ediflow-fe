import React from 'react'
import SaleSummaryCards from '../view/SaleSummaryCards';
import { SaleDataTable } from '../view/SaleDataTable';

const SalesDashboardContainer = () => {
  return (
    <div>
      <SaleSummaryCards/>
      <SaleDataTable/>
    </div>
  )
}

export default SalesDashboardContainer;