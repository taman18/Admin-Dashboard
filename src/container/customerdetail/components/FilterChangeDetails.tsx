import React from 'react';

const FilterChangeDetails: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg shadow-sm h-full flex flex-col mr-3">
      {/* Upper Section: Filter Change Details */}
      <div className="border p-4 rounded-lg shadow-sm flex-grow">
        <h2 className="text-indigo-800 font-semibold text-lg mb-2">Filter Change Details</h2>
        <p className="text-4xl font-bold">240 Ltr</p>
        <p className="text-sm text-gray-500">
          vs last <span className="font-semibold">1200</span>{' '}
          <span className="text-red-600">(-80% ▼)</span>
        </p>
        
        {/* Progress Bars */}
        <div className="mt-4">
          <p className="text-xs text-gray-600">Current Filter Usage</p>
          <div className="w-full h-2 bg-gray-200 rounded mt-1">
            <div className="h-2 bg-indigo-700 w-3/4 rounded"></div>
          </div>
          <p className="text-xs text-gray-600 mt-2">Last Filter Usage</p>
          <div className="w-full h-2 bg-gray-200 rounded mt-1">
            <div className="h-2 bg-indigo-400 w-1/2 rounded"></div>
          </div>
        </div>
      </div>

      {/* Lower Section: Forecast */}
      <div className="border p-4 rounded-lg shadow-sm mt-4">
        <h3 className="text-indigo-800 font-semibold text-lg">Next Filter Replacement Forecast</h3>
        <p className="text-sm text-gray-600">Date based on the past usage data</p>
      </div>
    </div>
  );
};

export default FilterChangeDetails;
