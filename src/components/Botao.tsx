interface BotaoProps {
  label: string
}

function Botao({ label }: BotaoProps) {
  return <button type="button">{label}</button>
}

export default Botao
