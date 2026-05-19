interface Campo {
  nome: string
  tipo: string
  placeholder?: string
}

interface FormularioProps {
  titulo: string
  campos: Campo[]
}

function Formulario({ titulo, campos }: FormularioProps) {
  return (
    <div>
      <h2>{titulo}</h2>
      <form>
        {campos.map((campo, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <label style={{ display: "block", marginBottom: 4 }}>{campo.nome}</label>
            <input
              type={campo.tipo}
              placeholder={campo.placeholder}
              style={{ padding: "6px 10px", width: "100%", maxWidth: 300 }}
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default Formulario
