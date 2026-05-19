interface CardSimplesProps {
  titulo: string
  descricao: string
}

function CardSimples({ titulo, descricao }: CardSimplesProps) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  )
}

export default CardSimples
