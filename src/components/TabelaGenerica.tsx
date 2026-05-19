interface TabelaGenericaProps {
  colunas: string[]
  dados: (string | number)[][]
}

function TabelaGenerica({ colunas, dados }: TabelaGenericaProps) {
  return (
    <table border={1} cellPadding={6}>
      <thead>
        <tr>
          {colunas.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((linha, i) => (
          <tr key={i}>
            {linha.map((valor, j) => (
              <td key={j}>{valor}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TabelaGenerica
