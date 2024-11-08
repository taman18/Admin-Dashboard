import React from "react";
import CustomerWaterConsumption from "./components/CustomerWaterConsumption";
import CustomerDetails from "./components/CustomerDetails";
import FilterChangeDetails from "./components/FilterChangeDetails";
import CustomerTransactions from "./components/CustomerTransactions";
import PumpSwitch from "./components/PumpSwitch";
import ROData from "./components/ROData";

const CustomerDetailsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-900 text-white p-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <button className="bg-blue-700 px-4 py-2 rounded">Upload Logo</button>
        <h1 className="text-2xl font-bold text-center sm:text-left">
          Customer 1 Details
        </h1>
        <button className="bg-blue-700 px-4 py-2 rounded">Upload Logo</button>
      </header>

      <div className="p-8">
        {/* Responsive Grid: 1 column on small screens, 3 columns on medium and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Each component in its own grid cell */}
          <div>
            <CustomerWaterConsumption />
          </div>
          <CustomerDetails />
          <div className="flex flex-col gap-6">
            <FilterChangeDetails />
            <CustomerTransactions />
          </div>
          <ROData />
          <PumpSwitch />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
