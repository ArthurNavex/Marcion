import { useState } from 'react'
import '../style/ModalAdicionarCliente.css'

interface ModalAdicionarClienteProps {
  onFechar: () => void
  onClienteCadastrado: () => Promise<void>
}

function ModalAdicionarCliente({ onFechar, onClienteCadastrado}: ModalAdicionarClienteProps) {

  const [cliente, setCliente] = useState({
    nome: '',
    telefone: '',
    cpf: '',
    cep: '',
    cidade: '',
    endereco: '',
    email: ''
  })

  async function adicionarCliente() {
    const resposta = await fetch(
      `http://localhost:5053/api/Clientes/`, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
      }
    )

    if (!resposta.ok) {
    throw new Error('Erro ao cadastrar cliente');
    }
  }

  return (
    <div className="modal-adicionar-cliente-overlay">
      <section
        className="modal-adicionar-cliente"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-adicionar-cliente-titulo"
        aria-describedby="modal-adicionar-cliente-identificacao"
      >
        <header className="modal-adicionar-cliente__cabecalho">
          <h2 id="modal-adicionar-cliente-titulo" className="modal-adicionar-cliente__titulo">
            Adicionar Cliente
          </h2>
          <button type="button" className="modal-adicionar-cliente__fechar" aria-label="Fechar modal" onClick={onFechar}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
          <p id="modal-adicionar-cliente-identificacao" className="modal-adicionar-cliente__identificacao">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <circle cx="8.5" cy="10" r="1.5" />
              <path d="M6 15c0-2.5 5-2.5 5 0M14 10h4M14 14h4" />
            </svg>
            ID gerado automaticamente
          </p>
        </header>

        <div className="modal-adicionar-cliente__campos">
          <div className="modal-adicionar-cliente__campo modal-adicionar-cliente__campo--inteiro">
            <label htmlFor="modal-adicionar-cliente-nome">
              Nome <span className="modal-adicionar-cliente__obrigatorio" aria-hidden="true">*</span>
            </label>
            <input id="modal-adicionar-cliente-nome" 
            name="nome" 
            type="text" 
            placeholder="Digite o nome do cliente" 
            aria-required="true" 
            value={cliente.nome}
            onChange={(event) => setCliente({
              ...cliente,
              nome: event.target.value
            })}
            />
          </div>

          <div className="modal-adicionar-cliente__campo">
            <label htmlFor="modal-adicionar-cliente-telefone">
              Telefone <span className="modal-adicionar-cliente__obrigatorio" aria-hidden="true">*</span>
            </label>
            <input id="modal-adicionar-cliente-telefone" name="telefone" type="tel" placeholder="(XX) XXXXX-XXXX" aria-required="true" />
          </div>

          <div className="modal-adicionar-cliente__campo">
            <label htmlFor="modal-adicionar-cliente-cpf">
              CPF <span className="modal-adicionar-cliente__obrigatorio" aria-hidden="true">*</span>
            </label>
            <input id="modal-adicionar-cliente-cpf" name="cpf" type="text" placeholder="XXX.XXX.XXX-XX" aria-required="true" />
          </div>

          <div className="modal-adicionar-cliente__campo">
            <label htmlFor="modal-adicionar-cliente-cep">CEP</label>
            <input id="modal-adicionar-cliente-cep" name="cep" type="text" placeholder="XXXXX-XXX" />
          </div>

          <div className="modal-adicionar-cliente__campo">
            <label htmlFor="modal-adicionar-cliente-cidade">Cidade</label>
            <input id="modal-adicionar-cliente-cidade" name="cidade" type="text" placeholder="Digite a cidade" />
          </div>

          <div className="modal-adicionar-cliente__campo modal-adicionar-cliente__campo--inteiro">
            <label htmlFor="modal-adicionar-cliente-endereco">Endereço</label>
            <input id="modal-adicionar-cliente-endereco" name="endereco" type="text" placeholder="Digite o endereço completo" />
          </div>

          <div className="modal-adicionar-cliente__campo modal-adicionar-cliente__campo--inteiro">
            <label htmlFor="modal-adicionar-cliente-email">Email</label>
            <input id="modal-adicionar-cliente-email" name="email" type="text" placeholder="Digite o email" />
          </div>
        </div>

        <footer className="modal-adicionar-cliente__rodape">
          <button type="button" className="modal-adicionar-cliente__botao modal-adicionar-cliente__botao--cancelar" onClick={onFechar}>
            Cancelar
          </button>
          <button type="button" 
          className="modal-adicionar-cliente__botao modal-adicionar-cliente__botao--adicionar"
          onClick={adicionarCliente}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="9" cy="7" r="4" />
              <path d="M2 21v-2a7 7 0 0 1 7-7 7 7 0 0 1 5 2M19 8v6M16 11h6" />
            </svg>
            Adicionar Cliente
          </button>
        </footer>
      </section>
    </div>
  )
}

export default ModalAdicionarCliente
