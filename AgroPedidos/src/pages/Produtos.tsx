import { useState } from 'react'
import '../style/Produtos.css'
import botaoAdiciar from '../assets/adicioar-botao.png'
import lupa from '../assets/lupa.png'
import editar from '../assets/editar.png'
import excluir from '../assets/excluir.png'

function Produtos() {
  interface Produto {
    id: number,
    nome: string,
    categoria: string,
    estoque: number,
    valor: number
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


  const [produtos, setProdutos] = useState<Produto[]>([
    { id: 1, nome: 'Soja', categoria: 'Farelo', estoque: 120, valor: 140.00 },
    { id: 2, nome: 'Milho', categoria: 'Grãos', estoque: 10, valor: 90.00 },
    { id: 3, nome: 'Adubo NPK', categoria: 'Fertilizantes', estoque: 0, valor: 120.00 },
    { id: 4, nome: 'Trigo', categoria: 'Farelo', estoque: 10, valor: 90.00 },
  ]);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todas')
  const [buscaProduto, setBuscaProduto] = useState('')
  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(buscaProduto.toLowerCase())
    &&
    (categoriaSelecionada === 'todas' ||
     produto.categoria === categoriaSelecionada)
  );

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
            <option value="Farelo">Farelo</option>
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
                  <td>{produto.valor}</td>
                  <td>{conferirSituacao(produto.estoque)}</td>
                  <td className='botoes-acao'><img src={editar} alt="editar"/> <img src={excluir} alt="excluir" /></td>
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
