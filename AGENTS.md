# components-props-react

React + TypeScript + Vite training project focused on Components and Props.

## Commands

- `pnpm dev` — start Vite dev server with HMR
- `pnpm build` — runs `tsc -b` (type-check all tsconfig refs) then `vite build`
- `pnpm lint` — ESLint on all `.ts`/`.tsx` files
- `pnpm preview` — serve production build locally

Always use `pnpm`, never `npm`.

## Project structure

- `src/main.tsx` — app entrypoint (renders `<App />` into `#root`)
- `src/App.tsx` — root component (sidebar + conditional demo area)
- `src/App.css`, `src/index.css` — global styles
- All components go in `src/components/` (one file per component or per logical group)

## Conventions

- All components are **default-exported** function components
- Props are typed using inline `interface` or `type` in the same file
- No external UI libraries; plain JSX + CSS
- No routing; single-page SPA
- No test framework configured

## Sidebar & navigation

- `Sidebar` in `src/components/Sidebar.tsx` renders a collapsible accordion
- Receives `grupos`, `selecionado`, `grupoAberto`, `onSelecionar`, `onToggleGrupo`
- Only one group open at a time (accordion behavior)
- Active component gets a left blue border + blue background
- Active group header gets `#dbeafe` background

## App.tsx architecture

- `grupos` constant defines 3 groups: Básico (1-10), Intermediário (11-20), Avançado (21-30)
- `renderizarComponente()` switch renders the demo for the selected component ID
- `handleSelecionar` auto-expands the group of the clicked component
- `handleToggleGrupo` toggles or closes the group (null = all closed)

## 30 components

Components 1-30 live in `src/components/`. Sub-components (Header, Main, Footer)
are shared by Layout (ex. 20) and PaginaDinamica (ex. 30).
