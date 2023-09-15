import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/landingpage/landing.js';
import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import BarraLateral from './components/barral';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/cabecalho' element={<Cabecalho />} />
        <Route path='/rodape' element={<Rodape />} />
        <Route path='/barra-lateral' element={<BarraLateral />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
