interface SaudacaoProps {
  nome: string
}

function Saudacao({ nome }: SaudacaoProps) {
  return <p>Olá, {nome}!</p>
}

export default Saudacao
