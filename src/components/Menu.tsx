interface MenuProps {
  itens: { label: string; url: string }[]
}

function Menu({ itens }: MenuProps) {
  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex", gap: 16, padding: 0 }}>
        {itens.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
