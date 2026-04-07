#!/bin/bash

echo "=============================================="
echo "  Inicializando Git para SaaS Metrics Dashboard"
echo "=============================================="
echo ""

echo "[1/4] Inicializando repositório Git..."
git init

echo ""
echo "[2/4] Adicionando arquivos..."
git add .

echo ""
echo "[3/4] Criando commit inicial..."
git commit -m "feat: Initial commit - SaaS Metrics Dashboard

- Dashboard completo com métricas SaaS
- 4 KPIs principais (MRR, Usuários, Churn, Novos Clientes)
- 5 gráficos interativos com Recharts
- Design responsivo com Tailwind CSS
- Dados mockados realísticos de 12 meses
- Documentação completa
- Suporte a tema claro e escuro

Stack: React 18, TypeScript, Vite, Recharts, Tailwind CSS"

echo ""
echo "[4/4] Conectando com GitHub..."
echo ""
echo "Execute os seguintes comandos para conectar ao GitHub:"
echo ""
echo "  git remote add origin https://github.com/aquinonascimentotech/saas-metrics-dashboard.git"
echo "  git branch -M main"
echo "  git push -u origin main"
echo ""
echo "=============================================="
echo "  Git inicializado com sucesso!"
echo "=============================================="
echo ""
echo "Próximos passos:"
echo "  1. Crie um repositório no GitHub chamado 'saas-metrics-dashboard'"
echo "  2. Execute os comandos acima para conectar"
echo "  3. Seu projeto estará no GitHub!"
echo ""
