import React, { useState } from 'react';
import './loginadm.scss';
import user from '../../assets/img/useradm.png';
import iuser from '../../assets/img/iuseradm.png';
import cadeado from '../../assets/img/cadeadoadm.png';
import login from '../../assets/img/loginadm.png';
import axios from 'axios';

export default function Lgadm() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const loginAdmin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/admin/login', {
        usuario,
        senha,
      });

      if (response.status === 200) {
        setMensagem('Login de administrador bem-sucedido!');
        
      } else {
        setMensagem('Credenciais de administrador inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  return (
    <div className="Loginadm">
      <img className="imgg" src={user} alt="" />

      <div className="quadro">
        <div className="inputs">
          <input
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <img src={iuser} alt="" />
        </div>

        <div className="inputs">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <img src={cadeado} alt="" />
        </div>

        <div className="botao">
          <button onClick={loginAdmin}>Login</button>
          <img src={login} alt="" />
        </div>
        <div className="mensagem">{mensagem}</div>
      </div>
    </div>
  );
}
