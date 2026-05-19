import Comentario from "./Comentario"

interface ListaComentariosProps {
  comentarios: { autor: string; mensagem: string }[]
}

function ListaComentarios({ comentarios }: ListaComentariosProps) {
  return (
    <div>
      {comentarios.map((c, i) => (
        <Comentario key={i} autor={c.autor} mensagem={c.mensagem} />
      ))}
    </div>
  )
}

export default ListaComentarios
