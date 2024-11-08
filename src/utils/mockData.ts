export const userStats = {
    total: 25200,
    previousTotal: 11600,
    percentageChange: 10,
    active: 18900,
    inactive: 6300
  };
  
  export const issuesSummaryData = {
    labels: ['Filter Repl.', 'Flag', 'Plan Inact.', 'RO Offline'],
      data: [25, 25, 25, 25],
  };
  
  export const filterReplacements = {
    labels: ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22'],
    datasets: [{
      label: 'Filter Replacements',
      data: [30, 40, 15, 58, 40, 20],
      backgroundColor: '#4F46E5',
    }]
  };
  
  export const consumptionData = {
    labels: ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22'],
    datasets: [
      {
        label: 'Total Water Consumption',
        data: [30, 40, 60, 45, 15, 25],
        borderColor: '#10B981',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Users',
        data: [50, 25, 40, 35, 55, 60],
        borderColor: '#4F46E5',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Per Capita Consumption',
        data: [25, 20, 50, 20, 15, 30],
        borderColor: '#8B5CF6',
        tension: 0.4,
        fill: false
      }
    ]
  };
  
  export const users = [
    { id: '1', name: 'User 1', email: 'user1@example.com', plan: 'Premium', status: 'active' },
    { id: '2', name: 'User 2', email: 'user2@example.com', plan: 'Basic', status: 'active' },
    { id: '3', name: 'User 3', email: 'user3@example.com', plan: 'Premium', status: 'inactive' },
    { id: '4', name: 'User 4', email: 'user4@example.com', plan: 'Basic', status: 'active' },
    { id: '5', name: 'User 5', email: 'user5@example.com', plan: 'Premium', status: 'active' }
  ];

export  const usersPlanData = {
    active: 18000,
    inactive: 7000,
  };