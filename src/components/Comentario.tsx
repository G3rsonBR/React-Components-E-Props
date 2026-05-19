interface ComentarioProps {
  autor: string
  mensagem: string
}

function Comentario({ autor, mensagem }: ComentarioProps) {
  return (
    <div>
      <strong>{autor}</strong>
      <p>{mensagem}</p>
    </div>
  )
}

export default Comentario
