interface BotaoCustomizadoProps {
  texto: string
  cor: string
  tamanho: "pequeno" | "medio" | "grande"
}

const tamanhos = {
  pequeno: { padding: "4px 12px", fontSize: 12 },
  medio: { padding: "8px 20px", fontSize: 16 },
  grande: { padding: "12px 32px", fontSize: 20 },
}

function BotaoCustomizado({ texto, cor, tamanho }: BotaoCustomizadoProps) {
  return (
    <button
      type="button"
      style={{
        backgroundColor: cor,
        color: "#fff",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        ...tamanhos[tamanho],
      }}
    >
      {texto}
    </button>
  )
}

export default BotaoCustomizado
