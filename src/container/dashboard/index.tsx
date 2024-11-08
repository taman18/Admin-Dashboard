'use client';

import { consumptionData, filterReplacements, issuesSummaryData, users, userStats, usersPlanData } from '@/utils/mockData';
import { Stats } from './components/Stats';
import IssuesSummary from './components/IssueSummary';
import FilterReplacements from './components/FilterReplacements';
import UsersChart from './components/UsersChart';
import CustomerList from './components/CustomerLists';

interface CustomerDetailsPageProps {
    handleUserDetail(): void
}
const DashboardPage:React.FC<CustomerDetailsPageProps> = ({handleUserDetail}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div>
        <div className="flex justify-center items-center bg-[#1e3a8a] py-3 mb-6">
          <h1 className="text-2xl font-bold text-white">Admin DASHBOARD</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Stats stats={userStats} />
          <IssuesSummary data={issuesSummaryData} />
          <FilterReplacements data={filterReplacements} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <CustomerList users={users} handleUserDetail={handleUserDetail} />
          <UsersChart data={consumptionData} />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage