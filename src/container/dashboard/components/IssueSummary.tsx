import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define chart data type to match Chart.js expectations
interface ChartData {
  labels: string[];
  data: number[];
}

// Define component props interface
interface IssuesSummaryProps {
  data: ChartData;
}

const IssuesSummary: React.FC<IssuesSummaryProps> = ({ data }) => {
  // Format data for Chart.js
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Issues',
        data: data.data,
        backgroundColor: [
          '#4F46E5',
          '#7C3AED',
          '#9333EA',
          '#C084FC',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Issues Summary</h2>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-indigo-600">4</span>
          <span className="text-sm text-gray-500">Critical Issues</span>
        </div>
      </div>
      <div className="relative h-48">
        <Doughnut data={chartData} options={options} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.labels.map((label, index) => (
          <div key={label} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
            />
            <span className="text-sm text-gray-600 text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuesSummary;