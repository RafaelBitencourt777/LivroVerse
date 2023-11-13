import React, { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import botaolivros from '../../assets/img/googleplaylivrosKKKK.png';
import './dtc.scss';

export default function Dtc() {
  const [CEP, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [Complemento, setComplemento] = useState('');
  const [referencia, setReferencia] = useState('');
  const [Bairro, setBairro] = useState('');
  const [city, setCity] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className='agrupado'>
      <Cabecalho />
      <div className='BlueCenter'>
        <div className='inputsdir'>
          <p className='classif'>
            CEP
            <span
              className='tooltip-trigger'
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'>Campo obrigatório</span>
            )}
          </p>
          <input
            className='inpu'
            type='number'
            id='cep'
            placeholder='CEP'
            value={CEP}
            onChange={(e) => setCep(e.target.value)}
          />
            <p className='classif'>Logradouro*
            <span
              className='tooltip-trigger'
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'>Campo obrigatório</span>
            )}
            </p>
            <input
                  className='inpu'
                  type="text"
                  id="Logradouro"
                  placeholder="Logradouro"
                  value={logradouro}
                  onChange={(e) => setLogradouro(e.target.value)}
                />
            <p className='classif'>
            <span
              className='tooltip-trigger'
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'>Campo obrigatório</span>
            )}
              Número*</p>
            <input
                  className='inpu'  
                  type="number"
                  id="numero"
                  placeholder="Número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
            <p className='classif'>
            <span
              className='tooltip-trigger'
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'>Campo obrigatório</span>
            )}
              Complemento*</p>
            <input
                  className='inpu'
                  type="text"
                  id="complemento"
                  placeholder="Complemento"
                  value={Complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                />
            <p className='classif'>
            <span
              className='tooltip-trigger'
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'>Campo obrigatório</span>
            )}
              Referência*</p>
            <input
                  className='inpu'
                  type="text"
                  id="referencia"
                  placeholder="Referência"
                  value={referencia}
                  onChange={(e) => setReferencia(e.target.value)}
                />
            <p className='classif'>
            <span
              className='tooltip-trigger'
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'>Campo obrigatório</span>
            )}
              Bairro*</p>
            <input
                  className='inpu'
                  type="text"
                  id="bairro"
                  placeholder="Bairro"
                  value={Bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
            <p className='classif'>
            <span
              className='tooltip-trigger'
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'>Campo obrigatório</span>
            )}
              Cidade*</p>
            <input
                  className='inpu'
                  type="text"
                  id="Cidade"
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <img className='livrosbrutos' src={botaolivros} alt=''/>
          </div>
          <Rodape/>
        </div>
  )
}
