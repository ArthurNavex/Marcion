import { useState } from 'react'
import '../style/Produtos.css'
import botaoAdiciar from '../assets/adicioar-botao.png'
import lupa from '../assets/lupa.png'

function Produtos() {
  interface Produto {
    id: number,
    nome: string,
    categoria: string,
    estoque: number,
    valor: number
  }

  const [produtos, setProdutos] = useState<Produto[]>([
    { id: 1, nome: 'Soja', categoria: 'Grãos', estoque: 120, valor: 140.00 },
    { id: 2, nome: 'Milho', categoria: 'Grãos', estoque: 85, valor: 90.00 },
    { id: 3, nome: 'Adubo NPK', categoria: 'Fertilizantes', estoque: 18, valor: 120.00 }
]);

  const [listaAberta, setListaAberta] = useState(false)
  const [buscaProduto, setBuscaProduto] = useState('')
  const produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(buscaProduto.toLowerCase())
      )

  return (
    <>
    <div className="titulo">
      <h1>Produtos</h1>
      <p>Cadstre, pesquise e acompanhe os produtos disponiveis</p>
    </div>

    <div className='cardProdutos'>
      <section className='adicionarProdutos'>
        <button className='botaoAdicionar'>
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
              onFocus={() => setListaAberta(true)}
              onChange={event => setBuscaProduto(event.target.value)}
            />

            {listaAberta && (
              <div className='lista-aberta'>
                
                {produtosFiltrados.map(produto =>
                  <button type="button"
                   key={produto.id}
                   onClick={() => {
                    setBuscaProduto(produto.nome)
                    setListaAberta(false)
                   }}
                   >
                    {produto.nome}
                  </button>
                )}

              </div>
            )}
        </div>
      </section>

      <section className='listaProdutos'>
        <header>
          <h2>Lista de produtos</h2>

          <select className='botaoFiltro'>
            <option value="todas">Todas as categorias</option>
            <option value="graos">Grãos</option>
            <option value="fertilizantes">Fertilizantes</option>
            <option value="sementes">Sementes</option>
            <option value="defensivos">Defensivos</option>
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
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.categoria}</td>
                  <td>{produto.estoque}</td>
                  <td>{produto.valor}</td>
                </tr>
              )           
              )}
            </tbody>
          </table>

        </div>
      </section>
    </div>
    </>
  )
}

export default Produtos