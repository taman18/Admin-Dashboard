"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CustomerWaterConsumption: React.FC = () => {
  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Water Consumption',
        data: [20, 40, 10, 60, 35, 25, 15],
        backgroundColor: '#3b82f6',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide horizontal grid lines
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 h-full w-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-md text-blue-900">Customer 1 Weekly Water Consumption</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded text-blue-900 font-semibold">Title 1</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-600">Title 2</button>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="mr-8">
          <p className="text-blue-600 font-semibold">Metric 1</p>
          <p className="text-2xl font-bold">1234 <span className="text-sm text-gray-500 font-normal">| 12% <span className="text-green-500">▲</span></span></p>
        </div>
        <div>
          <p className="text-purple-600 font-semibold">Metric 2</p>
          <p className="text-2xl font-bold">1234 <span className="text-sm text-gray-500 font-normal">| 12% <span className="text-green-500">▲</span></span></p>
        </div>
      </div>
      <div className="h-48 w-full">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CustomerWaterConsumption;
