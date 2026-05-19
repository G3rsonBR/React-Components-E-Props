interface CardProps {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  return (
    <div style={{ border: "1px solid var(--border-color)", borderRadius: 8, padding: 16, margin: 8, background: "var(--card-bg)" }}>
      {children}
    </div>
  )
}

export default Card
