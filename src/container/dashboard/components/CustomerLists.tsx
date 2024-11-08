import React, { useState } from "react";

interface Customer {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: string;
}

interface CustomerListProps {
  users: Customer[];
  handleUserDetail(): void
}

export default function CustomerList({ users,handleUserDetail}: CustomerListProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filter, setFilter] = useState("all");

  // Filter and sort customers
  const filteredAndSortedCustomers = [...users]
    .filter((user) => {
      if (filter === "all") return true;
      return user.status === filter;
    })
    .sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

  const showUserInfo = (userData: Customer) => {
    console.log("-----", userData);
    handleUserDetail();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Customer List</h2>
        <div className="flex space-x-4">
          <select
            className="border rounded px-3 py-2 text-sm"
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            value={sortOrder}
          >
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
          </select>
          <select
            className="border rounded px-3 py-2 text-sm"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedCustomers.map((user) => (
              <tr
                key={user.id}
                className="cursor-pointer"
                onClick={() => showUserInfo(user)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.plan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
