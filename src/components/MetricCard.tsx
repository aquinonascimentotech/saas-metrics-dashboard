import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { formatPercentage } from '../lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  trend: 'up' | 'down';
}

export function MetricCard({ title, value, change, changeLabel, trend }: MetricCardProps) {
  const isPositive = trend === 'up' ? change > 0 : change < 0;
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;

  const gradients = {
    up: isPositive ? 'from-green-500 to-emerald-500' : 'from-red-500 to-rose-500',
    down: isPositive ? 'from-red-500 to-rose-500' : 'from-green-500 to-emerald-500'
  };

  return (
    <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up glass-effect border-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-semibold text-gray-600 dark:text-gray-300">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg bg-gradient-to-br ${gradients[trend]} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
          <TrendIcon className="h-4 w-4 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-black bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
              isPositive
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}
          >
            {formatPercentage(change)}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
            {changeLabel}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
