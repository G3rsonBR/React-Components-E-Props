interface StatusProps {
  mensagem: string
}

function Status({ mensagem }: StatusProps) {
  return <span>{mensagem}</span>
}

export default Status
