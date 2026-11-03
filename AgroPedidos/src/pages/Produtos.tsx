import { useEffect, useState } from 'react'
import '../style/Produtos.css'
import botaoAdiciar from '../assets/adicioar-botao.png'
import lupa from '../assets/lupa.png'
import editar from '../assets/editar.png'
import excluir from '../assets/excluir.png'
import ModalProduto from '../components/ModalProduto'
import ModalExcluirProduto from '../components/ModalExcluirProduto'

function Produtos() {
  interface Produto {
    id: number,
    nome: string,
    categoria: string,
    estoque: number,
    preco: number
  }
  
  function conferirSituacao(estoque: number) {
    if(estoque === 0) {
      return 'Indisponivel';
    }

    if (estoque <= 10 && estoque > 0) {
      return 'Estoque Baixo'
    }

    return 'Disponivel'
  }


  const [produtos, setProdutos] = useState<Produto[]>([])
  const [modalProdutoAberto, setModalProdutoAberto] = useState(false)
  const [modalExcluirProdutoAberto, setModalExcluirProdutoAberto] = useState(false)

  async function buscaDados() {
    const resposta = await fetch(
      'http://localhost:5053/api/Produto'
    )
    console.log("Status HTTP:", resposta.status)

    const dados = await resposta.json()
    console.log("Dados da API:", dados)

    setProdutos(dados);
  }

  useEffect(() =>{
    buscaDados()
  }, [])

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todas')
  const [buscaProduto, setBuscaProduto] = useState('')
  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(buscaProduto.toLowerCase())
    &&
    (categoriaSelecionada === 'todas' ||
     produto.categoria === categoriaSelecionada)
  );

  const [produtoSelecionado, setProdutoSelecionado] = useState<number | null>(null)

  return (
    <>
    <div className="titulo">
      <h1>Produtos</h1>
      <p>Cadstre, pesquise e acompanhe os produtos disponiveis</p>
    </div>

    <div className='cardProdutos'>
      <section className='adicionarProdutos'>
        <button
          type="button"
          className='botaoAdicionar'
          onClick={() => setModalProdutoAberto(true)}
        >
          <img src={botaoAdiciar} alt="" />
          <span>
            Adicionar Produtos
          </span>
        </button>

        <div className='barra-pesquisa'>
          <img src={lupa} alt="Pesquisar" />
          <input 
              id="busca-produto" type="text"
              placeholder='Pesquisar Cliente'
              value={buscaProduto}
              onChange={event => setBuscaProduto(event.target.value)}
            />

            
        </div>
      </section>

      <section className='listaProdutos'>
        <header>
          <h2>Lista de produtos</h2>

          <select className='botaoFiltro'
          value={categoriaSelecionada}
          onChange={(event) => setCategoriaSelecionada(event.target.value)}>
            <option value="todas">Todas as categorias</option>
            <option value="Farelos">Farelo</option>
            <option value="Grãos">Grãos</option>
            <option value="Fertilizantes">Fertilizantes</option>
            <option value="Sementes">Sementes</option>
            <option value="Defensivos">Defensivos</option>
          </select>

        </header>

        <div className='tabela-produto'>

          <table>
            <thead className='barraCategoria'>
              <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Estoque</th>
                <th>Preço un.</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {produtosFiltrados.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.categoria}</td>
                  <td>{produto.estoque}</td>
                  <td>{produto.preco}</td>
                  <td>{conferirSituacao(produto.estoque)}</td>
                  <td className='botoes-acao'>
                    <img src={editar} alt="editar" />
                    <img
                      src={excluir}
                      alt="excluir"
                      onClick={() => {
                          setProdutoSelecionado(produto.id);
                          setModalExcluirProdutoAberto(true);
                      }}
                    />
                  </td>
                </tr>
              )           
              )}
            </tbody>
          </table>
        </div>

      </section>
    </div>
    {modalProdutoAberto && <ModalProduto onFechar={() => setModalProdutoAberto(false)} onProdutoCadastrado={buscaDados}/>}
    {modalExcluirProdutoAberto && (
      <ModalExcluirProduto onFechar={() => setModalExcluirProdutoAberto(false)} produtoID={produtoSelecionado} 
      onProdutoExcluido={buscaDados} />
    )}
    </>
  )
}

export default Produtos
