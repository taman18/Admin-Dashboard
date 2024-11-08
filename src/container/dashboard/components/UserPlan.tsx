import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface UsersPlanProps {
  data: {
    active: number;
    inactive: number;
  };
}

export default function UsersPlan({ data }: UsersPlanProps) {
  const chartData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [data.active, data.inactive],
        backgroundColor: [
          '#4F46E5', // Active - Indigo
          '#E5E7EB', // Inactive - Gray
        ],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${percentage}%`;
          }
        }
      }
    },
  };

  // Calculate total users
  const totalUsers = data.active + data.inactive;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Users Plan</h2>
        <div className="text-sm text-gray-500">
          Total Users: {totalUsers.toLocaleString()}
        </div>
      </div>
      <div className="h-64 relative">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}