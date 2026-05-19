interface ImagemProps {
  src: string
  alt: string
}

function Imagem({ src, alt }: ImagemProps) {
  return <img src={src} alt={alt} />
}

export default Imagem
