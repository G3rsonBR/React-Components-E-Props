import CardProduto from "./CardProduto"

interface ListaProdutosProps {
  produtos: { nome: string; preco: number; descricao: string }[]
}

function ListaProdutos({ produtos }: ListaProdutosProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {produtos.map((p, i) => (
        <CardProduto key={i} nome={p.nome} preco={p.preco} descricao={p.descricao} />
      ))}
    </div>
  )
}

export default ListaProdutos
