interface ModalProps {
  titulo: string
  conteudo: React.ReactNode
  rodape: React.ReactNode
}

function Modal({ titulo, conteudo, rodape }: ModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 8,
          padding: 24,
          maxWidth: 500,
          width: "90%",
        }}
      >
        <h2>{titulo}</h2>
        <div>{conteudo}</div>
        <div style={{ marginTop: 16 }}>{rodape}</div>
      </div>
    </div>
  )
}

export default Modal
