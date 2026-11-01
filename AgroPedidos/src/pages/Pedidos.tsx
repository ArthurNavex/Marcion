import { useState } from 'react'
import '../style/Pedidos.css'
import '../index.css'



function Pedidos() {

    interface clientes {
        id: number,
        nome: string
      }
      const clientes = [
        {id: 1, nome: 'Arthur'},
        {id: 2, nome: 'Duda'},
        {id: 3, nome: 'Vander'}
      ]
      const [listaAberta, setListaAberta] = useState(false)
      const [buscaCliente, setBuscaCliente] = useState('')
      const clientesFiltrados = clientes.filter(cliente =>
        cliente.nome.toLowerCase().includes(buscaCliente.toLowerCase())
      )

  return (
    <>

    <h1 className='tituloPedidos'>Pedidos</h1>

        <div className='cliente'>
          <div className='seletor-cliente'>
            <label htmlFor="busca-cliente">Cliente</label>

            <input 
              id="busca-cliente" type="text"
              placeholder='Pesquisar Cliente'
              value={buscaCliente}
              onFocus={() => setListaAberta(true)}
              onChange={event => setBuscaCliente(event.target.value)}
            />

            {listaAberta && (
              <div className='lista-aberta'>
                
                {clientesFiltrados.map(cliente =>
                  <button type="button"
                   key={cliente.id}
                   onClick={() => {
                    setBuscaCliente(cliente.nome)
                    setListaAberta(false)
                   }}
                   >
                    {cliente.nome}
                  </button>
                )}

              </div>
            )}

          </div>
        </div>
    </>
  )
}

export default Pedidos