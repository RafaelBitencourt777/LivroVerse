import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuarios = async () => {
      try {
        const response = await axios.get('http://129.148.42.252:5018/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error.message);
      }
    };

    buscarUsuarios();
  }, []);

  return (
    <div className='ListarUsuarios'>
      <h1>Lista de Usuários</h1>
      <div className='usuarios-lista'>
        {usuarios.map((usuario) => (
          <div key={usuario.id} className='usuario-item'>
            <p><strong>Nome:</strong> {usuario.nome}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
