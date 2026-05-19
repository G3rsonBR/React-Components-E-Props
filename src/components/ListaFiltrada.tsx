interface ListaFiltradaProps {
  lista: string[]
  criterio: string
}

function ListaFiltrada({ lista, criterio }: ListaFiltradaProps) {
  const filtrados = lista.filter((item) =>
    item.toLowerCase().includes(criterio.toLowerCase())
  )

  return (
    <ul>
      {filtrados.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default ListaFiltrada
