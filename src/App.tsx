import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

import Sidebar from "./components/Sidebar"
import Titulo from "./components/Titulo"
import Paragrafo from "./components/Paragrafo"
import Imagem from "./components/Imagem"
import Botao from "./components/Botao"
import Usuario from "./components/Usuario"
import Produto from "./components/Produto"
import Saudacao from "./components/Saudacao"
import CardSimples from "./components/CardSimples"
import Rodape from "./components/Rodape"
import Status from "./components/Status"
import Perfil from "./components/Perfil"
import CardProduto from "./components/CardProduto"
import ListaUsuarios from "./components/ListaUsuarios"
import Post from "./components/Post"
import ListaComentarios from "./components/ListaComentarios"
import CardComImagem from "./components/CardComImagem"
import TabelaSimples from "./components/TabelaSimples"
import Aluno from "./components/Aluno"
import Menu from "./components/Menu"
import Layout from "./components/Layout"
import Card from "./components/Card"
import ListaProdutos from "./components/ListaProdutos"
import BotaoCustomizado from "./components/BotaoCustomizado"
import Alerta from "./components/Alerta"
import TabelaGenerica from "./components/TabelaGenerica"
import Modal from "./components/Modal"
import Dashboard from "./components/Dashboard"
import Formulario from "./components/Formulario"
import ListaFiltrada from "./components/ListaFiltrada"
import PaginaDinamica from "./components/PaginaDinamica"

const grupos = [
  {
    titulo: "Básico (1-10)",
    itens: [
      { id: "titulo", label: "1. Titulo" },
      { id: "paragrafo", label: "2. Paragrafo" },
      { id: "imagem", label: "3. Imagem" },
      { id: "botao", label: "4. Botao" },
      { id: "usuario", label: "5. Usuario" },
      { id: "produto", label: "6. Produto" },
      { id: "saudacao", label: "7. Saudacao" },
      { id: "card-simples", label: "8. CardSimples" },
      { id: "rodape", label: "9. Rodape" },
      { id: "status", label: "10. Status" },
    ],
  },
  {
    titulo: "Intermediário (11-20)",
    itens: [
      { id: "perfil", label: "11. Perfil" },
      { id: "card-produto", label: "12. CardProduto" },
      { id: "lista-usuarios", label: "13. ListaUsuarios" },
      { id: "post", label: "14. Post" },
      { id: "lista-comentarios", label: "15. ListaComentarios" },
      { id: "card-com-imagem", label: "16. CardComImagem" },
      { id: "tabela-simples", label: "17. TabelaSimples" },
      { id: "aluno", label: "18. Aluno" },
      { id: "menu", label: "19. Menu" },
      { id: "layout", label: "20. Layout" },
    ],
  },
  {
    titulo: "Avançado (21-30)",
    itens: [
      { id: "card-children", label: "21. Card (children)" },
      { id: "lista-produtos", label: "22. ListaProdutos" },
      { id: "botao-customizado", label: "23. BotaoCustomizado" },
      { id: "alerta", label: "24. Alerta" },
      { id: "tabela-generica", label: "25. TabelaGenerica" },
      { id: "modal", label: "26. Modal" },
      { id: "dashboard", label: "27. Dashboard" },
      { id: "formulario", label: "28. Formulario" },
      { id: "lista-filtrada", label: "29. ListaFiltrada" },
      { id: "pagina-dinamica", label: "30. PaginaDinamica" },
    ],
  },
]

