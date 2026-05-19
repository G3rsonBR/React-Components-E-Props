interface ProdutoProps {
  nome: string
  preco: number
}

function Produto({ nome, preco }: ProdutoProps) {
  return (
    <div>
      <p>{nome} - R${preco.toFixed(2)}</p>
    </div>
  )
}

export default Produto
