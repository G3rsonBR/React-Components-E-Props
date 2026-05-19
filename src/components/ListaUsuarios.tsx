import Usuario from "./Usuario"

interface ListaUsuariosProps {
  usuarios: { nome: string; idade: number }[]
}

function ListaUsuarios({ usuarios }: ListaUsuariosProps) {
  return (
    <div>
      {usuarios.map((u, i) => (
        <Usuario key={i} nome={u.nome} idade={u.idade} />
      ))}
    </div>
  )
}

export default ListaUsuarios
