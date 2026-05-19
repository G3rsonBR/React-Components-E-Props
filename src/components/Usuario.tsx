interface UsuarioProps {
  nome: string
  idade: number
}

function Usuario({ nome, idade }: UsuarioProps) {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
    </div>
  )
}

export default Usuario
