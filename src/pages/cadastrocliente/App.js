import './App.scss';
import React, { useState } from 'react';
import fundolivros from '../../assets/img/fundolivros.png';
import axios from 'axios';

function Cadastrocliente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await axios.post('http://129.148.42.252:3018/cliente/cadastrar', {
        nm_cliente: nome,
        ds_email: email,
        ds_senha: senha,
      });

      if (response.status === 201) {
        setMensagem('Cliente cadastrado com sucesso.');
      } else {
        setMensagem('Ocorreu um erro ao cadastrar o cliente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  return (
    <div className='tudo'>
      <div className='fundo' style={{ backgroundImage: `url(${fundolivros})` }}>
        <div className='azulao'>
          <h3 className='cadas'>Cadastre-se</h3>
          <div className='input'>
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className='input'>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='input'>
            <label htmlFor="confirmarEmail">Confirme o Email</label>
            <input type="text" id="confirmarEmail" placeholder="Confirmar Email" />
          </div>

          <div className='input'>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className='input'>
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" placeholder="Confirmar Senha"/>
          </div>

          <button className="button-criar" onClick={handleCadastro}>
            Criar
          </button>
          <div className="mensagem">{mensagem}</div>
        </div>
        
        <div className="termos">
          <input type="checkbox" id="termosCheckbox" name="termos" />
          <label htmlFor="termosCheckbox">Li e aceito os termos de uso e os termos de privacidade</label>
        </div>
      </div>
    </div>
  );
}

export default Cadastrocliente;
