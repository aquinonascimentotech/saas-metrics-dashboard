// Dados mockados realistas para um SaaS em crescimento

export interface MetricData {
  date: string;
  value: number;
}

export interface KPIMetric {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  trend: 'up' | 'down';
}

// MRR (Monthly Recurring Revenue) - Últimos 12 meses
export const mrrData: MetricData[] = [
  { date: 'Mai/25', value: 45000 },
  { date: 'Jun/25', value: 52000 },
  { date: 'Jul/25', value: 58500 },
  { date: 'Ago/25', value: 63200 },
  { date: 'Set/25', value: 71800 },
  { date: 'Out/25', value: 78900 },
  { date: 'Nov/25', value: 85600 },
  { date: 'Dez/25', value: 94200 },
  { date: 'Jan/26', value: 103500 },
  { date: 'Fev/26', value: 112800 },
  { date: 'Mar/26', value: 125400 },
  { date: 'Abr/26', value: 138900 },
];

// Receita total acumulada
export const revenueData: MetricData[] = [
  { date: 'Mai/25', value: 45000 },
  { date: 'Jun/25', value: 97000 },
  { date: 'Jul/25', value: 155500 },
  { date: 'Ago/25', value: 218700 },
  { date: 'Set/25', value: 290500 },
  { date: 'Out/25', value: 369400 },
  { date: 'Nov/25', value: 455000 },
  { date: 'Dez/25', value: 549200 },
  { date: 'Jan/26', value: 652700 },
  { date: 'Fev/26', value: 765500 },
  { date: 'Mar/26', value: 890900 },
  { date: 'Abr/26', value: 1029800 },
];

// Churn Rate (%) - Quanto menor, melhor
export const churnData: MetricData[] = [
  { date: 'Mai/25', value: 5.2 },
  { date: 'Jun/25', value: 4.8 },
  { date: 'Jul/25', value: 4.5 },
  { date: 'Ago/25', value: 4.1 },
  { date: 'Set/25', value: 3.8 },
  { date: 'Out/25', value: 3.5 },
  { date: 'Nov/25', value: 3.2 },
  { date: 'Dez/25', value: 3.0 },
  { date: 'Jan/26', value: 2.8 },
  { date: 'Fev/26', value: 2.6 },
  { date: 'Mar/26', value: 2.4 },
  { date: 'Abr/26', value: 2.2 },
];

// Usuários ativos mensais
export const activeUsersData: MetricData[] = [
  { date: 'Mai/25', value: 1250 },
  { date: 'Jun/25', value: 1420 },
  { date: 'Jul/25', value: 1680 },
  { date: 'Ago/25', value: 1950 },
  { date: 'Set/25', value: 2340 },
  { date: 'Out/25', value: 2680 },
  { date: 'Nov/25', value: 3120 },
  { date: 'Dez/25', value: 3590 },
  { date: 'Jan/26', value: 4150 },
  { date: 'Fev/26', value: 4720 },
  { date: 'Mar/26', value: 5380 },
  { date: 'Abr/26', value: 6050 },
];

// Novos clientes por mês
export const newCustomersData: MetricData[] = [
  { date: 'Mai/25', value: 45 },
  { date: 'Jun/25', value: 62 },
  { date: 'Jul/25', value: 78 },
  { date: 'Ago/25', value: 85 },
  { date: 'Set/25', value: 102 },
  { date: 'Out/25', value: 118 },
  { date: 'Nov/25', value: 135 },
  { date: 'Dez/25', value: 152 },
  { date: 'Jan/26', value: 168 },
  { date: 'Fev/26', value: 185 },
  { date: 'Mar/26', value: 208 },
  { date: 'Abr/26', value: 225 },
];

// KPIs principais (dados do mês atual)
export const kpiMetrics: KPIMetric[] = [
  {
    title: 'MRR',
    value: 'R$ 138.9k',
    change: 10.8,
    changeLabel: 'vs mês anterior',
    trend: 'up',
  },
  {
    title: 'Usuários Ativos',
    value: '6,050',
    change: 12.5,
    changeLabel: 'vs mês anterior',
    trend: 'up',
  },
  {
    title: 'Churn Rate',
    value: '2.2%',
    change: -8.3,
    changeLabel: 'vs mês anterior',
    trend: 'down', // Down é bom para churn!
  },
  {
    title: 'Novos Clientes',
    value: '225',
    change: 8.2,
    changeLabel: 'vs mês anterior',
    trend: 'up',
  },
];

// Distribuição de planos
export const planDistribution = [
  { name: 'Starter', users: 2420, revenue: 36300, color: '#3b82f6' },
  { name: 'Professional', users: 2310, revenue: 69300, color: '#8b5cf6' },
  { name: 'Enterprise', users: 1320, revenue: 66000, color: '#06b6d4' },
];

// Métricas de engajamento
export const engagementMetrics = {
  dailyActiveUsers: 4850,
  weeklyActiveUsers: 5680,
  monthlyActiveUsers: 6050,
  averageSessionTime: '24min',
  featureAdoptionRate: 68.5,
};
