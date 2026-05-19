interface CardComImagemProps {
  imagem: string
  titulo: string
  texto: string
}

function CardComImagem({ imagem, titulo, texto }: CardComImagemProps) {
  return (
    <div style={{ border: "1px solid var(--border-color)", borderRadius: 8, padding: 16, margin: 8, maxWidth: 300, background: "var(--card-bg)" }}>
      <img src={imagem} alt={titulo} width="100%" />
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  )
}

export default CardComImagem
