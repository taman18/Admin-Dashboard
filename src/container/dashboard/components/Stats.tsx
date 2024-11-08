import { usersPlanData } from "@/utils/mockData";
import { UserStats } from "../interface/dashboard.type";
import UsersPlan from "./UserPlan";

export function Stats({ stats }: { stats: UserStats }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-900">Number of Users</h2>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-900">
            {(stats.total / 1000).toFixed(1)}K
          </span>
          <span className="flex items-center text-sm text-green-500">
            ↑ {stats.percentageChange}%
          </span>
        </div>
        <div className="text-sm text-gray-500">
          vs Last Month {(stats.previousTotal / 1000).toFixed(1)}K
        </div>
        <div className="space-y-2 mt-4">
          <div className="h-2 bg-indigo-600 rounded" 
               style={{ width: `${(stats.active / stats.total) * 100}%` }} />
          <div className="h-2 bg-indigo-300 rounded" 
               style={{ width: `${(stats.inactive / stats.total) * 100}%` }} />
        </div>
      </div>
      <div className="mt-4">
      <UsersPlan data={usersPlanData} />
      </div>
    </div>
  );
}