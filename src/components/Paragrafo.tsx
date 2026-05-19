interface ParagrafoProps {
  conteudo: string
}

function Paragrafo({ conteudo }: ParagrafoProps) {
  return <p>{conteudo}</p>
}

export default Paragrafo
