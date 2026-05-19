interface PerfilProps {
  nome: string
  email: string
  foto: string
}

function Perfil({ nome, email, foto }: PerfilProps) {
  return (
    <div>
      <img src={foto} alt={nome} width={80} height={80} />
      <h3>{nome}</h3>
      <p>{email}</p>
    </div>
  )
}

export default Perfil
