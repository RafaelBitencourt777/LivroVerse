import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

import carrinho from '../../assets/img/carrinho.png';
import coracao from '../../assets/img/coracao.png';
import logo from '../../assets/img/logo.png';
import lupa from '../../assets/img/lupa.png';
import user from '../../assets/img/user.png';

import './index.scss'; 

function Cabecalho() {
  const [pesquisa, setPesquisa] = useState('');
  const [resultados, setResultados] = useState([]);

  const handlePesquisaChange = (event) => {
    setPesquisa(event.target.value);
  };

  const realizarPesquisa = async () => {
    try {
      const response = await axios.get('http://129.148.42.252:3018/produto/pesquisar', {
        params: {
          pesquisa: pesquisa,
        },
      });

      setResultados(response.data);
    } catch (error) {
      console.error('Erro na pesquisa:', error);
    }
  };

  return (
    <div className="Cabecalho">
      <a className='l' href='/'>
        <img src={logo} alt='' />
      </a>
      <div className='barrapesquisa'>
        <input
          placeholder='O que você está buscando?'
          value={pesquisa}
          onChange={handlePesquisaChange}
        />
        <div className='lupa-container' onClick={realizarPesquisa}>
          <img className='lupa' src={lupa} alt='' />
        </div>
      </div>
      <div className='trilogia'>
        <Link to="/carrinho">
          <img src={carrinho} alt='' />
        </Link>
        <Link to="/favoritos" className="link-padrao">
          <img src={coracao} alt='' />
        </Link>
        <NavLink to="/conta" className="link-padrao">
          <img src={user} alt='' />
        </NavLink>
      </div>
      <div className='resultados'>
        {resultados.map(produto => (
          <div key={produto.id}>
            {}
            {produto.nm_produto}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cabecalho;
