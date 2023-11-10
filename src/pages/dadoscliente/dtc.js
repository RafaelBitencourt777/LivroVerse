import './dtc.scss';
import React, { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

export default function Dtc() {
      const [CEP, setCep] = useState('');
      const [logradouro, setLogradouro] = useState('');
      const [numero, setNumero] = useState('');
      const [Complemento, setComplemento] = useState('');
      const [referencia, setReferencia] = useState('');
      const [Bairro, setBairro] = useState('');
      const [city, setCity] = useState('');
    
      return (
    <div className='agrupado'>
      <Cabecalho />
        <div className='BlueCenter'>
          <div className='inputsdir'>
            <input
                  type="number"
                  id="cep"
                  placeholder="CEP"
                  value={CEP}
                  onChange={(e) => setCep(e.target.value)}
                />

            <input
                  type="text"
                  id="Logradouro"
                  placeholder="Logradouro"
                  value={logradouro}
                  onChange={(e) => setLogradouro(e.target.value)}
                />

            <input
                  type="number"
                  id="numero"
                  placeholder="numero"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />

            <input
                  type="text"
                  id="complemento"
                  placeholder="Complemento"
                  value={Complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                />
            <input
                  type="text"
                  id="referencia"
                  placeholder="Referência"
                  value={referencia}
                  onChange={(e) => setReferencia(e.target.value)}
                />

            <input
                  type="text"
                  id="bairro"
                  placeholder="Bairro"
                  value={Bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />

            <input
                  type="text"
                  id="Cidade"
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
            </div>
          </div>
          <Rodape/>
        </div>
  )
}
