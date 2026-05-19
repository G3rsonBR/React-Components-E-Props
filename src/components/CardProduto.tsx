interface CardProdutoProps {
  nome: string
  preco: number
  descricao: string
}

function CardProduto({ nome, preco, descricao }: CardProdutoProps) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, margin: 8 }}>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p><strong>R${preco.toFixed(2)}</strong></p>
    </div>
  )
}

export default CardProduto
