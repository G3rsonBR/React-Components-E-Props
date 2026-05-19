interface PostProps {
  titulo: string
  autor: string
  conteudo: string
}

function Post({ titulo, autor, conteudo }: PostProps) {
  return (
    <article>
      <h3>{titulo}</h3>
      <p><small>Por {autor}</small></p>
      <p>{conteudo}</p>
    </article>
  )
}

export default Post
