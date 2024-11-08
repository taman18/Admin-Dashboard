export interface User {
    id: string;
    name: string;
    email: string;
    plan: string;
    status: 'active' | 'inactive';
  }
  
  export interface UserStats {
    total: number;
    previousTotal: number;
    percentageChange: number;
    active: number;
    inactive: number;
  }
  
  export interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string;
      borderColor?: string;
      fill?: boolean;
      tension?: number;
    }[];
  }