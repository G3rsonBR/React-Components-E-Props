interface HeaderProps {
  titulo: string
}

function Header({ titulo }: HeaderProps) {
  return <header><h2>{titulo}</h2></header>
}

export default Header
