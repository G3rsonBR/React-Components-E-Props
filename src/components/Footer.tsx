interface FooterProps {
  texto: string
}

function Footer({ texto }: FooterProps) {
  return <footer><p>{texto}</p></footer>
}

export default Footer
