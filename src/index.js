import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';

import App from './pages/landingpage/landing.js';
import AcompPedido from './pages/acompanhamentoPedido';
import BarraLateral from './components/barral';
import Cabecalho from './components/cabecalho';
import Cadastrocliente from './pages/cadastrocliente/App.js';
import Favoritos from './pages/favoritos';
import Lgadm from './pages/loginadm/loginadm.js';
import Lgcliente from './pages/logincliente/App.js';
import Prev from './pages/previsu/prev.js';
import Recupera from './pages/redefinirsenha/redef.js';
import Rodape from './components/rodape';
import Sob from './pages/sobre/livro.js';
import Pgto from './pages/frmspgto/pgto.js';
import ConfirmPed from './pages/confirmPedido';
import MyPed from './pages/mypedidos/my.js';
import Conta from './pages/areaconta/area.js';
import PrincAdm from './pages/principalAdm'

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
        <Route path='/recuperar-senha' element={<Recupera />} />
        <Route path='/sobre' element={<Sob/>} />
        <Route path='/favoritos' element={<Favoritos/>} />
        <Route path='/pagamento' element={<Pgto/>} />
        <Route path='/confirmar-pedido' element={<ConfirmPed />} />
        <Route path='/meus-pedidos' element={<MyPed />} />
        <Route path='/conta' element={<Conta />} />
        <Route path='/adm' element={<PrincAdm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
