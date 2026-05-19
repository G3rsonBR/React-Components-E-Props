interface CardProdutoProps {
  nome: string
  preco: number
  descricao: string
}

function CardProduto({ nome, preco, descricao }: CardProdutoProps) {
  return (
    <div style={{ border: "1px solid var(--border-color)", borderRadius: 8, padding: 16, margin: 8, background: "var(--card-bg)" }}>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p><strong>R${preco.toFixed(2)}</strong></p>
    </div>
  )
}

export default CardProduto
