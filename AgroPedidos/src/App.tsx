import { useState } from 'react'
import { Routes, Route, Link, NavLink} from 'react-router'
import logo from './assets/logoAgroPedidosPNG.png'
import nomeLogo from './assets/nomeLogo.png'
import telaInicial from './assets/tela_inicial.png'
import clientes from './assets/clientes.png'
import produtos from './assets/produtos.png'
import pedidos from './assets/pedidos.png'
import './style/App.css'
import './index.css'
import Produtos from './pages/Produtos'
import Pedidos from './pages/Pedidos'

function App() {

  return (
    <>
      <aside className='sideBarNavigation'>
        
        <div>
          <div className='logoSideBar'>

            <Link to="/#">
              <img src={logo} width='100' alt="" />
              <img src={nomeLogo} width='100' alt="" />
            </Link>
            
          </div>

          <nav className='assideNav'> 
            <NavLink to="/" end className='linkNav'>
              <img src={telaInicial} alt="Tela Inicial" className='iconeMenu' />
              <span>
                Tela Inicial
              </span>
            </NavLink>

            <NavLink to="/clientes" className='linkNav'>
              <img src={clientes} alt="Clientes" className='iconeMenu' />
              <span>Clientes</span>
            </NavLink>

            <NavLink to="/produtos" className='linkNav'>
              <img src={produtos} alt="Produtos" className='iconeMenu' />
              <span>Produtos</span>
            </NavLink>

            <NavLink to="/pedidos" className='linkNav'>
              <img src={pedidos} alt="Pedidos" className='iconeMenu' />
              <span>Pedidos</span>
            </NavLink>
          </nav>
        </div>
      </aside>

      <main>

        <header className='headerMain'>
          <div className='notificacoes'> <a href="#">🔔</a></div>
          <div className='usuario'>Arthur Naves</div>
        </header>

        <Routes>
          <Route path="/produtos" element={<Produtos />} />
          <Route path='/pedidos' element={<Pedidos/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App