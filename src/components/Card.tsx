interface CardProps {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, margin: 8 }}>
      {children}
    </div>
  )
}

export default Card
