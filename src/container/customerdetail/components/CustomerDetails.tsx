import React from 'react';

const CustomerDetails: React.FC = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h2 className="font-semibold text-md text-blue-900 mb-4">Customer Details</h2>
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 text-blue-900 font-semibold">Information</th>
            <th className="px-4 py-2 border-b border-gray-300 text-blue-900 font-semibold">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Name</td>
            <td className="px-4 py-2 border-b border-gray-300">data</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Phone Number</td>
            <td className="px-4 py-2 border-b border-gray-300">data</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Email</td>
            <td className="px-4 py-2 border-b border-gray-300">data</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Address</td>
            <td className="px-4 py-2 border-b border-gray-300">data</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Current Plan</td>
            <td className="px-4 py-2">data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDetails;
