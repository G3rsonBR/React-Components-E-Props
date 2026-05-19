# components-props-react

Projeto de treino em React + TypeScript + Vite focado em **Componentes e Props**.

## Sobre

30 exercícios progressivos que cobrem:

- Props básicas (string, number, boolean)
- Renderização condicional
- Listas e composição
- `props.children`
- Estilos dinâmicos via props
- Componentes reutilizáveis e acoplamento

## Como usar

```bash
pnpm dev       # servidor dev com HMR
pnpm build     # type-check + build produção
pnpm lint      # ESLint
```

## Estrutura

```
src/
├── main.tsx              # entrypoint
├── App.tsx               # raiz com sidebar + área de visualização
├── App.css / index.css   # estilos globais
└── components/           # 34 componentes (30 exercícios + sub-componentes)
    ├── Sidebar.tsx       # navegação lateral em acordeão
    ├── Header.tsx        # sub-componente de Layout
    ├── Main.tsx          # sub-componente de Layout
    ├── Footer.tsx        # sub-componente de Layout
    └── ...               # demais componentes
```

## Navegação

A `Sidebar` organiza os 30 componentes em 3 grupos colapsáveis:

- **Básico (1-10)** — props simples
- **Intermediário (11-20)** — listas, condicionais, composição
- **Avançado (21-30)** — estilos dinâmicos, modal, formulário, página dinâmica

## Créditos

Projeto desenvolvido com assistência do **OpenCode (big-pickle)**, que auxiliou na criação, revisão e refatoração de todos os componentes e na estrutura de navegação.
