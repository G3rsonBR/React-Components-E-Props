interface AlunoProps {
  nome: string
  nota: number
}

function Aluno({ nome, nota }: AlunoProps) {
  const situacao = nota >= 6 ? "Aprovado" : "Reprovado"

  return (
    <div>
      <p>
        {nome} - Nota: {nota} - <strong>{situacao}</strong>
      </p>
    </div>
  )
}

export default Aluno
