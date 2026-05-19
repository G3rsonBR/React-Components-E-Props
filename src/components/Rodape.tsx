interface RodapeProps {
  ano?: number
}

function Rodape({ ano }: RodapeProps) {
  const anoExibido = ano ?? new Date().getFullYear()
  return <footer>&copy; {anoExibido}</footer>
}

export default Rodape
