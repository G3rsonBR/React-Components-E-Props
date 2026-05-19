interface AlertaProps {
  tipo: "sucesso" | "erro" | "aviso"
  mensagem: string
}

const cores = {
  sucesso: { bg: "#d4edda", border: "#c3e6cb", color: "#155724" },
  erro: { bg: "#f8d7da", border: "#f5c6cb", color: "#721c24" },
  aviso: { bg: "#fff3cd", border: "#ffeeba", color: "#856404" },
}

function Alerta({ tipo, mensagem }: AlertaProps) {
  const estilo = cores[tipo]

  return (
    <div
      style={{
        backgroundColor: estilo.bg,
        border: `1px solid ${estilo.border}`,
        color: estilo.color,
        borderRadius: 4,
        padding: "12px 16px",
        margin: "8px 0",
      }}
    >
      <strong>{tipo.toUpperCase()}:</strong> {mensagem}
    </div>
  )
}

export default Alerta
