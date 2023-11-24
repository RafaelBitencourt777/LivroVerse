import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';

import ListarUsuarios from './pages/ADM-usuarios/index.js';
import App from './pages/landingpage/landing.js';
import AcompPedido from './pages/acompanhamentoPedido';
import BarraLateral from './components/barral';
import Cabecalho from './components/cabecalho';
import Cadastrocliente from './pages/cadastrocliente/App.js';
import Favoritos from './pages/favoritos';
import Lgadm from './pages/loginadm/loginadm.js';
import Lgcliente from './pages/logincliente/App.js';
import Prev from './pages/previsu/prev.js';
import Prev2 from './pages/previsu2/prev2.js';
import Prev3 from './pages/previsu3/prev3.js';
import Prev4 from './pages/previsu4/prev4.js';
import Prev5 from './pages/previsu5/prev5.js';
import Prev6 from './pages/previsu6/prev6.js';
import Prev7 from './pages/previsu7/prev7.js';
import Prev8 from './pages/previsu8/prev8.js';
import Prev9 from './pages/previsu9/prev9.js';
import Prev10 from './pages/previsu10/prev10.js';
import Recupera from './pages/redefinirsenha/redef.js';
import Rodape from './components/rodape';
import Sob from './pages/sobre/livro.js';
import Pgto from './pages/frmspgto/pgto.js';
import ConfirmPed from './pages/confirmPedido';
import MyPed from './pages/mypedidos/my.js';
import Conta from './pages/areaconta/area.js';
import PrincAdm from './pages/principalAdm';
import CadastrarProd from './pages/cadastrarProd';
import Dtc from './pages/dadoscliente/dtc';
import CabecalhoAdm from './components/cabecalhoAdm/index.js';
import Carrinho from './pages/carrinho';
import DtlPedAnd from './pages/detalhesPedAndamento';
import PedFin from './pages/pedidosFinalizada';
import PedidosAndamento from './pages/pedidosAndamento';
import ListarMensagens from './pages/ADM-mensagens';
import ListarRelatorios from './pages/ADM-relatorios';
import Produtos from './pages/tabelaProdutos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/acompanhar' element={<AcompPedido />}/>
        <Route path='/cabecalho' element={<Cabecalho />} />
        <Route path='/rodape' element={<Rodape />} />
        <Route path='/barra-lateral' element={<BarraLateral />} />
        <Route path='/logincliente' element={<Lgcliente />} />
        <Route path='/loginadm' element={<Lgadm />} />
        <Route path='/cadastrocliente' element={<Cadastrocliente />} />
        <Route path='/previsualizaçao' element={<Prev />} />
        <Route path='/previsualizaçao2' element={<Prev2 />} />
        <Route path='/previsualizaçao3' element={<Prev3 />} />
        <Route path='/previsualizaçao4' element={<Prev4 />} />
        <Route path='/previsualizaçao5' element={<Prev5 />} />
        <Route path='/previsualizaçao6' element={<Prev6 />} />
        <Route path='/previsualizaçao7' element={<Prev7 />} />
        <Route path='/previsualizaçao8' element={<Prev8 />} />
        <Route path='/previsualizaçao9' element={<Prev9 />} />
        <Route path='/previsualizaçao10' element={<Prev10 />} />
        <Route path='/recuperar-senha' element={<Recupera />} />
        <Route path='/sobre' element={<Sob/>} />
        <Route path='/favoritos' element={<Favoritos/>} />
        <Route path='/pagamento' element={<Pgto/>} />
        <Route path='/confirmar-pedido' element={<ConfirmPed />} />
        <Route path='/meus-pedidos' element={<MyPed />} />
        <Route path='/conta' element={<Conta />} />
        <Route path='/adm' element={<PrincAdm />} />
        <Route path='/cadastrar-produto' element={<CadastrarProd />} />
        <Route path='/dados-do-cliente' element={<Dtc />} />
        <Route path='/cabecalho-adm' element={<CabecalhoAdm />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/detalhes-pedidos-andamento' element={<DtlPedAnd/>} />
        <Route path='/pedidos-finalizados' element={<PedFin/>} />
        <Route path='/usuarios' element={<ListarUsuarios/>} />
        <Route path='/pedidos-em-andamento' element={<PedidosAndamento/>} />
        <Route path='/mensagens' element={<ListarMensagens/>} />
        <Route path='/relatorios' element={<ListarRelatorios/>} />
        <Route path='/produtos' element={<Produtos/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
