import React from 'react';
import './index.scss';

export default function BarraLateral({ fotoPerfil, nome, email, nivelConta }) {
  return (
    <div className='BarraLateral'>
      <div className='cima'>
        <div className='user'>
          <img src={fotoPerfil} alt='Foto de Perfil' />
        </div>

        <div className='textos'>
          <h2>{nome}</h2>
          <h5>{email}</h5>
          <h3>Sua conta está no nível:</h3>
          <h2>{nivelConta}</h2>
        </div>
      </div>

      <div className='baixo'>
        <div>
          <h2>Meus Pedidos</h2>
        </div>

        <div>
          <h2>Minha Conta</h2>
        </div>

        <div>
          <h2>Favoritos</h2>
        </div>

        <div>
          <h2>Historico de navegação</h2>
        </div>

        <div>
          <h2>Lista de Favoritos</h2>
        </div>

        <div>
          <h2>Configurações</h2>
        </div>
      </div>
    </div>
  );
}
