import './App.scss';
import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import fundolivros from '../../assets/img/fundolivros.png';
import axios from 'axios';

function Cadastrocliente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf , setCpf] = useState('');
  const [assinatura ,setassinatura]= useState('');
  const [telefone, setTelefone] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await axios.post('http://129.148.42.252:5018/cliente/cadastro', {
        nm_cliente: nome,
        ds_email: email,
        ds_senha: senha,
        ds_cpf: cpf,
        id_assinatura: assinatura,
        ds_telefone: telefone
      });

      if (response.status === 200) {
        toast.success('Cliente cadastrado com sucesso.'); 
      } else {
        toast.error('Ocorreu um erro ao cadastrar o cliente.'); 
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      toast.error('Erro ao fazer a solicitação. Tente novamente.'); 
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
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
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
      </div>

      <div className='input'>
        <label htmlFor="confirmarCadastro">Confirmar Cadastro</label>
        <input
          type="text"
          id="confirmarCadastro"
          placeholder="Digite o número 5 para confirmar o cadastro"
          value={assinatura}
          onChange={(e) => setassinatura(e.target.value)}
        />
      </div>
      <div className='input'>
        <label htmlFor="telefone">Telefone</label>
        <input
          type="tel"
          id="telefone"
          placeholder="Digite seu número de telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>

        <button className="button-criar" onClick={handleCadastro}>
          Criar
        </button>
        <div className="mensagem">{}</div>
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