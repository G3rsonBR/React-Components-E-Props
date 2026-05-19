import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function useTema() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTema deve ser usado dentro de ThemeProvider")
  return ctx
}

export default useTema
