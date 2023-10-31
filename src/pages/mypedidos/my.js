import './my.scss';
import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

export default function MyPed() {

    const [dados, setDados] = useState(null); // Inicialmente, os dados são nulos

  useEffect(() => {
    fetch('nossa/url/da/api')
      .then(response => response.json())
      .then(data => setDados(data)) // Define os dados para o estado quando a API retornar os dados
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, []); 


    return (
        <div className='Ped'>
            <Cabecalho/>
        <div className='Meio'>

        <div className='quad'>
        <h4>Em Andamento</h4>
            <div className='quadrados'>
                <div className='square'>
                    <div className='img' alt='aqui seria a imagem do livro'></div>
                    <div className='direita'>
                        <p>Status:</p>
                        <p>{dados.status}</p> 
                        <img className='nadainda' src={dados.imagem} alt='Imagem do livro' /> 
                    </div>
                </div>
            
            </div>
        
        
        
        
        
        
        </div>
        </div>
            <Rodape/>
        </div>
    )
}