import { useEffect, useState } from 'react'
import '../style/ModalProduto.css'
import Produtos from '../pages/Produtos'

interface ModalProdutoProps {
  onFechar: () => void
  onProdutoCadastrado: () => void
}



function ModalProduto({ onFechar, onProdutoCadastrado }: ModalProdutoProps) {
  
  const [produto, setProduto] = useState({
  nome: '',
  categoria: '',
  preco: 0.00,
  estoque: 0
  })

  async function adicionarProduto() {
    const resposta = await fetch(
      'http://localhost:5053/api/Produto', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
      }
    )

    if (!resposta.ok) {
    throw new Error('Erro ao cadastrar produto');
    }
  }
  return (
    <div className="modal-produto-overlay">
      <section
        className="modal-produto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-produto-titulo"
      >
        <header className="modal-produto-cabecalho">
          <div className="modal-produto-identificacao">
            <span className="modal-produto-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 9 5v8l-9 5-9-5V8l9-5Z" />
                <path d="m3 8 9 5 9-5M12 13v8M7.5 5.5l9 5" />
              </svg>
            </span>
            <h2 id="modal-produto-titulo">Cadastrar Produto</h2>
          </div>

          <button type="button" className="modal-produto-fechar" aria-label="Fechar modal" onClick={onFechar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </header>

        <form className="modal-produto-formulario">
          <div className="modal-produto-campos">
            <div className="modal-produto-campo modal-produto-campo-inteiro">
              <label htmlFor="modal-produto-nome">
                Nome do Produto <span className="modal-produto-obrigatorio" aria-hidden="true">*</span>
              </label>
              <input id="modal-produto-nome"
               name="nome" 
               value={produto.nome}
               onChange={(event) => setProduto({
                ...produto,
                nome: event.target.value
               })}
               type="text" 
               placeholder="Ex.: Soja" />
            </div>

            <div className="modal-produto-campo">
              <label htmlFor="modal-produto-categoria">
                Categoria <span className="modal-produto-obrigatorio" aria-hidden="true">*</span>
              </label>
              <select id="modal-produto-categoria" name="categoria"
                value={produto.categoria}
                onChange={(event) =>
                  setProduto({
                    ...produto,
                    categoria: event.target.value
                  })
                }
              >
                <option value="Graos">Grãos</option>
                <option value="Fertilizantes">Fertilizantes</option>
                <option value="Defensivos">Defensivos</option>
                <option value="Sementes">Sementes</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className="modal-produto-campo">
              <label htmlFor="modal-produto-preco">
                Preço Unitário (R$) <span className="modal-produto-obrigatorio" aria-hidden="true">*</span>
              </label>
              <input id="modal-produto-preco" 
              name="preco" 
              value={produto.preco}
              onChange={(event) =>
                setProduto({
                  ...produto,
                  preco: Number(event.target.value)
                })
              }
              type='number'
              placeholder="Ex.: 140,00" />
            </div>

            <div className="modal-produto-campo modal-produto-campo-inteiro">
              <label htmlFor="modal-produto-estoque">
                Estoque <span className="modal-produto-obrigatorio" aria-hidden="true">*</span>
              </label>
              <input id="modal-produto-estoque" 
              name="estoque" 
              value={produto.estoque}
              onChange={(event) => 
                setProduto({
                  ...produto,
                  estoque: Number(event.target.value)
                })
              }
              type="number" 
              placeholder="Ex.: 120" />
            </div>
          </div>

          <footer className="modal-produto-rodape">
            <button type="button" className="modal-produto-botao modal-produto-cancelar" onClick={onFechar}>
              Cancelar
            </button>
            <button type="button" 
            className="modal-produto-botao 
            modal-produto-cadastrar"
            onClick={() => {
              adicionarProduto(), onFechar()
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2Z" />
                <path d="M7 3v6h10V3M7 21v-8h10v8" />
              </svg>
              Cadastrar
            </button>
          </footer>
        </form>
      </section>
    </div>
  )
}

export default ModalProduto
