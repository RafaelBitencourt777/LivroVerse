import './App.scss';
import React, { useState } from 'react';
import fundolivros from '../../assets/img/fundolivros.png';
import googleLogo from '../../assets/img/google-logo.png';
import facebookLogo from '../../assets/img/facebook-logo.png';
import appleLogo from '../../assets/img/apple-logo.png';
import axios from 'axios';

function Lgcliente() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5000/cliente/login', { email, senha });

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
            <button className="social-button google">
              <img src={googleLogo} alt="Google Logo" className="social-icon" />
              Continuar com o Google
            </button>
            <button className="social-button facebook">
              <img src={facebookLogo} alt="Facebook Logo" className="social-icon" />
              Continuar com o Facebook
            </button>
            <button className="social-button apple">
              <img src={appleLogo} alt="Apple Logo" className="social-icon" />
              Continuar com a Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lgcliente;