import { createContext, useState, useEffect, type ReactNode } from "react"

type Tema = "light" | "dark"

interface ThemeContextType {
  tema: Tema
  alternarTema: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>(() => {
    const salvo = localStorage.getItem("tema")
    if (salvo === "light" || salvo === "dark") return salvo
    return "light"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema)
    localStorage.setItem("tema", tema)
  }, [tema])

  function alternarTema() {
    setTema((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
