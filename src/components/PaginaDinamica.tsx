import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

interface Secao {
  tipo: "titulo" | "paragrafo" | "imagem"
  conteudo: string
}

interface PaginaDinamicaProps {
  headerTitulo: string
  secoes: Secao[]
  footerTexto: string
}

function PaginaDinamica({ headerTitulo, secoes, footerTexto }: PaginaDinamicaProps) {
  return (
    <div>
      <Header titulo={headerTitulo} />
      <Main>
        {secoes.map((sec, i) => {
          switch (sec.tipo) {
            case "titulo":
              return <h2 key={i}>{sec.conteudo}</h2>
            case "paragrafo":
              return <p key={i}>{sec.conteudo}</p>
            case "imagem":
              return <img key={i} src={sec.conteudo} alt="" style={{ maxWidth: "100%" }} />
            default:
              return null
          }
        })}
      </Main>
      <Footer texto={footerTexto} />
    </div>
  )
}

export default PaginaDinamica
