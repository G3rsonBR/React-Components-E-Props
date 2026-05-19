import Titulo from "./Titulo"
import CardSimples from "./CardSimples"
import Rodape from "./Rodape"

interface DashboardProps {
  titulo: string
  cards: { titulo: string; descricao: string }[]
  ano: number
}

function Dashboard({ titulo, cards, ano }: DashboardProps) {
  return (
    <div>
      <Titulo texto={titulo} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards.map((c, i) => (
          <CardSimples key={i} titulo={c.titulo} descricao={c.descricao} />
        ))}
      </div>
      <Rodape ano={ano} />
    </div>
  )
}

export default Dashboard
