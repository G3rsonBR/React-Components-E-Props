interface Grupo {
  titulo: string
  itens: { id: string; label: string }[]
}

interface SidebarProps {
  grupos: Grupo[]
  selecionado: string
  grupoAberto: number | null
  onSelecionar: (id: string) => void
  onToggleGrupo: (indice: number) => void
}

function Sidebar({ grupos, selecionado, grupoAberto, onSelecionar, onToggleGrupo }: SidebarProps) {
  return (
    <nav
      style={{
        width: 220,
        minWidth: 220,
        height: "100vh",
        overflowY: "auto",
        borderRight: "1px solid var(--border-color)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          fontWeight: "bold",
          fontSize: 13,
          borderBottom: "1px solid var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        Componentes
      </div>
      {grupos.map((grupo, gi) => {
        const aberto = grupoAberto === gi
        const temItemAtivo = grupo.itens.some((i) => i.id === selecionado)

        return (
          <div key={gi}>
            <button
              type="button"
              onClick={() => onToggleGrupo(gi)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                textAlign: "left",
                padding: "10px 16px",
                border: "none",
                borderBottom: "1px solid var(--border-light)",
                background: temItemAtivo ? "var(--bg-group-active)" : "var(--bg-tertiary)",
                color: temItemAtivo ? "var(--text-active)" : "var(--text-secondary)",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              {grupo.titulo}
              <span
                style={{
                  fontSize: 10,
                  transition: "transform 0.2s",
                  transform: aberto ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                &#9660;
              </span>
            </button>
            {aberto && (
              <div>
                {grupo.itens.map((item) => {
                  const ativo = item.id === selecionado
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onSelecionar(item.id)}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 16px 8px 24px",
                        border: "none",
                        background: ativo
                          ? `linear-gradient(90deg, var(--accent) 3px, var(--bg-active) 0)`
                          : "transparent",
                        color: ativo ? "var(--text-active)" : "var(--text-primary)",
                        fontWeight: ativo ? 600 : 400,
                        cursor: "pointer",
                        fontSize: 14,
                      }}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default Sidebar
