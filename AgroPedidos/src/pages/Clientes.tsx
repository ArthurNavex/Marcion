import { useState, useEffect } from 'react'
import '../style/Clientes.css'
import editar from '../assets/editar.png'
import excluir from '../assets/excluir.png'
import ModalAdicionarCliente from '../components/ModalAdicionarCliente'

function Clientes() {
  
  interface Cliente {
    id: number,
    nome: string,
    telefone: number,
    cpf: string,
    cep: string,
    cidade: string,
    endereco: string,
    email: string
  }

  const [cliente, setCliente] = useState<Cliente[]>([])
  const [modalAdicionarClienteAberto, setModalAdicionarClienteAberto] = useState(false)

  async function buscaDados() {
    const resposta = await fetch(
      'http://localhost:5053/api/Clientes'
    )
    console.log("Status HTTP:", resposta.status)

    const dados = await resposta.json()
    console.log("Dados da API:", dados)

    setCliente(dados);
  }

  useEffect(() =>{
    buscaDados()
  }, [])

  const [buscaCliente, setClienteBuscado] = useState('')

  const clientesFiltrados = cliente.filter(cliente =>
    cliente.nome.toLowerCase().includes(buscaCliente.toLowerCase())
  );

  return (
    <>
    <section className="clientes-page" aria-labelledby="clientes-titulo">
      <h1 id="clientes-titulo" className="clientes-page__titulo">Página de Clientes</h1>

      <div className="clientes-page__barra-acoes">
        <button
          type="button"
          className="clientes-page__adicionar"
          onClick={() => setModalAdicionarClienteAberto(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Adicionar cliente
        </button>

        <div className="clientes-page__pesquisa">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
          <input
            type="search"
            placeholder="Pesquisar clientes..."
            aria-label="Pesquisar clientes"
            readOnly
          />
        </div>
      </div>

      <section className="clientes-page__card" aria-labelledby="clientes-lista-titulo">
        <div className="clientes-page__cabecalho">
          <h2 id="clientes-lista-titulo">Clientes</h2>
        </div>

        <div className="clientes-page__tabela-container" role="region" aria-label="Lista de clientes" tabIndex={0}>
          <table className="clientes-page__tabela">
            <thead>
              <tr>
                <th scope="col" className="clientes-page__coluna-acoes">Ações</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col">Telefone</th>
                <th scope="col">Cidade</th>
                <th scope="col">Endereço</th>
                <th scope="col">Cep</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id}>
                  <td>
                    <div className="clientes-page__acoes">
                      <button
                        type="button"
                        className="clientes-page__acao"
                        aria-label={`Editar ${cliente.nome}`}
                        onClick={() => {
                          
                        }}
                      >
                        <img src={editar} alt="" />
                      </button>
                      <button
                        type="button"
                        className="clientes-page__acao clientes-page__acao--excluir"
                        aria-label={`Excluir ${cliente.nome}`}
                        onClick={() => {
                            
                        }}
                      >
                        <img src={excluir} alt="" />
                      </button>
                    </div>
                  </td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.cidade}</td>
                  <td>{cliente.endereco}</td>
                  <td>{cliente.cep}</td>
                  <td>{cliente.email}</td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>

        <div className="clientes-page__rodape">
          <p>Mostrando 1 a 8 de 8 clientes</p>
          <nav className="clientes-page__paginacao" aria-label="Paginação de clientes">
            <button type="button" className="clientes-page__pagina" aria-label="Página anterior" disabled>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m14 7-5 5 5 5" /></svg>
            </button>
            <button type="button" className="clientes-page__pagina clientes-page__pagina--atual" aria-label="Página 1" aria-current="page">1</button>
            <button type="button" className="clientes-page__pagina" aria-label="Próxima página" disabled>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m10 7 5 5-5 5" /></svg>
            </button>
          </nav>
        </div>
      </section>
    </section>
    {modalAdicionarClienteAberto && (
      <ModalAdicionarCliente onFechar={() => setModalAdicionarClienteAberto(false)} onClienteCadastrado={buscaDados} />
    )}
    </>
  )
}

export default Clientes
