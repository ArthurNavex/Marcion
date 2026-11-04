  import '../style/ModalExcluirProduto.css'

  interface ModalExcluirProdutoProps {
    onFechar: () => void
    onProdutoExcluido: () => Promise<void>
    produtoID: number | null
  }

  function ModalExcluirProduto({ onFechar, produtoID, onProdutoExcluido } : ModalExcluirProdutoProps) {

    async function excluirProduto() {
      if (produtoID === null) {
        throw new Error('Nenhum produto selecionado');
    }

      const excluir = await fetch(
        `http://localhost:5053/api/Produto/${produtoID}`, {
          method: 'Delete'
        }
      )

      if (!excluir.ok) {
        throw new Error('Erro ao excluir produto');
      }
    }
    return (
      <div className="modal-excluir-produto-overlay">
        <section
          className="modal-excluir-produto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-excluir-produto-titulo"
          aria-describedby="modal-excluir-produto-descricao"
        >
          <span className="modal-excluir-produto-fechar" aria-hidden="true" onClick={onFechar}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </span>

          <h2
            id="modal-excluir-produto-titulo"
            className="modal-excluir-produto-titulo"
          >
            Excluir produto?
          </h2>

          <p
            id="modal-excluir-produto-descricao"
            className="modal-excluir-produto-descricao"
          >
            Tem certeza que deseja excluir o produto '<strong>Soja</strong>'? Esta
            ação não poderá ser desfeita.
          </p>

          <div className="modal-excluir-produto-acoes">
            <button
              type="button"
              className="modal-excluir-produto-botao modal-excluir-produto-cancelar"
              onClick={onFechar}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="modal-excluir-produto-botao modal-excluir-produto-excluir"
              onClick={ async() => {
                try{
                  await excluirProduto( );
                  await onProdutoExcluido();
                  onFechar();
                } catch (erro) {
                  console.log('Erro ao excluir produto', erro)
                }
              }}
            >
              Excluir
            </button>
          </div>
        </section>
      </div>
    )
  }

  export default ModalExcluirProduto
