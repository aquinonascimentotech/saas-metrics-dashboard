# 📊 SaaS Metrics Dashboard

Um dashboard profissional de métricas SaaS desenvolvido com React, TypeScript e Recharts. Este projeto demonstra habilidades em desenvolvimento front-end, visualização de dados e compreensão de métricas de negócio essenciais para empresas SaaS.

![Dashboard Preview](https://img.shields.io/badge/Status-Complete-success)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3+-38bdf8)

## 🎯 Sobre o Projeto

Este dashboard foi criado para demonstrar:
- ✅ Compreensão de métricas cruciais de SaaS (MRR, Churn, CAC, LTV)
- ✅ Habilidades em visualização de dados com gráficos interativos
- ✅ Design profissional e responsivo
- ✅ Código limpo e bem organizado em TypeScript
- ✅ Uso de dados mockados realistas

## 🚀 Tecnologias Utilizadas

- **React 18+** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool moderna e rápida
- **Recharts** - Biblioteca de gráficos para React
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos e leves

## 📈 Métricas Implementadas

### KPIs Principais
- **MRR (Monthly Recurring Revenue)** - Receita recorrente mensal
- **Usuários Ativos** - Base de usuários crescendo
- **Churn Rate** - Taxa de cancelamento (quanto menor, melhor)
- **Novos Clientes** - Aquisição mensal de clientes

### Gráficos Detalhados
- 📊 Crescimento de MRR ao longo do tempo
- 💰 Receita total acumulada
- 📉 Evolução da taxa de Churn
- 👥 Usuários ativos mensais
- ➕ Novos clientes por mês

### Insights de Negócio
- Crescimento de 208% no MRR em 12 meses
- Redução de Churn de 5.2% para 2.2%
- Aumento de 400% na aquisição de clientes

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/aquinonascimentotech/saas-metrics-dashboard.git
cd saas-metrics-dashboard
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
saas-metrics-dashboard/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Card.tsx       # Sistema de cards base
│   │   ├── MetricCard.tsx # Cards de KPIs
│   │   └── ChartCard.tsx  # Cards com gráficos
│   ├── data/              # Dados mockados
│   │   └── mockData.ts    # Métricas SaaS realistas
│   ├── lib/               # Utilitários
│   │   └── utils.ts       # Funções auxiliares
│   ├── App.tsx            # Componente principal
│   └── index.css          # Estilos globais
├── package.json
└── README.md
```

## 💡 Destaques Técnicos

### Componentização
- Componentes reutilizáveis e bem tipados
- Separação clara de responsabilidades
- Props interfaces bem definidas

### Design Responsivo
- Layout adaptável para mobile, tablet e desktop
- Grid system flexível
- Suporte a tema claro e escuro

### Visualização de Dados
- Gráficos interativos com tooltips
- Múltiplos tipos de visualização (linha, área, barras)
- Formatação profissional de valores monetários

### Boas Práticas
- TypeScript para type safety
- Código limpo e documentado
- Organização modular
- Performance otimizada

## 🎨 Features

- ✨ Design moderno e profissional
- 📱 Totalmente responsivo
- 🌙 Suporte a dark mode
- 📊 5 tipos diferentes de gráficos
- 🎯 KPIs com indicadores de tendência
- 💹 Animações suaves
- 🔄 Dados mockados realistas

## 📊 Dados Mockados

Os dados utilizados representam uma empresa SaaS em crescimento saudável:
- Período: Mai/2025 - Abr/2026 (12 meses)
- Crescimento consistente de MRR
- Redução progressiva de Churn
- Aumento acelerado de usuários ativos
- Padrões realistas de sazonalidade

## 🎯 Por Que Este Projeto se Destaca?

### Para Recrutadores Técnicos
- Demonstra conhecimento sólido de React e TypeScript
- Mostra habilidade em trabalhar com bibliotecas de visualização
- Código limpo e bem organizado

### Para Product Managers
- Entende métricas cruciais de SaaS
- Sabe quais KPIs importam para o negócio
- Capacidade de transformar dados em insights

### Para Startups SaaS
- Conhece o vocabulário do produto
- Entende growth e retenção
- Pensa além do código, considera o negócio

## 🔮 Próximas Melhorias

- [ ] Integração com API real
- [ ] Filtros de data personalizados
- [ ] Exportação de relatórios em PDF
- [ ] Comparação entre períodos
- [ ] Métricas adicionais (LTV, CAC, Payback)
- [ ] Dashboard de cohort analysis

## 👨‍💻 Autor

**Felipe Aquino Nascimento**
- GitHub: [@aquinonascimentotech](https://github.com/aquinonascimentotech)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como referência ou base para seus próprios projetos.

---

⭐ Se este projeto foi útil, considere dar uma estrela!

**Desenvolvido com 💙 para demonstrar habilidades em desenvolvimento full-stack e compreensão de métricas de negócio.**
