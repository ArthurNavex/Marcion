import { useState, useEffect  } from 'react'
import '../style/ModalEditarProduto.css'

interface ModalEditarProdutoProps {
  onFechar: () => void
  onProdutoEditado: () => Promise<void>
  produtoID: number | null
}

function ModalEditarProduto({ onFechar, onProdutoEditado, produtoID }: ModalEditarProdutoProps) {

  const [produto, setEditar] = useState ({
    nome: '',
    categoria: 'Farelos',
    preco: '0,00',
    estoque: 0
  })

  useEffect(() => {
  async function buscarProduto() {
    if (produtoID === null) return

    try {
      const resposta = await fetch(
        `http://localhost:5053/api/Produto/${produtoID}`
      )

      if (!resposta.ok) {
        throw new Error('Erro ao buscar produto')
      }

      const dados = await resposta.json()

      setEditar({
        nome: dados.nome,
        categoria: dados.categoria,
        preco: String(dados.preco).replace('.', ','),
        estoque: dados.estoque
      })

    } catch (erro) {
      console.log('Erro ao buscar produto', erro)
    }
  }

    buscarProduto()
  }, [produtoID])

  async function editarProduto() {

    if (produtoID === null) {
      throw new Error('Nenhum produto selecionado')
    }

    const preco = Number(produto.preco.trim().replace(',', '.'))

    if (produto.preco.trim() === '' || !Number.isFinite(preco)) {
      throw new Error('Informe um preço válido')
    }

    const editar = await fetch(
      `http://localhost:5053/api/Produto/${produtoID}`, {
        method: 'Put',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ ...produto, preco })
    })

    if (!editar.ok) {
      throw new Error('Erro ao editar produto')
    }
  }

  return (
    <div className="modal-editar-produto-overlay">
      <section
        className="modal-editar-produto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-editar-produto-titulo"
      >
        <header className="modal-editar-produto-cabecalho">
          <h2
            id="modal-editar-produto-titulo"
            className="modal-editar-produto-titulo"
          >
            Editar Produto
          </h2>
          <button
            type="button"
            className="modal-editar-produto-fechar"
            aria-label="Fechar modal"
            onClick={onFechar}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </header>

        <div className="modal-editar-produto-campos">
          <div className="modal-editar-produto-campo modal-editar-produto-campo-inteiro">
            <label htmlFor="modal-editar-produto-nome">
              Nome do produto <span className="modal-editar-produto-obrigatorio" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-editar-produto-nome"
              name="nome"
              type="text"
              value={produto.nome}
              onChange={(event) => setEditar({
                ...produto,
                nome: event.target.value
              })}
            />
          </div>

          <div className="modal-editar-produto-campo">
            <label htmlFor="modal-editar-produto-categoria">
              Categoria <span className="modal-editar-produto-obrigatorio" aria-hidden="true">*</span>
            </label>
            <select id="modal-editar-produto-categoria" 
            name="categoria"
            value={produto.categoria}
            onChange={(event) => setEditar({
              ...produto,
              categoria: event.target.value
            })}
            >
              <option value="Farelos">Farelos</option>
              <option value="Graos">Grãos</option>
              <option value="Fertilizantes">Fertilizantes</option>
              <option value="Sementes">Sementes</option>
              <option value="Defensivos">Defensivos</option>
            </select>
          </div>

          <div className="modal-editar-produto-campo">
            <label htmlFor="modal-editar-produto-preco">
              Preço unitário (R$) <span className="modal-editar-produto-obrigatorio" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-editar-produto-preco"
              name="preco"
              type="text"
              inputMode="decimal"
              value={produto.preco}
              onChange={(event) => setEditar({
                ...produto,
                preco: event.target.value
              })}
            />
          </div>

          <div className="modal-editar-produto-campo modal-editar-produto-campo-estoque">
            <label htmlFor="modal-editar-produto-estoque">
              Estoque <span className="modal-editar-produto-obrigatorio" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-editar-produto-estoque"
              name="estoque"
              type="text"
              value={produto.estoque}
              onChange={(event) => setEditar({
                ...produto,
                estoque: Number(event.target.value)
              })}
            />
          </div>
        </div>

        <footer className="modal-editar-produto-acoes">
          <button
            type="button"
            className="modal-editar-produto-botao modal-editar-produto-cancelar"
            onClick={onFechar}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="modal-editar-produto-botao modal-editar-produto-confirmar"
            onClick={async () =>{
              try {
                await editarProduto()
                await onProdutoEditado()
                onFechar()
              } catch (erro) {
                console.log('Não foi possivel editar o produto', erro)
              }
            }
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 5 4 4M4 20l4.5-1L20 7.5a2.8 2.8 0 0 0-4-4L4.5 15 4 20Z" />
            </svg>
            Editar Produto
          </button>
        </footer>
      </section>
    </div>
  )
}

export default ModalEditarProduto