function App() {
  const [selecionado, setSelecionado] = useState("titulo")
  const [modalAberto, setModalAberto] = useState(false)
  const [grupoAberto, setGrupoAberto] = useState<number | null>(0)

  function handleToggleGrupo(indice: number) {
    setGrupoAberto((prev) => (prev === indice ? null : indice))
  }

  function handleSelecionar(id: string) {
    setSelecionado(id)
    const grupoIdx = grupos.findIndex((g) => g.itens.some((i) => i.id === id))
    if (grupoIdx !== -1) setGrupoAberto(grupoIdx)
  }

  function renderizarComponente() {
    switch (selecionado) {
      case "titulo":
        return <Titulo texto="Este é um título via props" />
      case "paragrafo":
        return <Paragrafo conteudo="Este parágrafo é renderizado a partir da prop conteudo." />
      case "imagem":
        return <Imagem src={reactLogo} alt="React logo" />
      case "botao":
        return <Botao label="Clique aqui" />
      case "usuario":
        return <Usuario nome="João" idade={20} />
      case "produto":
        return <Produto nome="Camiseta" preco={49.9} />
      case "saudacao":
        return <Saudacao nome="Maria" />
      case "card-simples":
        return <CardSimples titulo="Card Legal" descricao="Descrição interessante do card." />
      case "rodape":
        return <Rodape />
      case "status":
        return <Status mensagem="Status: tudo ok!" />
      case "perfil":
        return <Perfil nome="Ana Souza" email="ana@email.com" foto={reactLogo} />
      case "card-produto":
        return <CardProduto nome="Notebook" preco={2999.99} descricao="Notebook rápido e leve." />
      case "lista-usuarios":
        return (
          <ListaUsuarios
            usuarios={[
              { nome: "João", idade: 20 },
              { nome: "Maria", idade: 25 },
              { nome: "Pedro", idade: 30 },
            ]}
          />
        )
      case "post":
        return (
          <Post
            titulo="Aprendendo React"
            autor="Carlos"
            conteudo="React é uma biblioteca para construir interfaces."
          />
        )
      case "lista-comentarios":
        return (
          <ListaComentarios
            comentarios={[
              { autor: "João", mensagem: "Muito bom!" },
              { autor: "Maria", mensagem: "Ótimo artigo." },
            ]}
          />
        )
      case "card-com-imagem":
        return (
          <CardComImagem
            imagem={reactLogo}
            titulo="Card com Imagem"
            texto="Um card que combina imagem, título e texto."
          />
        )
      case "tabela-simples":
        return (
          <TabelaSimples
            dados={[
              { Nome: "João", Idade: 20 },
              { Nome: "Maria", Idade: 25 },
            ]}
          />
        )
      case "aluno":
        return (
          <>
            <Aluno nome="João" nota={8} />
            <Aluno nome="Pedro" nota={4} />
          </>
        )
      case "menu":
        return (
          <Menu
            itens={[
              { label: "Home", url: "#" },
              { label: "Sobre", url: "#" },
              { label: "Contato", url: "#" },
            ]}
          />
        )
      case "layout":
        return (
          <Layout
            headerTitulo="Meu Layout"
            footerTexto="© 2026 - Todos os direitos reservados."
          >
            <p>Conteúdo principal do layout.</p>
          </Layout>
        )
      case "card-children":
        return (
          <Card>
            <h3>Conteúdo interno</h3>
            <p>Qualquer coisa pode ir aqui dentro.</p>
          </Card>
        )
      case "lista-produtos":
        return (
          <ListaProdutos
            produtos={[
              { nome: "Mouse", preco: 89.9, descricao: "Mouse sem fio." },
              { nome: "Teclado", preco: 199.9, descricao: "Teclado mecânico." },
            ]}
          />
        )
      case "botao-customizado":
        return (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <BotaoCustomizado texto="Pequeno" cor="blue" tamanho="pequeno" />
            <BotaoCustomizado texto="Médio" cor="green" tamanho="medio" />
            <BotaoCustomizado texto="Grande" cor="red" tamanho="grande" />
          </div>
        )
      case "alerta":
        return (
          <>
            <Alerta tipo="sucesso" mensagem="Operação concluída!" />
            <Alerta tipo="erro" mensagem="Algo deu errado." />
            <Alerta tipo="aviso" mensagem="Atenção: verifique os dados." />
          </>
        )
      case "tabela-generica":
        return (
          <TabelaGenerica
            colunas={["Produto", "Preço", "Estoque"]}
            dados={[
              ["Notebook", 2999.99, 10],
              ["Mouse", 89.9, 50],
            ]}
          />
        )
      case "modal":
        return (
          <>
            <button type="button" onClick={() => setModalAberto(true)}>
              Abrir Modal
            </button>
            {modalAberto && (
              <Modal
                titulo="Modal Exemplo"
                conteudo={<p>Este é o conteúdo do modal.</p>}
                rodape={
                  <button type="button" onClick={() => setModalAberto(false)}>
                    Fechar
                  </button>
                }
              />
            )}
          </>
        )
      case "dashboard":
        return (
          <Dashboard
            titulo="Meu Dashboard"
            cards={[
              { titulo: "Card 1", descricao: "Descrição 1" },
              { titulo: "Card 2", descricao: "Descrição 2" },
            ]}
            ano={2026}
          />
        )
      case "formulario":
        return (
          <Formulario
            titulo="Cadastro"
            campos={[
              { nome: "Nome", tipo: "text", placeholder: "Digite seu nome" },
              { nome: "Email", tipo: "email", placeholder: "Digite seu email" },
              { nome: "Idade", tipo: "number", placeholder: "Digite sua idade" },
            ]}
          />
        )
      case "lista-filtrada":
        return (
          <ListaFiltrada
            lista={["Maçã", "Banana", "Laranja", "Abacaxi", "Melancia"]}
            criterio="an"
          />
        )
      case "pagina-dinamica":
        return (
          <PaginaDinamica
            headerTitulo="Página Dinâmica"
            secoes={[
              { tipo: "titulo", conteudo: "Bem-vindo!" },
              { tipo: "paragrafo", conteudo: "Esta página foi montada inteiramente via props." },
              { tipo: "imagem", conteudo: reactLogo },
            ]}
            footerTexto="Footer dinâmico"
          />
        )
      default:
        return null
    }
  }

  const nomeComponente =
    grupos.flatMap((g) => g.itens).find((c) => c.id === selecionado)?.label ?? ""

  return (
    <div style={{ display: "flex", fontFamily: "sans-serif" }}>
      <Sidebar
        grupos={grupos}
        selecionado={selecionado}
        grupoAberto={grupoAberto}
        onSelecionar={handleSelecionar}
        onToggleGrupo={handleToggleGrupo}
      />
      <main style={{ flex: 1, padding: 32 }}>
        <h1 style={{ marginTop: 0 }}>{nomeComponente}</h1>
        <div style={{ border: "1px solid #e0e0e0", borderRadius: 8, padding: 24, backgroundColor: "#fff" }}>
          {renderizarComponente()}
        </div>
        <div style={{ marginTop: 32 }}>
          <Rodape />
        </div>
      </main>
    </div>
  )
}

export default App
