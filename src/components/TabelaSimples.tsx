interface TabelaSimplesProps {
  dados: Record<string, string | number>[]
}

function TabelaSimples({ dados }: TabelaSimplesProps) {
  if (dados.length === 0) return <p>Sem dados</p>

  const colunas = Object.keys(dados[0])

  return (
    <table border={1} cellPadding={6}>
      <thead>
        <tr>
          {colunas.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((linha, i) => (
          <tr key={i}>
            {colunas.map((col) => (
              <td key={col}>{linha[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TabelaSimples
