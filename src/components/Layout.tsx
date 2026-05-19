import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

interface LayoutProps {
  headerTitulo: string
  footerTexto: string
  children: React.ReactNode
}

function Layout({ headerTitulo, footerTexto, children }: LayoutProps) {
  return (
    <div>
      <Header titulo={headerTitulo} />
      <Main>{children}</Main>
      <Footer texto={footerTexto} />
    </div>
  )
}

export default Layout
