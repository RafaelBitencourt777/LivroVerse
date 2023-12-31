
import React, { useEffect, useState } from 'react';
import './index.scss';

import user from '../../assets/img/useradm.png';
import logo from '../../assets/img/logo.png';
import gp from '../../assets/img/gerenciar-produtos.png';
import pedidos from '../../assets/img/pedidos.png';
import pc from '../../assets/img/produtos-cadastrados.png';
import relatorios from '../../assets/img/relatorios.png';

export default function PrincAdm() {
  const [nomeDaConta, setNomeDaConta] = useState('');

  useEffect(() => {
    const fazerLogin = async () => {
      try {
        const response = await fetch('http://129.148.42.252/adm/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ds_email: 'seuEmail',
            ds_senha: 'suaSenha',
          }),
        });

        const { nome } = await response.json();

        setNomeDaConta(nome);
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    };

    fazerLogin();
  }, []);

  return (
    <div className='PrincAdm'>
      <div className='adm-esquerda'>
        <div className='adm-ecima'>
          <img src={user} alt='' />
          <p>Olá Sr. {nomeDaConta}</p>
        </div>

        <div className='adm-ebaixo'>

          <a href='/pedidos-finalizados'>
            <button>Pedidos Finalizados</button>
          </a>

          <a href=''>
            <button>Produtos</button>
          </a>

          <a href='/cadastrar-produto'>
            <button>Adicionar Produtos</button>
          </a>

          <a href='/usuarios'>
            <button>Usuários</button>
          </a>

          <a href='/mensagens'>
            <button>Mensagens</button>
          </a>

          <a href='/relatorios'>
            <button>Relatórios</button>
          </a>

          <a href=''>
            <button>Gerenciar Produtos</button>
          </a>

        </div>
      </div>

      <div className='adm-direita'>
        <div className='adm-dcima'>
          <img src={logo} alt='' />
        </div>

        <div className='adm-dbaixo'>
          <div className='dois-quad'>

            <a className='t' href='/pedidos-em-andamento'>
              <div className='adm-quadrado'>
                <h2>Pedidos</h2>
                <img src={pedidos} alt='' />
              </div>
            </a>

            <a className='t' href=''>
              <div className='adm-quadrado'>
                <h2>Produtos Cadastrados</h2>
                <img src={pc} alt='' />
              </div>
            </a>

          </div>

          <div className='dois-quad'>

            <a className='t' href=''>
              <div className='adm-quadrado'>
                <h2>Gerenciar Produtos</h2>
                <img src={gp} alt='' />
              </div>
            </a>

            <a className='t' href='/relatorios'>
              <div className='adm-quadrado'>
                <h2>Relatórios</h2>
                <img src={relatorios} alt='' />
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
