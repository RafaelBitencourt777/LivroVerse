import React, { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import botaolivros from '../../assets/img/googleplaylivrosKKKK.png';
import './dtc.scss';


export default function Dtc() {
  const [cep, setCep] = useState('');

  const handleCepChange = (event) => {
      let value = event.target.value;
      value = value.replace(/\D/g, ''); 
      if (value.length > 8) {
          value = value.substr(0, 8); 
      }
      if (value.length > 5) {
          value = `${value.substr(0, 5)}-${value.substr(5, 3)}`; 
      }
      setCep(value);
  };
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [Complemento, setComplemento] = useState('');
  const [referencia, setReferencia] = useState('');
  const [Bairro, setBairro] = useState('');
  const [city, setCity] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleNumeroChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 5) {
      setNumero(inputValue);
    }

    
  };

  return (
    <div className='agrupado'>
      <Cabecalho />
      <div className='BlueCenter'>
        <div className='inputsdir'>
          <p onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className='classif' >
            CEP
            <span
              className={`tooltip-trigger ${isHovered ? 'hovered' : ''}`}
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip' ><b> CAMPO OBRIGATÓRIO</b></span>
            )}
          </p>
          <input
            className='inpu'
            type='text'
            id='cep'
            placeholder='CEP'
            value={cep}
            onChange={handleCepChange}
          />
            <p onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className='classif' >
              Logradouro
            <span
              className={`tooltip-trigger ${isHovered ? 'hovered' : ''}`}
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'><b> CAMPO OBRIGATÓRIO</b></span>
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
            <p
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='classif'
          >
            Número
            <span
              className={`tooltip-trigger ${isHovered ? 'hovered' : ''}`}
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && <span className='tooltip'><b> CAMPO OBRIGATÓRIO</b></span>}
          </p>
          <input
            className='inpu'
            type='number'
            id='numero'
            placeholder='Número'
            value={numero}
            onChange={handleNumeroChange}
          />
            <p onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className='classif'>
            Complemento
            <span
              className={`tooltip-trigger ${isHovered ? 'hovered' : ''}`}
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'><b> CAMPO OBRIGATÓRIO</b></span>
            )}
            </p>
            <input
                  className='inpu'
                  type="text"
                  id="complemento"
                  placeholder="Complemento"
                  value={Complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                />
            <p onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className='classif'>
            Referência
            <span
              className={`tooltip-trigger ${isHovered ? 'hovered' : ''}`}
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'><b> CAMPO OBRIGATÓRIO</b></span>
            )}
            </p>
            <input
                  className='inpu'
                  type="text"
                  id="referencia"
                  placeholder="Referência"
                  value={referencia}
                  onChange={(e) => setReferencia(e.target.value)}
                />
            <p onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className='classif'>
            Bairro
            <span
              className={`tooltip-trigger ${isHovered ? 'hovered' : ''}`}
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip'><b> CAMPO OBRIGATÓRIO</b></span>
            )}
            </p>
            <input
                  className='inpu'
                  type="text"
                  id="bairro"
                  placeholder="Bairro"
                  value={Bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
            <p  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className='classif'>
            Cidade
            <span
              className={`tooltip-trigger ${isHovered ? 'hovered' : ''}`}
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              *
            </span>
            {tooltipVisible && (
              <span className='tooltip' ><b> CAMPO OBRIGATÓRIO</b></span>
            )}
            </p>
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

