import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/landingpage/landing.js';
import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import BarraLateral from './components/barral';
import Lgcliente from './pages/logincliente/App.js';
import Lgadm from './pages/loginadm/loginadm.js';
import Cadastrocliente from './pages/cadastrocliente/App.js';
import Prev from './pages/previsu/prev.js';
import Recupera from './pages/redefinirsenha/redef.js';
import Sob from './pages/sobre/livro.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/cabecalho' element={<Cabecalho />} />
        <Route path='/rodape' element={<Rodape />} />
        <Route path='/barra-lateral' element={<BarraLateral />} />
        <Route path='/logincliente' element={<Lgcliente />} />
        <Route path='/loginadm' element={<Lgadm />} />
        <Route path='/cadastrocliente' element={<Cadastrocliente />} />
        <Route path='/previsualizaçao' element={<Prev />} />
        <Route path='/recuperar-senha' element={<Recupera />} />
        <Route path='/sobre' element={<Sob/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
