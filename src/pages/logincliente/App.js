import React, { useState } from 'react';
import './App.scss';
import axios from 'axios';

import fundolivros from '../../assets/img/fundolivros.png';
import googleLogo from '../../assets/img/google-logo.png';
import facebookLogo from '../../assets/img/facebook-logo.png';
import appleLogo from '../../assets/img/apple-logo.png';

function Lgcliente() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://129.148.42.252:3018/cliente/login', { email, senha });

      if (response.status === 200) {
        setMensagem('Login bem-sucedido!');
      } else {
        setMensagem('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  return (
    <div className='tudo'>
      <div className='fundo' style={{ backgroundImage: `url(${fundolivros})` }}>
        <p className='textobondoso'>Não possui Login? <a className='cadastrobruto' href='/cadastrocliente'><u>CADASTRE-se</u></a> </p>
        <div className='azulao'>
          <h3 className='loginh'>Login</h3>
          <div className='input'>
            <label htmlFor="email">Email ou telefone</label>
            <input
              type="text"
              id="email"
              placeholder="Email ou telefone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <a href="/recuperar-senha" className="forgot-password">Esqueci minha senha</a>
          </div>
          <button className="button-entrar" onClick={login}>
            Entrar
          </button>
          <div className="mensagem">{mensagem}</div>
          <div className="social-buttons">
            <a href="URL-DO-GOOGLE-LOGIN" className="social-button google" style={{ textDecoration: 'none' }}>
              <img src={googleLogo} alt="" className="social-icon" />
              Continuar com o Google
            </a>
            <a href="URL-DO-FACEBOOK-LOGIN" className="social-button facebook" style={{ textDecoration: 'none' }}>
              <img src={facebookLogo} alt="" className="social-icon" />
              Continuar com o Facebook
            </a>
            <a href="URL-DO-APPLE-LOGIN" className="social-button apple" style={{ textDecoration: 'none' }}>
              <img src={appleLogo} alt="" className="social-icon" />
              Continuar com a Apple
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lgcliente;
