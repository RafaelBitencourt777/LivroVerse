import React, { useState } from 'react';
import user from '../../assets/img/useradm.png';
import up from '../../assets/img/cadastrar-img.png';
import axios from 'axios';

export default function CadastrarProd() {
  const [produto, setProduto] = useState({
    id_categoria: '', 
    id_avaliacao: '', 
    nm_produto: '',
    vl_preco_fis: '',
    ds_desc: '',
    vl_preco_pdf: '',
    vl_preco_kindle: '',
    vl_preco_promocional: '',
    bt_destaque: '',
    bt_promocao: '',
    bt_disponivel: '',
    qtd_estoque: '',
    bl_favorito: '',
    imagem: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduto({
      ...produto,
      imagem: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in produto) {
        formData.append(key, produto[key]);
      }

      const response = await axios.post('http://129.148.42.252:5018/produto/cadastrar', formData);

      if (response.status === 201) {
        console.log('Produto cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar o produto.');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  return (
    <div className='CadastrarProd'>
      <img className='cad-user' src={user} alt='' />
      <div className='cadp-quad'>
        <h1>Adicione um novo produto</h1>
        <form onSubmit={handleSubmit}>
          <div className='inps1'>
            <input
              className='Cad-name'
              type='text'
              placeholder='Nome do Produto'
              name='nm_produto'
              value={produto.nm_produto}
              onChange={handleInputChange}
            />
            <input
              className='Cad-quant'
              type='number'
              placeholder='Quantidade'
              name='qtd_estoque'
              value={produto.qtd_estoque}
              onChange={handleInputChange}
            />
          </div>


          <div className='inp-pe'>
            <input
              className='Cad-img'
              type='file'
              accept='image/*'
              onChange={handleFileChange}
            />
            <img src={up} alt='' />
          </div>

          <button type='submit'>Cadastrar Produto</button>
        </form>
      </div>
    </div>
  );
}
