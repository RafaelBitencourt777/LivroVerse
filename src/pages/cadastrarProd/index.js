import React, { useState } from 'react';
import axios from 'axios';
import './index.scss';

import user from '../../assets/img/useradm.png';
import up from '../../assets/img/cadastrar-img.png';

export default function CadastrarProd() {
  const [produto, setProduto] = useState({
    nome: '',
    quantidade: 0,
    codigo: 0,
    estoque: 0,
    preco: 0,
    descricao: '',
    genero: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };



  const cadastrarProduto = async () => {
    try {
      const formData = new FormData();
      Object.entries(produto).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await axios.post('http://129.148.42.252:3018/produto/cadastrar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Produto cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error.message);
    }
  };

  return (
    <div className='CadastrarProd'>
      <img className='cad-user' src={user} alt='' />
      <div className='cadp-quad'>
        <h1>Adicione um novo produto</h1>
        <div className='inps1'>
          <input
            className='Cad-name'
            type='text'
            name='nome'
            placeholder='Nome do Produto'
            value={produto.nome}
            onChange={handleInputChange}
          />
          <input
            className='Cad-quant'
            type='number'
            name='quantidade'
            placeholder='Quantidade'
            value={produto.quantidade}
            onChange={handleInputChange}
          />
        </div>
        <div className='inps2'>
          <input
            className='Cad-cod'
            type='number'
            name='codigo'
            placeholder='Código'
            value={produto.codigo}
            onChange={handleInputChange}
          />
          <input
            className='Cad-est'
            type='number'
            name='estoque'
            placeholder='Estoque'
            value={produto.estoque}
            onChange={handleInputChange}
          />
          <input
            className='Cad-preco'
            type='number'
            name='preco'
            placeholder='Preço'
            value={produto.preco}
            onChange={handleInputChange}
          />
        </div>
        <div className='inps3'>
          <input
            className='Cad-desc'
            type='text'
            name='descricao'
            placeholder='Descrição do Produto'
            value={produto.descricao}
            onChange={handleInputChange}
          />
          <div className='inp-pe'>
            <input
              className='Cad-gen'
              type='text'
              name='genero'
              placeholder='Gênero do Produto'
              value={produto.genero}
              onChange={handleInputChange}
            />
            <input
              className='Cad-img'
              type='file'
              name='imagem'
              onChange={handleFileChange}
            />
            <img src={up} alt='' />
          </div>
        </div>
        <button onClick={cadastrarProduto}>Cadastrar Produto</button>
      </div>
    </div>
  );
}
