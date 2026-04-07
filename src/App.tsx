import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { ChartCard } from './components/ChartCard';
import {
  kpiMetrics,
  mrrData,
  revenueData,
  churnData,
  activeUsersData,
  newCustomersData,
} from './data/mockData';
import { formatCurrency, formatNumber } from './lib/utils';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 animate-gradient">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-2.5 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SaaS Metrics Dashboard
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Visão geral de performance e crescimento
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  by <span className="font-semibold text-blue-600 dark:text-blue-400">Aquino Nascimento Tech</span>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Última atualização:</span>
              <span className="font-semibold text-gray-900 dark:text-white">Abr 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard
            title="MRR - Monthly Recurring Revenue"
            description="Receita recorrente mensal ao longo do tempo"
            data={mrrData}
            type="area"
            color="#3b82f6"
            valueFormatter={(value) => formatCurrency(value / 1000) + 'k'}
          />
          <ChartCard
            title="Receita Total Acumulada"
            description="Crescimento da receita total"
            data={revenueData}
            type="area"
            color="#10b981"
            valueFormatter={(value) => formatCurrency(value / 1000) + 'k'}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard
            title="Taxa de Churn (%)"
            description="Percentual de cancelamentos mensais"
            data={churnData}
            type="line"
            color="#ef4444"
            valueFormatter={(value) => `${value.toFixed(1)}%`}
          />
          <ChartCard
            title="Usuários Ativos Mensais"
            description="Crescimento da base de usuários"
            data={activeUsersData}
            type="bar"
            color="#8b5cf6"
            valueFormatter={formatNumber}
          />
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 gap-6">
          <ChartCard
            title="Novos Clientes por Mês"
            description="Aquisição de novos clientes ao longo do tempo"
            data={newCustomersData}
            type="bar"
            color="#f59e0b"
            valueFormatter={formatNumber}
          />
        </div>

        {/* Insights Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            📊 Principais Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Crescimento Sólido
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  MRR cresceu 208% nos últimos 12 meses, com tendência
                  consistente de crescimento.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-2">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Retenção Excelente
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Churn rate caiu de 5.2% para 2.2%, indicando maior satisfação
                  dos clientes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-2">
                <DollarSign className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Aquisição Acelerada
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Novos clientes aumentaram 400% no período, com CAC otimizado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 pb-8">
          <p>
            Dashboard desenvolvido com React, TypeScript e Recharts |{' '}
            <a
              href="https://github.com/aquinonascimentotech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              @aquinonascimentotech
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
